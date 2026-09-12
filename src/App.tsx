import { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  Apple,
  ArrowLeft,
  Award,
  Building2,
  Bus,
  BookOpen,
  Briefcase,
  Calendar,
  Car,
  Carrot,
  Check,
  Clock,
  CloudSun,
  Cog,
  Droplet,
  Flame,
  Hammer,
  Hand,
  HardHat,
  Hash,
  HelpCircle,
  Link as LinkIcon,
  MessageCircle,
  MessagesSquare,
  Palette,
  PawPrint,
  Quote,
  Search,
  ShoppingBag,
  ShoppingBasket,
  Smile,
  Soup,
  TreePine,
  Type,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PronounceButton } from "@/components/PronounceButton";
import { allItems, LESSON_CATEGORIES, type LessonItem } from "@/lib/englishLessons";
import { allSentenceItems, SENTENCE_GROUPS } from "@/lib/englishSentences";
import {
  CONVERSATION_GROUPS,
  CONVERSATION_TOPICS,
  conversationsByGroup,
  type ConversationGroupId,
  type ConversationTopic,
} from "@/lib/englishConversations";
import { TranslateView } from "@/components/TranslateView";
import { cn } from "@/lib/utils";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  alphabet: <Type className="size-5" />,
  numbers: <Hash className="size-5" />,
  greetings: <MessageCircle className="size-5" />,
  days: <Calendar className="size-5" />,
  colors: <Palette className="size-5" />,
  family: <Users className="size-5" />,
  food: <Soup className="size-5" />,
  body: <Hand className="size-5" />,
  verbs: <Cog className="size-5" />,
  feelings: <Smile className="size-5" />,
  time: <Clock className="size-5" />,
  connectors: <LinkIcon className="size-5" />,
  business: <Building2 className="size-5" />,
  vegetables: <Carrot className="size-5" />,
  fruits: <Apple className="size-5" />,
  groceries: <ShoppingBasket className="size-5" />,
  trees: <TreePine className="size-5" />,
  animals: <PawPrint className="size-5" />,
  weather: <CloudSun className="size-5" />,
};

const CONV_GROUP_ICONS: Record<ConversationGroupId, React.ReactNode> = {
  general: <MessagesSquare className="size-5" />,
  electrician: <Zap className="size-5" />,
  plumber: <Droplet className="size-5" />,
  carpenter: <Hammer className="size-5" />,
  mason: <HardHat className="size-5" />,
  mechanic: <Car className="size-5" />,
  workplace: <Briefcase className="size-5" />,
  travel: <Bus className="size-5" />,
  emergency: <AlertTriangle className="size-5" />,
  errands: <ShoppingBag className="size-5" />,
  advanced: <Award className="size-5" />,
};

const LEARNED_KEY = "english-learning.learned";
const QUIZ_BEST_KEY = "english-learning.quiz-best";
const QUIZ_LENGTH = 10;

function loadLearned(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(LEARNED_KEY);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

function saveLearned(ids: Set<string>) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(LEARNED_KEY, JSON.stringify([...ids]));
}

const STREAK_KEY = "english-learning.streak";

type StreakData = { current: number; best: number; lastDate: string };

