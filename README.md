# Kalvron AI — Revenue Recovery Infrastructure

Kalvron builds AI lead handling systems that sit between your client's ad campaign and their sales team. Every lead gets engaged in 60 seconds, qualified automatically, and only serious ones reach the team.

This repository contains the landing page for Kalvron AI.

## Tech Stack
- **Next.js 16 (App Router)**
- **React 19**
- **Tailwind CSS v4**
- **TypeScript**

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Structure
- `app/page.tsx`: The single-page layout aggregating all sections.
- `app/components/`: Contains all modular UI sections (Hero, Problem, HowItWorks, FAQ, CTA, etc.) and reusable elements like `FadeIn`.
- `app/globals.css`: Contains Tailwind CSS token configs, scroll behaviors, and global animations.

## Deployment
This project is configured to be deployed directly to Vercel with zero additional configuration.
Pushing to the `main` branch will automatically trigger a production build.
