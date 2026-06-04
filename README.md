# React Testing Library

## What is it?

React Testing Library is a lightweight solution for testing
React components. It provides utility functions that encourage
testing components the way a real user would interact with them,
rather than testing implementation details.

## What is it used for?

Verifying that React components render and behave correctly
from the user's perspective. Common use cases:

- Checking that a component renders the correct text
- Verifying that a button click triggers the expected behavior
- Testing form validation messages appear correctly
- Ensuring components respond correctly to props

## Key Concepts

**render** — Mounts the component into a simulated DOM.
After calling render, the component is available for querying.

**screen** — Object that provides access to the rendered DOM.
Use it to find elements by text, role, label, or test id.

**getByText** — Finds an element by its visible text content.
Throws an error if the element is not found.

**getByRole** — Finds an element by its ARIA role.
The preferred query because it reflects how users and assistive
technologies interact with the page.

**queryByText** — Like getByText but returns null instead of
throwing an error. Use it to verify an element does NOT exist.

**findByText** — Async version of getByText.
Use it when the element appears after an async operation.

**fireEvent** — Simulates DOM events like click, change, submit.

**userEvent** — More realistic simulation of user interactions.
Simulates the full sequence of events a real user would trigger.

## When to use it?

- Testing what the user sees and interacts with in a component
- Verifying that UI elements appear or disappear based on state
- Testing form validation messages and error states

## When NOT to use it?

- Testing pure functions or business logic → use Jest instead
- Testing complete user flows across multiple pages → use Cypress

## Is it worth learning?

Yes. React Testing Library is the standard for testing
React components. It replaced Enzyme as the recommended
testing approach because it tests behavior rather than
implementation, making tests more resilient to refactoring.

## Alternatives

| Technology | When to choose it |
|---|---|
| React Testing Library (this) | Component tests, user interactions |
| Jest | Unit tests, pure functions, business logic |
| Cypress | End-to-end tests, complete user flows |
| Enzyme | Legacy projects only, no longer recommended |

## React Testing Library vs Cypress

**React Testing Library** tests components in isolation
using a simulated DOM. Fast and focused on single components.

**Cypress** opens a real browser and tests the complete
application from start to finish. Slower but more realistic.

**Recommendation:** Use React Testing Library for component
behavior tests. Use Cypress for complete user flow tests
that span multiple pages.

## What does the example in this branch do?

`src/components/Saludo.tsx` renders a greeting with a name prop.
`src/components/Saludo.test.tsx` contains two tests that verify
the component displays the correct name for different prop values.
It demonstrates how `render`, `screen.getByText` and
`toBeInTheDocument` work together to test component output.

## How to run

```bash
git checkout feat/react-testing-library
cd pweb-react-investigation
npm install
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom jest @types/jest ts-jest
npm test
```

## Official Resources

- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro)
- [Queries](https://testing-library.com/docs/queries/about)
- [User Interactions](https://testing-library.com/docs/user-event/intro)