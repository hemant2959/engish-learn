import { useEffect, useState } from "react";
import { BellRing, CheckCircle2, UserPlus } from "lucide-react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { db, isFirebaseConfigured, requestPushToken } from "@/lib/firebase";

const SIGNUP_KEY = "english-learning.signup";

type StoredSignup = { id: string; name: string; mobile: string };

function loadStoredSignup(): StoredSignup | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(SIGNUP_KEY);
    return raw ? (JSON.parse(raw) as StoredSignup) : null;
  } catch {
    return null;
  }
}

function saveStoredSignup(signup: StoredSignup) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(SIGNUP_KEY, JSON.stringify(signup));
}

function normalizeMobile(raw: string): string {
  return raw.replace(/[^0-9]/g, "");
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => setTimeout(() => reject(new Error("Timed out")), ms)),
  ]);
}

function isValidMobile(digits: string): boolean {
  return digits.length >= 7 && digits.length <= 15;
}

export function SignupView() {
  const [stored, setStored] = useState<StoredSignup | null>(null);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [pushEnabled, setPushEnabled] = useState(false);
  const [enablingPush, setEnablingPush] = useState(false);

  useEffect(() => {
    setStored(loadStoredSignup());
    if (typeof window !== "undefined" && "Notification" in window) {
      setPushEnabled(Notification.permission === "granted");
    }
  }, []);

  const enablePush = async (docId: string) => {
    if (!db) return;
    setEnablingPush(true);
    try {
      const token = await requestPushToken();
      if (token) {
        await withTimeout(
          setDoc(doc(db, "users", docId), { fcmToken: token, updatedAt: serverTimestamp() }, { merge: true }),
          12000,
        );
        setPushEnabled(true);
      }
    } catch {
      // best-effort: leave push disabled, the user can retry the button
    } finally {
      setEnablingPush(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) return;

    const trimmedName = name.trim();
    const digits = normalizeMobile(mobile);
    if (trimmedName.length < 2) {
      setError("Please enter your name.");
      return;
    }
    if (!isValidMobile(digits)) {
      setError("Please enter a valid mobile number.");
      return;
    }

    setError(null);
    setStatus("submitting");
    try {
      const token = await requestPushToken();
      await withTimeout(
        setDoc(doc(db, "users", digits), {
          name: trimmedName,
          mobile: digits,
          fcmToken: token,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        }),
        12000,
      );
      const signup = { id: digits, name: trimmedName, mobile: digits };
      saveStoredSignup(signup);
      setStored(signup);
      setPushEnabled(Boolean(token));
      setStatus("idle");
    } catch {
      setStatus("error");
      setError("Couldn't reach the server. Check your internet connection and try again.");
    }
  };

  if (!isFirebaseConfigured) {
    return (
      <div className="text-center py-10">
        <div className="mx-auto size-14 rounded-2xl bg-primary/10 grid place-items-center mb-4">
          <UserPlus className="size-6 text-primary" />
        </div>
        <p className="text-sm text-muted-foreground max-w-xs mx-auto">
          Sign-up isn't set up on this deployment yet.
        </p>
      </div>
    );
  }

  if (stored) {
    return (
      <div className="text-center py-10">
        <div className="mx-auto size-14 rounded-2xl bg-primary/10 grid place-items-center mb-4">
          <CheckCircle2 className="size-6 text-primary" />
        </div>
        <h2 className="font-display font-semibold text-lg mb-1">You're signed up</h2>
        <p className="text-sm text-muted-foreground">
          {stored.name} · {stored.mobile}
        </p>
        {pushEnabled ? (
          <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1.5">
            <BellRing className="size-3.5" /> Notifications are on
          </p>
        ) : (
          <Button
            onClick={() => enablePush(stored.id)}
            disabled={enablingPush}
            className="mt-5 rounded-xl h-11 px-6"
          >
            {enablingPush ? "Enabling…" : "Enable notifications"}
          </Button>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-6">
        <div className="mx-auto size-14 rounded-2xl bg-primary/10 grid place-items-center mb-4">
          <UserPlus className="size-6 text-primary" />
        </div>
        <h2 className="font-display font-semibold text-lg mb-1">Sign up for updates</h2>
        <p className="text-sm text-muted-foreground max-w-xs mx-auto">
          Share your name and mobile number to get notified about new lessons and features.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-xs mx-auto space-y-3">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="h-11 rounded-2xl"
        />
        <Input
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Mobile number"
          type="tel"
          inputMode="tel"
          className="h-11 rounded-2xl"
        />
        {error && <p className="text-xs text-destructive text-center">{error}</p>}
        <Button type="submit" disabled={status === "submitting"} className="w-full h-11 rounded-xl">
          {status === "submitting" ? "Signing up…" : "Sign Up"}
        </Button>
      </form>
    </div>
  );
}
