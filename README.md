# Sudoku Planet

A polished, mobile-first Sudoku game built with Phaser 3, TypeScript, and Vite. Sudoku Planet combines classic 9×9 Sudoku gameplay with level progression, daily challenges, achievements, rewards, themes, and a bilingual Chinese/English interface.

## Features

- Complete 9×9 Sudoku gameplay
- Backtracking-based puzzle generation
- Unique-solution validation
- Four independent progression modes: Casual, Standard, Challenge, and Master
- 100 levels per mode with a progressive difficulty curve
- Pencil notes, hints, undo, erase, mistake tracking, timer, and pause controls
- Three-star level ratings based on time, mistakes, and hints
- Daily challenges and streak rewards
- Player levels, XP, coins, titles, and achievements
- Sudoku Academy with five interactive lessons
- Shop with hint tickets, board themes, and number skins
- Simplified Chinese and English localization
- Local save data with a WeChat Mini Game compatibility layer

## Tech Stack

- Phaser 3
- TypeScript
- Vite
- HTML5 Canvas
- Local Storage / WeChat storage adapter

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in the terminal, usually:

```text
http://localhost:5173
```

## Production Build

```bash
npm run build
```

The production output is generated in the `dist/` directory.

## Project Structure

```text
src/
├── data/       Static game configuration
├── i18n/       Chinese and English translations
├── platform/   Platform-specific adapters
├── scenes/     Phaser scenes and game flow
├── sudoku/     Generator, solver, and board rendering
├── systems/    Progression, rewards, achievements, shop, and player data
└── ui/         Reusable UI components and visual tokens
```

## Level Progression

Each game mode has its own 100-level save progress, including:

- Current level
- Completed levels
- Best completion times
- Highest star rating per level

The 100 levels are divided into four chapters:

1. Planet Launch — Levels 1–25
2. Logic Forest — Levels 26–50
3. Wisdom Continent — Levels 51–75
4. Master Realm — Levels 76–100

Validate the complete level configuration with:

```bash
npm run verify:levels
```

## Retention and Progression Systems

- Player level titles and title unlock rewards
- Chapter progress and per-mode progression
- Three-star performance ratings
- Hint tickets and cosmetic themes
- Standard and hidden achievements
- Day 1, Day 3, Day 7, and Day 30 streak milestones

Validate the progression and retention configuration with:

```bash
npm run verify:retention
```

## WeChat Mini Game Preparation

The core Sudoku gameplay does not depend on the DOM. Platform-specific storage, vibration, sharing, and rewarded-ad interfaces are isolated in `src/platform/WechatAdapter.ts`.

Before publishing as a WeChat Mini Game, the Vite output still needs to be converted into a compatible Mini Game project and connected to the production WeChat APIs and advertising unit IDs.

The project intentionally avoids forced interstitial advertising.

## Current Status

The project is an MVP-ready playable build with a modular architecture designed for future additions such as leaderboards, cloud saves, seasonal events, and additional cosmetic content.
