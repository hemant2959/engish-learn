import { useMemo, useState } from "react";
import { ArrowLeftRight, Languages } from "lucide-react";
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
  return [...exact, ...startsWith, ...includes].slice(0, 12);
}

function wordByWordBreakdown(
  index: TranslationEntry[],
  query: string,
  direction: TranslateDirection,
): TranslationEntry[] {
  const words = query.trim().split(/\s+/).filter(Boolean);
  if (words.length < 2) return [];
  const field = fieldFor(direction);

  const results: TranslationEntry[] = [];
  const usedKeys = new Set<string>();
  for (const word of words) {
    const clean = direction === "en-to-odia" ? word.toLowerCase().replace(/[^a-z0-9]/g, "") : word;
    if (!clean) continue;
    const match =
      index.find((entry) => normalize(entry[field], direction) === clean) ??
      index.find((entry) => normalize(entry[field], direction).includes(clean));
    if (!match) continue;
    const key = match.en.toLowerCase();
    if (usedKeys.has(key)) continue;
    usedKeys.add(key);
    results.push(match);
  }
  return results;
}

export function TranslateView() {
  const [direction, setDirection] = useState<TranslateDirection>("en-to-odia");
  const [text, setText] = useState("");
  const index = useMemo(buildTranslationIndex, []);

  const query = text.trim();
  const matches = useMemo(() => searchTranslations(index, query, direction), [index, query, direction]);
  const breakdown = useMemo(
    () => (matches.length === 0 ? wordByWordBreakdown(index, query, direction) : []),
    [index, query, direction, matches.length],
  );

  const swapDirection = () => {
    setDirection((d) => (d === "en-to-odia" ? "odia-to-en" : "en-to-odia"));
    setText("");
  };

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
        placeholder={direction === "en-to-odia" ? "Type an English word or sentence…" : "ଏକ ଶବ୍ଦ କିମ୍ବା ବାକ୍ୟ ଟାଇପ୍ କରନ୍ତୁ…"}
        className="h-12 rounded-2xl text-base mb-4"
      />

      {!query && (
        <div className="text-center py-8">
          <div className="mx-auto size-14 rounded-2xl bg-primary/10 grid place-items-center mb-4">
            <Languages className="size-6 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground max-w-xs mx-auto">
            Looks up your word or sentence in this app's {index.length}-entry dictionary of words, sentences, and
            conversation lines. It isn't a general-purpose translator, so results are best for phrases already
            taught in the Words, Sentences, and Talk tabs.
          </p>
        </div>
      )}

      {query && matches.length > 0 && (
        <ul className="space-y-2">
          {matches.map((m, i) => (
            <li key={`${m.en}-${i}`} className="rounded-2xl border bg-card px-4 py-3">
              {direction === "en-to-odia" ? (
                <>
                  <div className="flex items-center gap-2">
                    <span className="font-display font-semibold">{m.en}</span>
                    <PronounceButton text={m.en} className="size-7" />
                  </div>
                  <div className="text-sm text-muted-foreground mt-0.5">
                    {m.odiaMeaning} · <span className="italic">{m.odiaPhonetic}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="font-display font-semibold">{m.odiaMeaning}</div>
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
      )}

      {query && matches.length === 0 && breakdown.length > 0 && (
        <div>
          <p className="text-xs text-muted-foreground mb-2">No exact phrase match — here's a word-by-word breakdown:</p>
          <div className="flex flex-wrap gap-2">
            {breakdown.map((b, i) => (
              <div key={`${b.en}-${i}`} className="rounded-xl border bg-card px-3 py-2 text-sm flex items-center gap-2">
                <div className="min-w-0">
                  <div className="font-medium">{direction === "en-to-odia" ? b.en : b.odiaMeaning}</div>
                  <div className="text-xs text-muted-foreground italic">
                    {direction === "en-to-odia" ? b.odiaMeaning : b.en}
                  </div>
                </div>
                <PronounceButton text={b.en} className="size-6 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      )}

      {query && matches.length === 0 && breakdown.length === 0 && (
        <p className="text-sm text-muted-foreground text-center py-8">
          No match found in the dictionary yet. Try a simpler word, or browse the Words and Sentences tabs.
        </p>
      )}
    </div>
  );
}
