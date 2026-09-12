# Learn English

A basic-to-advanced English learning app for Odia-speaking beginners: words, sentences, and everyday/trade conversations, each with an Odia meaning, an Odia-script phonetic pronunciation guide, and an audio pronounce button — plus a configurable quiz and a daily streak tracker.

Originally built as a module inside [care-pill-android](https://github.com/hemant2959/care-pill-android) and extracted here as its own standalone app.

## Features

- **Words** — 19 categories, 230+ words (alphabet, numbers, family, food, vegetables, animals, weather, common verbs, business terms, ...)
- **Sentences** — 12 groups of full useful sentences (questions, opinions, comparisons, tenses, adjectives, verbs, nouns, ...)
- **Talk** — 51 conversations across general daily life and 5 trades (electrician, plumber, carpenter, mason, mechanic) plus workplace, travel, emergencies, and errands
- **Translate** — looks up any word or sentence via a free online translator, in either direction, with a bonus pronunciation guide for phrases also taught in the app
- **Quiz** — multiple-choice recall test, scoped to any topic, in either English→Odia or Odia→English direction
- **Streak** — tracks consecutive days of practice, stored locally
- **Join** (sign-up) + **Admin** — visitors can leave their name and mobile number to be notified about updates; a signed-in admin can view the list and push a browser notification to everyone who opted in (see [Notifications setup](#notifications--admin-setup) below)

Every word/sentence/line is spoken aloud via the browser's built-in text-to-speech (Web Speech API) — no audio files needed for the learning content itself.

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

Outputs a static site to `dist/` — deployable anywhere that serves static files (Cloudflare Pages, Netlify, Vercel, GitHub Pages, etc.). The learning content needs no server or database; sign-up + notifications (below) are optional and only activate once configured.

## Notifications & admin setup

The "Join" tab and the Admin dashboard (Shield icon, top-right) run on [Firebase](https://firebase.google.com/) — a free-tier Google backend. Until you set this up, "Join" shows a friendly "not set up yet" message and everything else keeps working normally.

1. **Create a Firebase project** at [console.firebase.google.com](https://console.firebase.google.com/) (free).
2. **Add a Web app** to it (Project settings → General → Your apps → </> ), then copy the config values it shows you into a `.env` file in this repo (copy `.env.example` to `.env` first).
3. **Enable Firestore**: Build → Firestore Database → Create database (production mode is fine — the rules below lock it down).
4. **Enable Authentication**: Build → Authentication → Sign-in method → enable "Email/Password". Then Authentication → Users → Add user, and create one login for yourself — that's your admin account.
5. **Enable Cloud Messaging** and generate a Web Push key: Project settings → Cloud Messaging → Web configuration → Web Push certificates → Generate key pair. Put that value in `.env` as `VITE_FIREBASE_VAPID_KEY`.
6. **Deploy the security rules and the notification-sending function** (needs the [Firebase CLI](https://firebase.google.com/docs/cli) and the project's pay-as-you-go "Blaze" plan — Cloud Functions require it, but normal usage here stays within the free quota):
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase use --add          # pick your project
   firebase deploy --only firestore:rules,functions
   ```
7. **Rebuild and redeploy the site** with the `.env` values set (as build-time environment variables on whichever host you use).

Once set up: visitors can sign up under **Join**, and you can sign in as admin (the Shield icon) to see who's signed up and send them a browser push notification. Only your admin login can read the sign-up list or send notifications — enforced by `firestore.rules`, not just hidden in the UI.
