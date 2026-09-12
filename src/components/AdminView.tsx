import { useEffect, useState } from "react";
import { LogOut, Send, Shield, Users as UsersIcon, X } from "lucide-react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { collection, onSnapshot, orderBy, query, type Timestamp } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { auth, db, functions, isFirebaseConfigured } from "@/lib/firebase";

type SignedUpUser = {
  id: string;
  name: string;
  mobile: string;
  hasPush: boolean;
  createdAt: Timestamp | null;
};

type SendResult = { successCount: number; failureCount: number; totalTokens: number };

export function AdminView({ onClose }: { onClose: () => void }) {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    if (!auth) {
      setAuthLoading(false);
      return;
    }
    return onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
    });
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-background overflow-y-auto">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 pb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="size-9 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
            <Shield className="size-5" />
          </div>
          <h1 className="font-display text-xl font-bold flex-1">Admin</h1>
          <button
            onClick={onClose}
            aria-label="Close"
            className="size-9 rounded-xl grid place-items-center hover:bg-accent transition-colors shrink-0"
          >
            <X className="size-4" />
          </button>
        </div>

        {!isFirebaseConfigured ? (
          <p className="text-sm text-muted-foreground text-center py-10">
            The backend isn't set up on this deployment yet.
          </p>
        ) : authLoading ? (
          <p className="text-sm text-muted-foreground text-center py-10">Loading…</p>
        ) : user ? (
          <AdminDashboard user={user} />
        ) : (
          <AdminLogin />
        )}
      </div>
    </div>
  );
}

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth) return;
    setError(null);
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
    } catch {
      setError("Sign-in failed. Check your email and password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xs mx-auto mt-8 space-y-3">
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Admin email"
        type="email"
        className="h-11 rounded-2xl"
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        className="h-11 rounded-2xl"
      />
      {error && <p className="text-xs text-destructive text-center">{error}</p>}
      <Button type="submit" disabled={loading} className="w-full h-11 rounded-xl">
        {loading ? "Signing in…" : "Sign In"}
      </Button>
    </form>
  );
}

function AdminDashboard({ user }: { user: User }) {
  const [users, setUsers] = useState<SignedUpUser[] | null>(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [sendState, setSendState] = useState<"idle" | "sending" | "error">("idle");
  const [sendResult, setSendResult] = useState<SendResult | null>(null);

  useEffect(() => {
    if (!db) return;
    const q = query(collection(db, "users"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snapshot) => {
      setUsers(
        snapshot.docs.map((d) => {
          const data = d.data();
          return {
            id: d.id,
            name: typeof data.name === "string" ? data.name : "",
            mobile: typeof data.mobile === "string" ? data.mobile : "",
            hasPush: Boolean(data.fcmToken),
            createdAt: (data.createdAt as Timestamp | undefined) ?? null,
          };
        }),
      );
    });
  }, []);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!functions || !title.trim() || !body.trim()) return;
    setSendState("sending");
    setSendResult(null);
    try {
      const sendNotificationToAll = httpsCallable<{ title: string; body: string }, SendResult>(
        functions,
        "sendNotificationToAll",
      );
      const res = await sendNotificationToAll({ title: title.trim(), body: body.trim() });
      setSendResult(res.data);
      setSendState("idle");
      setTitle("");
      setBody("");
    } catch {
      setSendState("error");
    }
  };

  const pushCount = users?.filter((u) => u.hasPush).length ?? 0;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-muted-foreground truncate">{user.email}</p>
        <button
          onClick={() => auth && signOut(auth)}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors shrink-0"
        >
          <LogOut className="size-3.5" /> Sign out
        </button>
      </div>

      <div className="rounded-2xl border bg-card p-4 mb-6">
        <h2 className="font-display font-semibold text-sm mb-3 flex items-center gap-1.5">
          <Send className="size-4" /> Send Notification
        </h2>
        <form onSubmit={handleSend} className="space-y-2">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="h-10 rounded-xl"
          />
          <Input
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Message"
            className="h-10 rounded-xl"
          />
          <Button type="submit" disabled={sendState === "sending"} className="w-full h-10 rounded-xl">
            {sendState === "sending" ? "Sending…" : `Send to ${pushCount} device${pushCount === 1 ? "" : "s"}`}
          </Button>
          {sendState === "error" && (
            <p className="text-xs text-destructive text-center">Couldn't send. Try again.</p>
          )}
          {sendResult && (
            <p className="text-xs text-muted-foreground text-center">
              Delivered to {sendResult.successCount} of {sendResult.totalTokens} devices.
            </p>
          )}
        </form>
      </div>

      <h2 className="font-display font-semibold text-sm mb-3 flex items-center gap-1.5">
        <UsersIcon className="size-4" /> Signed Up ({users?.length ?? 0})
      </h2>
      {users === null ? (
        <p className="text-sm text-muted-foreground text-center py-6">Loading…</p>
      ) : users.length === 0 ? (
        <p className="text-sm text-muted-foreground text-center py-6">No sign-ups yet.</p>
      ) : (
        <ul className="space-y-2">
          {users.map((u) => (
            <li key={u.id} className="flex items-center justify-between gap-3 rounded-2xl border bg-card px-4 py-3">
              <div className="min-w-0">
                <div className="font-medium text-sm truncate">{u.name}</div>
                <div className="text-xs text-muted-foreground">{u.mobile}</div>
              </div>
              {u.hasPush && (
                <span className="text-[10px] uppercase tracking-wider text-primary bg-primary/10 rounded-full px-2 py-0.5 shrink-0">
                  Push on
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
