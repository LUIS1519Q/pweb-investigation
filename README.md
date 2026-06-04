# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# Jest

## What is it?

Jest is a JavaScript testing framework that focuses on simplicity.
It lets you write automated tests that verify your code works
correctly before running it in the browser.
It works with projects that use TypeScript, React, Node, and more.

## What is it used for?

Verifying that functions and logic return the expected results.
Common use cases:

- Testing utility functions like calculations and transformations
- Verifying that a function throws an error when expected
- Testing async functions that fetch data
- Ensuring that existing code does not break after changes

## Key Concepts

**describe** — Groups related tests together under a common name.
Makes the test output easier to read.

**test** — Defines a single test case with a description
and a function that contains the assertions.

**expect** — Wraps the value you want to test.
Chains with a matcher to verify the result.

**toBe** — Matcher that checks strict equality.
Used for primitive values like numbers, strings, and booleans.

**toEqual** — Matcher that checks deep equality.
Used for objects and arrays.

**toThrow** — Matcher that checks if a function throws an error.

**jest.fn()** — Creates a mock function that tracks calls.
Useful for testing functions that depend on other functions.

**beforeEach** — Runs a setup function before each test.
Used to reset state between tests.

## When to use it?

- Testing pure functions that transform or calculate data
- Verifying business logic that does not involve the UI
- Ensuring utility functions work correctly in all cases

## When NOT to use it?

- Testing React components and what the user sees → use React Testing Library
- Testing complete user flows in the browser → use Cypress

## Is it worth learning?

Yes. Jest is the most popular JavaScript testing framework.
Writing tests is a professional skill expected in most
development teams. It catches bugs before they reach production
and gives you confidence when changing existing code.

## Alternatives

| Technology | When to choose it |
|---|---|
| Jest (this) | Unit tests, pure functions, business logic |
| React Testing Library | Component tests, user interactions |
| Cypress | End-to-end tests, complete user flows |
| Vitest | Same API as Jest but built for Vite projects |

## Jest vs React Testing Library

**Jest** tests pure logic in isolation.
It does not render components or interact with the DOM.
Fast and simple for testing functions and calculations.

**React Testing Library** tests components from the user's perspective.
It renders the component and verifies what appears on screen.
Built on top of Jest and uses the same `expect` syntax.

**Recommendation:** Use Jest for logic and utility functions.
Use React Testing Library for component behavior and UI interactions.

## What does the example in this branch do?

`src/utils/sumar.ts` defines a simple function that adds two numbers.
`src/utils/sumar.test.ts` contains three tests that verify
the function works correctly with positive numbers, zero, and negative numbers.
It demonstrates how `describe`, `test`, `expect` and `toBe`
work together to write and run automated tests.

## How to run

```bash
git checkout feat/jest
cd pweb-react-investigation
npm install
npm install --save-dev jest @types/jest ts-jest
npx ts-jest config:init
npm test
```

## Official Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Using Matchers](https://jestjs.io/docs/using-matchers)
- [Mock Functions](https://jestjs.io/docs/mock-functions)