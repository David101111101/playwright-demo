# Playwright Automation Framework (E-commerce E2E + API)
End-to-end automated tests for a clothing e-commerce store

## Overview
This repo contains a Playwright-based automation framework that validates a full clothing e-commerce user journey with **assertions at each interaction step**. 
It includes **E2E UI tests**, **API tests**, **multi-browser execution**, and built-in **debugging** and **trace artifacts** (including screenshots) to speed up investigation.

### Covered flow
- Search for products
- Select product and validate details
- Add to cart and validate cart state (items, totals, etc.)
- Checkout and complete payment flow
- Run on multiple browsers (**Chromium**, **Firefox**, **WebKit**)
- Debug with **Playwright Inspector** (step-by-step execution locks)
- Tracing with **screenshots** for fast root-cause analysis

---

## Requirements
- **Node.js (LTS recommended):** https://nodejs.org/es

---

## Setup (VS Code)
1. Install the **Playwright** extension in **Visual Studio Code**.
2. Open Command Palette: `Ctrl + Shift + P`
3. Search and run: `Install Playwright`

---

## Install Dependencies
```bash
npm install

Here’s your content formatted cleanly in **Markdown (.md)** style:

```markdown
# Run Tests

## Run E2E (E-commerce flow)
```bash
npx playwright test ecommercePurchase
```

## Run API tests
```bash
npm run test:api
```

## Run in Specific Browsers
```bash
npx playwright test --browser=chromium
npx playwright test --browser=firefox
npx playwright test --browser=webkit
```

## Debug Mode (Inspector)
```bash
npm run test:debug
```
**Tip:** Debug mode lets you pause/lock execution per step to inspect locators, assertions, and page state before continuing.

## Tracing (with Screenshots)

### Enable tracing for the E2E run:
```bash
npx playwright test ecommercePurchase --trace on
```

### Open the trace viewer after the run:
```bash
npx playwright show-trace trace.zip
```
