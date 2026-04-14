---
name: Project architecture and patterns
description: High-level structure of the expense-tracker-starter app — component roles, data flow, styling approach
type: project
---

React 19 + Vite 7 single-page app with five components and no routing, backend, or test framework.

**Why:** Course starter project intentionally contains bugs and messy code for students to fix as exercises.

**How to apply:** Treat this as a learning codebase. Flag correctness bugs as high priority. Style/accessibility feedback should be educational, not exhaustive.

## Component roles
- `App.jsx` — root; owns `transactions` state array; passes it down as props
- `Summary.jsx` — derives income/expense/balance totals; pure display component
- `TransactionForm.jsx` — owns its own form state; calls `onAddTransaction` callback on submit
- `TransactionList.jsx` — owns filter state; renders filtered table with delete button per row
- `SpendingChart.jsx` — Recharts bar chart of expenses grouped by category; renders null when no expense data

## Data flow
- All transaction state lives in `App`; mutations go through `handleAddTransaction` and `handleDeleteTransaction`
- IDs are generated with `Date.now()` in `TransactionForm` — collision-prone under rapid submission
- No persistence; state resets on page reload

## Styling
- Dark theme: CSS custom properties defined in `index.css`
- `App.css` handles all component-level styles
- Google Fonts loaded externally (DM Sans + Playfair Display) — not bundled, no fallback loading strategy
- Recharts axis tick styles are hardcoded hex strings in JSX rather than referencing CSS variables
