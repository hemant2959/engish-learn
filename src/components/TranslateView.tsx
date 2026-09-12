import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, ArrowLeftRight, Languages, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PronounceButton } from "@/components/PronounceButton";
import { allItems } from "@/lib/englishLessons";
import { allSentenceItems } from "@/lib/englishSentences";
import { CONVERSATION_TOPICS } from "@/lib/englishConversations";
import { cn } from "@/lib/utils";

type TranslationEntry = { en: string; odiaMeaning: string; odiaPhonetic: string };
type TranslateDirection = "en-to-odia" | "odia-to-en";

function buildTranslationIndex(): TranslationEntry[] {
  const combined: TranslationEntry[] = [
    ...allItems().map((r) => r.item),
    ...allSentenceItems().map((r) => r.item),
    ...CONVERSATION_TOPICS.flatMap((t) => t.lines),
  ];
  const seen = new Set<string>();
  const index: TranslationEntry[] = [];
  for (const entry of combined) {
    const key = entry.en.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    index.push({ en: entry.en, odiaMeaning: entry.odiaMeaning, odiaPhonetic: entry.odiaPhonetic });
  }
  return index;
}

function fieldFor(direction: TranslateDirection): "en" | "odiaMeaning" {
  return direction === "en-to-odia" ? "en" : "odiaMeaning";
}

function normalize(value: string, direction: TranslateDirection): string {
  return direction === "en-to-odia" ? value.toLowerCase() : value;
}

function searchTranslations(
  index: TranslationEntry[],
  query: string,
  direction: TranslateDirection,
): TranslationEntry[] {
  const q = normalize(query.trim(), direction);
  if (!q) return [];
  const field = fieldFor(direction);

  const exact: TranslationEntry[] = [];
  const startsWith: TranslationEntry[] = [];
  const includes: TranslationEntry[] = [];
  for (const entry of index) {
    const value = normalize(entry[field], direction);
    if (value === q) exact.push(entry);
    else if (value.startsWith(q)) startsWith.push(entry);
    else if (value.includes(q)) includes.push(entry);
  }
  return [...exact, ...startsWith, ...includes].slice(0, 6);
}

// Free, key-less, CORS-enabled machine translation for any text beyond the app's own dictionary.
// Anonymous usage is capped at 5000 words/day; passing an email (the app owner's) raises that to 50000/day.
// See https://mymemory.translated.net/doc/spec.php
const TRANSLATE_ATTRIBUTION_EMAIL = "hemant2959@gmail.com";

async function fetchMachineTranslation(
  text: string,
  direction: TranslateDirection,
  signal: AbortSignal,
): Promise<string> {
  const langpair = direction === "en-to-odia" ? "en|or" : "or|en";
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langpair}&de=${encodeURIComponent(TRANSLATE_ATTRIBUTION_EMAIL)}`;
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`Translation service returned ${res.status}`);
  const data = await res.json();
  const translated = data?.responseData?.translatedText;
  if (typeof translated !== "string" || !translated || /^[A-Z ]+ LANGUAGE PAIR/.test(translated)) {
    throw new Error("No translation returned");
  }
  return translated;
}

type ApiState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; text: string }
  | { status: "error" };

export function TranslateView() {
  const [direction, setDirection] = useState<TranslateDirection>("en-to-odia");
  const [text, setText] = useState("");
  const [apiState, setApiState] = useState<ApiState>({ status: "idle" });
  const index = useMemo(buildTranslationIndex, []);

  const query = text.trim();
  const matches = useMemo(() => searchTranslations(index, query, direction), [index, query, direction]);

  useEffect(() => {
    if (!query) {
      setApiState({ status: "idle" });
      return;
    }
    const controller = new AbortController();
    setApiState({ status: "loading" });
    const timer = setTimeout(() => {
      fetchMachineTranslation(query, direction, controller.signal)
        .then((translated) => setApiState({ status: "success", text: translated }))
        .catch((err) => {
          if ((err as Error)?.name !== "AbortError") setApiState({ status: "error" });
        });
    }, 450);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query, direction]);

  const swapDirection = () => {
    setDirection((d) => (d === "en-to-odia" ? "odia-to-en" : "en-to-odia"));
    setText("");
  };

  const englishText = direction === "en-to-odia" ? query : apiState.status === "success" ? apiState.text : "";

  return (
    <div>
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className={cn("text-sm font-medium", direction === "en-to-odia" ? "text-foreground" : "text-muted-foreground")}>
          English
        </span>
        <button
          onClick={swapDirection}
          aria-label="Swap translation direction"
          className="size-9 rounded-xl border grid place-items-center hover:bg-accent transition-colors shrink-0"
        >
          <ArrowLeftRight className="size-4" />
        </button>
        <span className={cn("text-sm font-medium", direction === "odia-to-en" ? "text-foreground" : "text-muted-foreground")}>
          ଓଡ଼ିଆ
        </span>
      </div>

      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={direction === "en-to-odia" ? "Type any English word or sentence…" : "ଯେକୌଣସି ଶବ୍ଦ କିମ୍ବା ବାକ୍ୟ ଟାଇପ୍ କରନ୍ତୁ…"}
        className="h-12 rounded-2xl text-base mb-4"
      />

      {!query && (
        <div className="text-center py-8">
          <div className="mx-auto size-14 rounded-2xl bg-primary/10 grid place-items-center mb-4">
            <Languages className="size-6 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground max-w-xs mx-auto">
            Translates any word or sentence, not just the ones taught in this app — it calls an online translator, so
            it needs an internet connection. Phrases also taught in Words, Sentences, or Talk get a bonus Odia-script
            pronunciation guide below the translation.
          </p>
        </div>
      )}

      {query && (
        <div className="rounded-2xl border bg-card px-4 py-4 mb-4">
          {apiState.status === "loading" && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground py-2">
              <Loader2 className="size-4 animate-spin" />
              Translating…
            </div>
          )}

          {apiState.status === "success" && (
            <div className="flex items-start gap-2">
              <span className="font-display text-lg font-bold flex-1 min-w-0">{apiState.text}</span>
              {englishText && <PronounceButton text={englishText} className="size-8 shrink-0" />}
            </div>
          )}

          {apiState.status === "error" && (
            <div className="flex items-start gap-2 text-sm text-destructive">
              <AlertTriangle className="size-4 shrink-0 mt-0.5" />
              <span>Couldn't reach the online translator. Check your internet connection and try again.</span>
            </div>
          )}
        </div>
      )}

      {query && matches.length > 0 && (
        <div>
          <p className="text-xs text-muted-foreground mb-2">Also taught in this app, with pronunciation:</p>
          <ul className="space-y-2">
            {matches.map((m, i) => (
              <li key={`${m.en}-${i}`} className="rounded-2xl border bg-card px-4 py-3">
                {direction === "en-to-odia" ? (
                  <>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{m.en}</span>
                      <PronounceButton text={m.en} className="size-7" />
                    </div>
                    <div className="text-sm text-muted-foreground mt-0.5">
                      {m.odiaMeaning} · <span className="italic">{m.odiaPhonetic}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="font-medium">{m.odiaMeaning}</div>
                    <div className="text-xs text-muted-foreground italic mb-1.5">{m.odiaPhonetic}</div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{m.en}</span>
                      <PronounceButton text={m.en} className="size-7" />
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
