# Repository Guidelines

## Project Structure & Module Organization

This repository is a dependency-free Korean job-criteria card web app.

- `index.html`: application markup for card sorting, deep exploration, TOP3/TOP5, reality checks, WDEP, and the one-screen final report.
- `style.css`: desktop-first responsive styling and component states.
- `app.js`: screen flow, validation, LocalStorage persistence, and result calculation.
- `data/cards.js`: the 60-card JavaScript dataset consumed by `app.js`.
- `data/counseling.js`: two questions and counselor tags for every card, plus the seven shared source types.
- `data/settings.js`: V0.4 analysis thresholds, source guidance, and card-combination rules.
- `직업기준카드.md`: authoritative source text for card content. Do not edit it when changing application behavior.
- `README.md`: end-user setup and usage notes.

There is currently no generated output, asset directory, or automated test suite.

## Build, Test, and Development Commands

No build or package installation is required. Open `index.html` directly, or serve the directory locally for more reliable browser testing:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:8765/index.html`. Check JavaScript syntax with:

```powershell
node --check app.js
node --check data/cards.js
```

Run `git diff --check` before committing to catch whitespace errors.

## Coding Style & Naming Conventions

Use two-space indentation in HTML, CSS, and JavaScript. Prefer plain Vanilla JavaScript, semantic HTML, and descriptive `camelCase` names such as `renderCard` and `currentIndex`. Constants use `UPPER_SNAKE_CASE`, for example `STORAGE_KEY`. CSS classes use lowercase kebab-case (`choice-button`). Keep UI logic in `app.js` and card content only in `data/cards.js`. Add brief Korean comments where behavior may be unclear to a beginner. Do not introduce frameworks, package managers, servers, or external libraries.

## Testing Guidelines

Manual browser testing is required. Verify start-form validation, conditional job input, all 60 cards, automatic advancement, previous-card editing, refresh persistence, progress display, and result counts totaling 60. Also test the five-or-more notice and reset confirmation. Check desktop and a narrow mobile viewport. Confirm the browser console contains no errors.

When editing card data, verify unique IDs and exact counts: A=24, B=6, C=6, D=6, E=12, F=6. Preserve source wording except for the approved B05 override.

## Commit & Pull Request Guidelines

No commit history exists yet. Use short imperative commits, for example `Add card sorting progress persistence`. Keep each commit focused. Pull requests should summarize user-visible changes, list manual tests performed, and include screenshots for layout changes. Note any card-text modification explicitly and explain its source.

## Data and Privacy

Counseling progress is stored only in browser LocalStorage. Do not add real client data to fixtures, commits, screenshots, or documentation.
