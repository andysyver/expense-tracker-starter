---
name: Recurring code issues
description: Known bugs and anti-patterns found during code review of expense-tracker-starter
type: project
---

## Confirmed bugs

- `App.jsx` line 12: "Freelance Work" has `type: "expense"` but should be `type: "income"`. This is documented in CLAUDE.md as a known intentional bug for students to fix. Effect: income total is $800 too low, expense total $800 too high, balance $1600 off.
- `Summary.jsx`: `formatCurrency` calls `val.toLocaleString()` directly on the number. If `balance` is negative, the display will be `$-1234.56` (dollar sign before the minus) instead of `-$1,234.56`. No guard against NaN either.
- `TransactionForm.jsx`: Amount input accepts negative values and zero — no validation beyond `!amount` truthiness check. `!amount` also passes when amount is the string "0".
- `TransactionForm.jsx`: `id: Date.now()` — collision risk if two transactions are submitted in the same millisecond.

## Accessibility issues

- `Summary.jsx`: Icon divs (up arrow, down arrow, diamond) are decorative but carry no `aria-hidden="true"`. Screen readers will announce them.
- `TransactionForm.jsx`: `<label>` elements have no `htmlFor` linking them to their `<input>`/`<select>`. Clicking labels does not focus the field.
- `TransactionList.jsx`: The empty `<th>` for the delete column has no `scope` or `aria-label`. Delete buttons have no accessible name beyond the text "Delete" — no association with the row.
- `TransactionList.jsx`: `window.confirm` for delete confirmation is synchronous and blocks the main thread; not available in some embedded environments.

## Code quality issues

- `categories` array is duplicated identically in both `TransactionForm.jsx` and `TransactionList.jsx`. Should be extracted to a shared constants file.
- Recharts axis `tick` props use hardcoded hex colors (`#5c5a65`, font family string) instead of reading from CSS variables.
- `!important` used repeatedly in `App.css` for `.td-description`, `.td-date`, `.amount-income`, `.amount-expense` — sign of specificity fighting rather than clean cascade.
- `SpendingChart.jsx` uses numeric array index as `key` prop on `<Cell>` elements. Harmless here (static list, no reordering), but worth noting as a pattern to avoid.
- Balance card always shows amber color regardless of whether balance is positive or negative. A negative balance should visually signal an error state.
