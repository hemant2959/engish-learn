import { useEffect, useState } from "react";
import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function speechSupported() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

/** Speaks the given English text aloud via the device's text-to-speech engine. */
export function PronounceButton({ text, className }: { text: string; className?: string }) {
  const [supported, setSupported] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    setSupported(speechSupported());
  }, []);

  if (!supported) return null;

  const speak = () => {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 0.85;
    utter.onstart = () => setSpeaking(true);
    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utter);
  };

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={speak}
      aria-label={`Pronounce "${text}"`}
      className={cn("rounded-full shrink-0", speaking && "text-primary", className)}
    >
      <Volume2 className={cn("size-4", speaking && "animate-pulse")} />
    </Button>
  );
}
