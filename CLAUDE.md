# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Expense tracker app built with React 19 + Vite 7. Course starter project that intentionally contains bugs, poor UI, and messy code to be fixed as exercises.

## Commands

- `npm run dev` — Start dev server (http://localhost:5173)
- `npm run build` — Production build to `dist/`
- `npm run lint` — ESLint (flat config with react-hooks and react-refresh plugins)
- `npm run preview` — Preview production build

No test framework is configured.

## Architecture

Single-component app — all state and UI live in `src/App.jsx`. No routing, no backend, no external state management. Transaction data is hardcoded in component state (not persisted).

## Known Issues

- Transaction amounts are stored as strings, causing `reduce()` to concatenate instead of sum (the intentional bug)
- "Freelance Work" is marked as `type: "expense"` but should be `type: "income"`
