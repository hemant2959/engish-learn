# Learn English

A basic-to-advanced English learning app for Odia-speaking beginners: words, sentences, and everyday/trade conversations, each with an Odia meaning, an Odia-script phonetic pronunciation guide, and an audio pronounce button — plus a configurable quiz and a daily streak tracker.

Originally built as a module inside [care-pill-android](https://github.com/hemant2959/care-pill-android) and extracted here as its own standalone app.

## Features

- **Words** — 19 categories, 230+ words (alphabet, numbers, family, food, vegetables, animals, weather, common verbs, business terms, ...)
- **Sentences** — 12 groups of full useful sentences (questions, opinions, comparisons, tenses, adjectives, verbs, nouns, ...)
- **Talk** — 51 conversations across general daily life and 5 trades (electrician, plumber, carpenter, mason, mechanic) plus workplace, travel, emergencies, and errands
- **Quiz** — multiple-choice recall test, scoped to any topic, in either English→Odia or Odia→English direction
- **Streak** — tracks consecutive days of practice, stored locally

Every word/sentence/line is spoken aloud via the browser's built-in text-to-speech (Web Speech API) — no audio files, no backend.

## Running locally

```bash
npm install
npm run dev
```

Open the printed local URL in your browser.

## Build

```bash
npm run build
```

Outputs a static site to `dist/` — deployable anywhere that serves static files (Cloudflare Pages, Netlify, Vercel, GitHub Pages, etc.). No server or database required.