function dateStr(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/** Marks today as practiced and returns the up-to-date streak, bumping it once per calendar day. */
function touchStreak(): StreakData {
  if (typeof window === "undefined") return { current: 0, best: 0, lastDate: "" };
  const today = dateStr(new Date());

  let data: StreakData = { current: 0, best: 0, lastDate: "" };
  try {
    const raw = window.localStorage.getItem(STREAK_KEY);
    if (raw) data = JSON.parse(raw) as StreakData;
  } catch {
    // ignore malformed data, start fresh
  }

  if (data.lastDate === today) return data;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const current = data.lastDate === dateStr(yesterday) ? data.current + 1 : 1;
  const next: StreakData = { current, best: Math.max(data.best, current), lastDate: today };
  window.localStorage.setItem(STREAK_KEY, JSON.stringify(next));
  return next;
}

export default function App() {
  const [learned, setLearned] = useState<Set<string>>(new Set());
  const [streak, setStreak] = useState<StreakData>({ current: 0, best: 0, lastDate: "" });
  const [mode, setMode] = useState<"words" | "sentences" | "conversations" | "translate" | "quiz">("words");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [selectedSentenceGroupId, setSelectedSentenceGroupId] = useState<string | null>(null);
  const [selectedConvGroupId, setSelectedConvGroupId] = useState<ConversationGroupId | null>(null);
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [sentenceQuery, setSentenceQuery] = useState("");

  useEffect(() => {
    setLearned(loadLearned());
    setStreak(touchStreak());
  }, []);

  const toggleLearned = (id: string) => {
    setLearned((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      saveLearned(next);
      return next;
    });
  };

  const trimmedQuery = query.trim().toLowerCase();
  const searchResults = useMemo(() => {
    if (!trimmedQuery) return [];
    return allItems().filter(
      ({ item }) =>
        item.en.toLowerCase().includes(trimmedQuery) ||
        item.odiaMeaning.includes(trimmedQuery) ||
        item.odiaPhonetic.includes(trimmedQuery),
    );
  }, [trimmedQuery]);

  const trimmedSentenceQuery = sentenceQuery.trim().toLowerCase();
  const sentenceSearchResults = useMemo(() => {
    if (!trimmedSentenceQuery) return [];
    return allSentenceItems().filter(
      ({ item }) =>
        item.en.toLowerCase().includes(trimmedSentenceQuery) ||
        item.odiaMeaning.includes(trimmedSentenceQuery) ||
        item.odiaPhonetic.includes(trimmedSentenceQuery),
    );
  }, [trimmedSentenceQuery]);

  const selectedCategory = LESSON_CATEGORIES.find((c) => c.id === selectedCategoryId) ?? null;
  const selectedSentenceGroup = SENTENCE_GROUPS.find((g) => g.id === selectedSentenceGroupId) ?? null;
  const selectedConversation = CONVERSATION_TOPICS.find((t) => t.id === selectedConversationId) ?? null;
  const selectedConvGroup = CONVERSATION_GROUPS.find((g) => g.id === selectedConvGroupId) ?? null;
  const selectedAny = selectedCategory ?? selectedSentenceGroup ?? selectedConversation ?? selectedConvGroup;

  const totalWordItems = useMemo(() => LESSON_CATEGORIES.reduce((n, c) => n + c.items.length, 0), []);
  const wordItemIds = useMemo(() => new Set(allItems().map((r) => r.item.id)), []);
  const totalLearnedWords = useMemo(() => [...learned].filter((id) => wordItemIds.has(id)).length, [learned, wordItemIds]);

  const totalSentenceItems = useMemo(() => SENTENCE_GROUPS.reduce((n, g) => n + g.items.length, 0), []);
  const sentenceItemIds = useMemo(() => new Set(allSentenceItems().map((r) => r.item.id)), []);
  const totalLearnedSentences = useMemo(
    () => [...learned].filter((id) => sentenceItemIds.has(id)).length,
    [learned, sentenceItemIds],
  );

  const goBack = () => {
    if (selectedConversation) {
      setSelectedConversationId(null);
      return;
    }
    setSelectedCategoryId(null);
    setSelectedSentenceGroupId(null);
    setSelectedConvGroupId(null);
  };

  return (
    <main className="min-h-screen max-w-2xl mx-auto px-4 sm:px-6 pb-16 pt-8">
      <header className="flex items-center gap-3 mb-6">
        {selectedAny && (
          <button
            onClick={goBack}
            className="size-9 rounded-xl grid place-items-center hover:bg-accent transition-colors shrink-0"
            aria-label="Back"
          >
            <ArrowLeft className="size-4" />
          </button>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <BookOpen className="size-5 text-primary shrink-0" />
            <h1 className="font-display text-xl font-bold leading-tight truncate">
              {selectedCategory?.title ?? selectedSentenceGroup?.title ?? selectedConversation?.title ?? selectedConvGroup?.label ?? "Learn English"}
            </h1>
          </div>
          <p className="text-xs text-muted-foreground truncate">
            {selectedCategory?.odiaTitle ?? selectedSentenceGroup?.odiaTitle ?? selectedConversation?.odiaTitle ?? selectedConvGroup?.odiaLabel ?? "ଓଡ଼ିଆ ପାଇଁ ମୌଳିକ ଇଂରାଜୀ · Basic English for Odia speakers"}
          </p>
        </div>
        {!selectedAny && streak.current > 0 && (
          <div
            className="flex items-center gap-1 rounded-full bg-accent/60 px-2.5 py-1.5 text-sm font-semibold shrink-0"
            title={`Best streak: ${streak.best} day${streak.best === 1 ? "" : "s"}`}
          >
            <Flame className="size-4 text-primary" />
            {streak.current}
          </div>
        )}
      </header>

      {!selectedAny && (
        <Tabs
          value={mode}
          onValueChange={(v) => setMode(v as "words" | "sentences" | "conversations" | "translate" | "quiz")}
          className="mb-6"
        >
          <TabsList className="w-full grid grid-cols-5">
            <TabsTrigger value="words" className="text-xs px-1">Words</TabsTrigger>
            <TabsTrigger value="sentences" className="text-xs px-1">Sentences</TabsTrigger>
            <TabsTrigger value="conversations" className="text-xs px-1">Talk</TabsTrigger>
            <TabsTrigger value="translate" className="text-xs px-1">Translate</TabsTrigger>
            <TabsTrigger value="quiz" className="text-xs px-1">Quiz</TabsTrigger>
          </TabsList>
        </Tabs>
      )}

      {mode === "words" && (
        <>
          {!selectedCategory && (
            <>
              <div className="mb-6 rounded-2xl bg-accent/60 px-4 py-3">
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <span className="text-foreground/80">Your progress</span>
                  <span className="font-medium">{totalLearnedWords} / {totalWordItems}</span>
                </div>
                <Progress value={totalWordItems ? (totalLearnedWords / totalWordItems) * 100 : 0} />
              </div>

              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search a word, e.g. water or ପାଣି"
                  className="pl-9 h-11 rounded-2xl"
                />
              </div>
            </>
          )}

          {selectedCategory ? (
            <ItemList
              items={selectedCategory.items}
              learned={learned}
              onToggle={toggleLearned}
            />
          ) : trimmedQuery ? (
            searchResults.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-10">No matches found.</p>
            ) : (
              <ItemList
                items={searchResults.map((r) => r.item)}
                learned={learned}
                onToggle={toggleLearned}
                categoryLabelFor={(id) => searchResults.find((r) => r.item.id === id)?.category.title}
              />
            )
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {LESSON_CATEGORIES.map((category) => {
                const done = category.items.filter((i) => learned.has(i.id)).length;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategoryId(category.id)}
                    className="rounded-2xl border bg-card p-4 text-left hover:border-primary/40 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="size-9 rounded-xl bg-primary/10 text-primary grid place-items-center">
                        {CATEGORY_ICONS[category.id]}
                      </div>
                      {category.level === "advanced" && <LevelBadge />}
                    </div>
                    <div className="font-display font-semibold text-sm">{category.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{category.odiaTitle}</div>
                    <div className="text-[10px] text-muted-foreground mt-2 uppercase tracking-wider">
                      {done} / {category.items.length} learned
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </>
      )}

      {mode === "sentences" && (
        <>
          {!selectedSentenceGroup && (
            <>
              <div className="mb-6 rounded-2xl bg-accent/60 px-4 py-3">
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <span className="text-foreground/80">Your progress</span>
                  <span className="font-medium">{totalLearnedSentences} / {totalSentenceItems}</span>
                </div>
                <Progress value={totalSentenceItems ? (totalLearnedSentences / totalSentenceItems) * 100 : 0} />
              </div>

              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  value={sentenceQuery}
                  onChange={(e) => setSentenceQuery(e.target.value)}
                  placeholder="Search a sentence, e.g. plan or ଯୋଜନା"
                  className="pl-9 h-11 rounded-2xl"
                />
              </div>
            </>
          )}

          {selectedSentenceGroup ? (
            <ItemList
              items={selectedSentenceGroup.items}
              learned={learned}
              onToggle={toggleLearned}
            />
          ) : trimmedSentenceQuery ? (
            sentenceSearchResults.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-10">No matches found.</p>
            ) : (
              <ItemList
                items={sentenceSearchResults.map((r) => r.item)}
                learned={learned}
                onToggle={toggleLearned}
                categoryLabelFor={(id) => sentenceSearchResults.find((r) => r.item.id === id)?.category.title}
              />
            )
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {SENTENCE_GROUPS.map((group) => {
                const done = group.items.filter((i) => learned.has(i.id)).length;
                return (
                  <button
                    key={group.id}
                    onClick={() => setSelectedSentenceGroupId(group.id)}
                    className="rounded-2xl border bg-card p-4 text-left hover:border-primary/40 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="size-9 rounded-xl bg-primary/10 text-primary grid place-items-center">
                        <Quote className="size-5" />
                      </div>
                      <LevelBadge />
                    </div>
                    <div className="font-display font-semibold text-sm">{group.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{group.odiaTitle}</div>
                    <div className="text-[10px] text-muted-foreground mt-2 uppercase tracking-wider">
                      {done} / {group.items.length} learned
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </>
      )}

      {mode === "conversations" && (
        selectedConversation ? (
          <ConversationView topic={selectedConversation} />
        ) : selectedConvGroup ? (
          <ul className="space-y-2">
            {conversationsByGroup(selectedConvGroup.id).map((t) => (
              <li key={t.id}>
                <button
                  onClick={() => setSelectedConversationId(t.id)}
                  className="w-full flex items-center justify-between gap-3 rounded-2xl border bg-card px-4 py-3 text-left hover:border-primary/40 hover:shadow-sm transition-all"
                >
                  <div className="min-w-0">
                    <div className="font-medium text-sm">{t.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5 truncate">{t.odiaTitle}</div>
                  </div>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider shrink-0">
                    {t.lines.length} lines
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {CONVERSATION_GROUPS.map((group) => {
              const count = conversationsByGroup(group.id).length;
              return (
                <button
                  key={group.id}
                  onClick={() => setSelectedConvGroupId(group.id)}
                  className="rounded-2xl border bg-card p-4 text-left hover:border-primary/40 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="size-9 rounded-xl bg-primary/10 text-primary grid place-items-center">
                      {CONV_GROUP_ICONS[group.id]}
                    </div>
                    {group.level === "advanced" && <LevelBadge />}
                  </div>
                  <div className="font-display font-semibold text-sm">{group.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{group.odiaLabel}</div>
                  <div className="text-[10px] text-muted-foreground mt-2 uppercase tracking-wider">
                    {count} topic{count === 1 ? "" : "s"}
                  </div>
                </button>
              );
            })}
          </div>
        )
      )}

      {mode === "translate" && <TranslateView />}

      {mode === "quiz" && <QuizView />}
    </main>
  );
}

function LevelBadge() {
  return (
    <span className="text-[9px] font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-2 py-0.5 shrink-0">
      Advanced
    </span>
  );
}

function ConversationView({ topic }: { topic: ConversationTopic }) {
  const [primaryRole] = topic.roles;
  return (
    <div className="space-y-3">
      {topic.lines.map((line) => {
        const isPrimary = line.speaker === primaryRole;
        return (
          <div key={line.id} className={cn("flex flex-col max-w-[85%]", isPrimary ? "items-start" : "items-end ml-auto")}>
            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1 px-1">
              {line.speaker}
            </span>
            <div
              className={cn(
                "flex items-start gap-2 rounded-2xl px-3.5 py-2.5",
                isPrimary ? "bg-card border rounded-tl-sm" : "bg-primary/10 rounded-tr-sm",
              )}
            >
              <div className="min-w-0">
                <div className="text-sm font-medium">{line.en}</div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {line.odiaMeaning} · <span className="italic">{line.odiaPhonetic}</span>
                </div>
              </div>
              <PronounceButton text={line.en} className="size-7 -mt-1 -mr-1" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ItemList({
  items,
  learned,
  onToggle,
  categoryLabelFor,
}: {
  items: LessonItem[];
  learned: Set<string>;
  onToggle: (id: string) => void;
  categoryLabelFor?: (id: string) => string | undefined;
}) {
  return (
    <ul className="space-y-2">
      {items.map((item) => {
        const isLearned = learned.has(item.id);
        const categoryLabel = categoryLabelFor?.(item.id);
        return (
          <li
            key={item.id}
            className={cn(
              "flex items-center gap-2 rounded-2xl border bg-card px-3 py-2.5 transition-colors",
              isLearned && "bg-primary/5 border-primary/30",
            )}
          >
            <button
              onClick={() => onToggle(item.id)}
              aria-label={isLearned ? "Mark as not learned" : "Mark as learned"}
              aria-pressed={isLearned}
              className={cn(
                "size-7 rounded-full border grid place-items-center shrink-0 transition-colors",
                isLearned ? "bg-primary border-primary text-primary-foreground" : "border-input text-transparent",
              )}
            >
              <Check className="size-4" />
            </button>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-medium">{item.en}</span>
                {categoryLabel && (
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground bg-muted rounded-full px-2 py-0.5">
                    {categoryLabel}
                  </span>
                )}
              </div>
              <div className="text-sm text-muted-foreground truncate">
                {item.odiaMeaning} · <span className="italic">{item.odiaPhonetic}</span>
              </div>
            </div>

            <PronounceButton text={item.en} />
          </li>
        );
      })}
    </ul>
  );
}

type QuizDirection = "en-to-odia" | "odia-to-en";

type QuizQuestion = {
  item: LessonItem;
  choices: string[];
  correctIndex: number;
};

function shuffled<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildQuizPool(): LessonItem[] {
  return [...allItems().map((r) => r.item), ...allSentenceItems().map((r) => r.item)];
}

function poolForScope(scopeId: string): LessonItem[] {
  if (scopeId === "all") return buildQuizPool();
  const wordCategory = LESSON_CATEGORIES.find((c) => c.id === scopeId);
  if (wordCategory) return wordCategory.items;
  const sentenceGroup = SENTENCE_GROUPS.find((g) => g.id === scopeId);
  if (sentenceGroup) return sentenceGroup.items;
  return buildQuizPool();
}

function buildQuiz(pool: LessonItem[], count: number, direction: QuizDirection): QuizQuestion[] {
  const field = direction === "en-to-odia" ? "odiaMeaning" : "en";
  return shuffled(pool)
    .slice(0, count)
    .map((item) => {
      const answer = item[field];
      const distractors = shuffled(pool.filter((p) => p[field] !== answer))
        .slice(0, 3)
        .map((p) => p[field]);
      const choices = shuffled([answer, ...distractors]);
      return { item, choices, correctIndex: choices.indexOf(answer) };
    });
}

function QuizView() {
  const [scopeId, setScopeId] = useState("all");
  const [direction, setDirection] = useState<QuizDirection>("en-to-odia");
  const [questions, setQuestions] = useState<QuizQuestion[] | null>(null);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = window.localStorage.getItem(QUIZ_BEST_KEY);
    if (raw) setBest(Number(raw));
  }, []);

  const finished = questions !== null && index >= questions.length;

  useEffect(() => {
    if (!finished) return;
    setBest((prevBest) => {
      if (prevBest !== null && prevBest >= score) return prevBest;
      if (typeof window !== "undefined") window.localStorage.setItem(QUIZ_BEST_KEY, String(score));
      return score;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  const startQuiz = () => {
    const pool = poolForScope(scopeId);
    setQuestions(buildQuiz(pool, Math.min(QUIZ_LENGTH, pool.length), direction));
    setIndex(0);
    setSelected(null);
    setScore(0);
  };

  const backToSettings = () => setQuestions(null);

  const selectAnswer = (choiceIndex: number) => {
    if (selected !== null || !questions) return;
    setSelected(choiceIndex);
    if (choiceIndex === questions[index].correctIndex) setScore((s) => s + 1);
  };

  if (!questions) {
    return (
      <div className="text-center py-8">
        <div className="mx-auto size-14 rounded-2xl bg-primary/10 grid place-items-center mb-4">
          <HelpCircle className="size-6 text-primary" />
        </div>
        <h2 className="font-display font-semibold text-lg mb-1">Quick Quiz</h2>
        <p className="text-sm text-muted-foreground max-w-xs mx-auto">
          {QUIZ_LENGTH} random questions. Pick the correct answer for each one.
        </p>
        {best !== null && (
          <p className="text-xs text-muted-foreground mt-2">Best score: {best} / {QUIZ_LENGTH}</p>
        )}

        <div className="inline-flex rounded-xl border p-1 bg-muted/50 mt-5">
          <button
            onClick={() => setDirection("en-to-odia")}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
              direction === "en-to-odia" ? "bg-background shadow text-foreground" : "text-muted-foreground",
            )}
          >
            English → Odia
          </button>
          <button
            onClick={() => setDirection("odia-to-en")}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
              direction === "odia-to-en" ? "bg-background shadow text-foreground" : "text-muted-foreground",
            )}
          >
            Odia → English
          </button>
        </div>

        <div className="max-w-xs mx-auto mt-3 text-left">
          <Select value={scopeId} onValueChange={setScopeId}>
            <SelectTrigger className="rounded-xl h-10">
              <SelectValue placeholder="Choose a topic" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All (Words + Sentences)</SelectItem>
              <SelectGroup>
                <SelectLabel>Words</SelectLabel>
                {LESSON_CATEGORIES.map((c) => (
                  <SelectItem key={c.id} value={c.id}>{c.title}</SelectItem>
                ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Sentences</SelectLabel>
                {SENTENCE_GROUPS.map((g) => (
                  <SelectItem key={g.id} value={g.id}>{g.title}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={startQuiz} className="mt-5 rounded-xl h-11 px-6">
          Start Quiz
        </Button>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto size-14 rounded-2xl bg-primary/10 grid place-items-center mb-4">
          <Award className="size-6 text-primary" />
        </div>
        <h2 className="font-display font-semibold text-lg mb-1">Quiz Complete!</h2>
        <p className="font-display text-3xl font-bold my-2">
          {score} / {questions.length}
        </p>
        {best !== null && (
          <p className="text-xs text-muted-foreground">Best score: {best} / {QUIZ_LENGTH}</p>
        )}
        <div className="flex items-center justify-center gap-2 mt-5">
          <Button onClick={startQuiz} className="rounded-xl h-11 px-6">
            Play Again
          </Button>
          <Button onClick={backToSettings} variant="outline" className="rounded-xl h-11 px-6">
            Change Topic
          </Button>
        </div>
      </div>
    );
  }

  const q = questions[index];
  const promptText = direction === "en-to-odia" ? q.item.en : q.item.odiaMeaning;
  const choicesAreEnglish = direction === "odia-to-en";

  return (
    <div>
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
        <span>Question {index + 1} / {questions.length}</span>
        <span>Score: {score}</span>
      </div>
      <div className="rounded-2xl border bg-card p-5 mb-4">
        <div className="flex items-center gap-2">
          <span className="font-display text-lg font-bold">{promptText}</span>
          {direction === "en-to-odia" && <PronounceButton text={q.item.en} />}
        </div>
        {direction === "en-to-odia" && (
          <div className="text-xs text-muted-foreground italic mt-0.5">{q.item.odiaPhonetic}</div>
        )}
      </div>
      <div className="space-y-2">
        {q.choices.map((choice, i) => {
          const isCorrect = i === q.correctIndex;
          const isSelected = i === selected;
          const answered = selected !== null;
          const rowClasses = cn(
            "w-full flex items-center justify-between gap-2 rounded-2xl border px-4 py-3 text-sm text-left transition-colors",
            !answered && "hover:border-primary/40 bg-card cursor-pointer",
            answered && isCorrect && "border-primary bg-primary/10",
            answered && isSelected && !isCorrect && "border-destructive bg-destructive/10",
            answered && !isSelected && !isCorrect && "opacity-50",
          );

          if (choicesAreEnglish) {
            return (
              <div
                key={i}
                role="button"
                tabIndex={answered ? -1 : 0}
                aria-disabled={answered}
                onClick={() => selectAnswer(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") selectAnswer(i);
                }}
                className={cn(rowClasses, answered && "cursor-default")}
              >
                <span>{choice}</span>
                <PronounceButton text={choice} className="size-7 shrink-0" />
              </div>
            );
          }

          return (
            <button
              key={i}
              onClick={() => selectAnswer(i)}
              disabled={answered}
              className={cn(rowClasses, "disabled:cursor-default")}
            >
              {choice}
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <Button onClick={() => { setSelected(null); setIndex((i) => i + 1); }} className="w-full mt-4 rounded-xl h-11">
          {index + 1 === questions.length ? "See Results" : "Next Question"}
        </Button>
      )}
    </div>
  );
}
