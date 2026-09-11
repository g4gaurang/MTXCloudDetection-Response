# Atom Detect landing page

## Purpose

This repository contains a product landing-page prototype for Atom Detect, a cloud detection and policy-controlled response concept. It demonstrates product positioning, interactive investigation workflows, response safeguards, integration categories, governance, operating analytics, and deployment planning.

The interface and its values are illustrative. They do not represent measured product performance, customer outcomes, service commitments, or verified connector availability.

## Stack

* React 19
* TypeScript
* Vite
* Lucide React icons
* Recharts
* Oxlint

## Local setup

Requirements:

* Node.js compatible with the version declared by the project dependencies
* npm

Install dependencies:

```bash
npm install
```

## Development and build

Start the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

Preview the production output:

```bash
npm run preview
```

## Pages deployment

The workflow in `.github/workflows/deploy.yml` builds and deploys `dist` when changes reach `main`. Repository Pages must be configured to use GitHub Actions as its source.

`vite.config.ts` uses a repository-safe relative base (`./`) so generated asset links work from a project subpath. The workflow can also be started manually from the Actions interface.

## Illustrative content and claims review

Before publishing:

* Treat every interface value, chart, scenario, workflow result, maturity status, and simulation event as illustrative product data.
* Validate product capability, integration availability, service scope, operating evidence, response authority, and roadmap statements with accountable product and legal reviewers.
* Remove or qualify claims that cannot be supported for the intended deployment.
* Confirm accessibility, privacy, security, and retention requirements for the production implementation.

## Updating scenarios and integrations

* Edit scenario, lifecycle, integration, governance, roadmap, and analytics source data in `src/data/content.ts`.
* Update page interaction and presentation logic in `src/App.tsx`.
* Keep integration labels generic unless a named connector has been verified and approved for publication.
* Re-run build, lint, responsive review, keyboard review, and claims search after content changes.

## Replacing the contact action

The demonstration contact form records confirmation only in local React state. It does not transmit data.

For production:

* Connect the submit action to an approved form or customer-relationship workflow.
* Add server-side validation, abuse controls, consent text, privacy notice, error handling, and retention controls.
* Do not log sensitive form values in the browser or deployment pipeline.
* Preserve an accessible success and error state.

## Data and file locations

* `src/data/content.ts` — structured product scenarios and supporting content
* `src/App.tsx` — page sections, interactive state, chart configuration, and local form confirmation
* `src/App.css` — component layout and responsive styles
* `src/index.css` — global tokens, typography, and accessibility defaults
* `index.html` — metadata, fonts, and application entry
* `vite.config.ts` — build and relative deployment base
* `.github/workflows/deploy.yml` — Pages build and deployment
* `tasks/todo.md` — implementation review checklist
* `tasks/lessons.md` — reusable implementation review note
