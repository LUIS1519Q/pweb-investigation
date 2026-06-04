# Cypress

## What is it?

Cypress is a next-generation end-to-end testing framework
built for the modern web. It runs tests directly in the browser,
simulating exactly what a real user would do in the application
from start to finish.

## What is it used for?

Testing complete user flows across the entire application.
Common use cases:

- Testing the full login flow from form to dashboard
- Verifying navigation between pages works correctly
- Testing forms with validation and submission
- Ensuring the UI displays the correct data after API calls

## Key Concepts

**cy.visit** — Opens a URL in the browser.
Always the first step in an end-to-end test.

**cy.get** — Finds an element using a CSS selector.
Returns the element for further chaining.

**cy.contains** — Finds an element by its text content.
More readable than cy.get for text-based queries.

**should** — Assertion that verifies a condition on an element.
`should("exist")` checks the element is in the DOM.
`should("contain", "text")` checks the element has that text.

**beforeEach** — Runs setup code before each test.
Used to navigate to the starting page before every test.

**it** — Defines a single test case.
Same as `test` in Jest but the standard in Cypress.

**cy.intercept** — Intercepts network requests.
Used to control API responses in tests.

**cy.wait** — Waits for an aliased request to complete
before continuing the test.

## When to use it?

- Testing complete user flows that span multiple pages
- Verifying the application works correctly end to end
- Testing critical paths like login, checkout, or registration

## When NOT to use it?

- Testing a single component in isolation → use React Testing Library
- Testing pure functions or business logic → use Jest
- Quick unit tests → Cypress is slow compared to Jest

## Is it worth learning?

Yes. Cypress is the most popular end-to-end testing tool
for web applications. It provides a visual test runner
that shows exactly what happens in the browser during each test.
End-to-end testing is increasingly required in professional projects.

## Alternatives

| Technology | When to choose it |
|---|---|
| Cypress (this) | End-to-end tests, complete user flows |
| Playwright | Cross-browser E2E testing, more configuration |
| React Testing Library | Component tests, single component behavior |
| Jest | Unit tests, pure functions |

## Cypress vs React Testing Library

**Cypress** opens a real browser and tests the complete application.
It can test navigation, API calls, and multiple pages in one test.
Slower but the most realistic way to test the app.

**React Testing Library** uses a simulated DOM and tests
one component at a time. Much faster but cannot test
cross-page flows or real network requests.

**Recommendation:** Use React Testing Library for component tests.
Use Cypress for critical user flows that must work end to end.

## What does the example in this branch do?

`src/App.tsx` renders a simple page with a title, a paragraph,
and a button. `cypress/e2e/app.cy.ts` contains three tests
that verify each element exists and has the correct content.
It demonstrates how `cy.visit`, `cy.get` and `should`
work together to test a page in a real browser.

## How to run

First start the development server in one terminal:

```bash
npm run dev
```

Then open Cypress in another terminal:

```bash
npm run cypress:open
```

## Official Resources

- [Cypress Documentation](https://docs.cypress.io)
- [Writing Your First E2E Test](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test)
- [Assertions](https://docs.cypress.io/guides/references/assertions)