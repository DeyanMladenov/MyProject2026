# DemoQA Playwright Tests

TypeScript end-to-end tests for [DemoQA](https://demoqa.com/), using Playwright Test and the Page Object Model.

## Requirements

- Node.js 22 (or a compatible current LTS release)
- npm

## Install

```bash
npm ci
npx playwright install chromium
```

On Linux systems that need Playwright's operating-system dependencies, install with:

```bash
npx playwright install --with-deps chromium
```

## Playwright MCP in VS Code

The workspace MCP server is configured in `.mcp.json` and uses the locally installed Microsoft Playwright MCP package. After `npm ci`, install the Chromium build required by the MCP server:

```bash
node ./node_modules/@playwright/mcp/node_modules/playwright/cli.js install chromium
```

In VS Code, start or restart the `playwright` server from **Chat: Open Customizations** > **MCP Servers**. Node.js 18 or newer is required.

## Run tests

```bash
npm test
```

Other useful commands:

```bash
npm run test:headed
npm run test:ui
npm run report
```

The suite opens DemoQA in Chromium, verifies the home page, and follows Elements > Check Box to select Home and assert the confirmation text.

## Project layout

- `pages/` — Page Object Model classes and their page actions/locators
- `tests/` — Playwright test specifications
- `playwright.config.ts` — Browser, test, and report configuration
- `.github/workflows/playwright.yml` — CI workflow for pushes and pull requests

The GitHub Actions workflow installs Node.js, the npm dependencies, and Chromium, then runs the same `npm test` command used locally. It uploads the HTML report as a workflow artifact.
