# useState

## What is it?

`useState` is a React Hook that lets you add a state variable to your component.
State is memory that persists between renders. When state changes, React
automatically re-renders the component with the new value.

## What is it used for?

Managing local component data that changes over time and needs to be
reflected in the UI. Common use cases:

- Counters and toggles
- Form input values
- Show/hide elements
- Any value that changes due to user interaction

## Key Concepts

**useState(initialValue)** — Returns an array with two elements:
the current state value and a setter function.

**setter function** — The only correct way to update state.
Calling it triggers a re-render with the new value.

**Initial value** — Only used on the first render.
Can be a number, string, boolean, array, or object.

**Functional update** — When the new state depends on the previous one,
use the functional form: `setState(prev => prev + 1)`.

## When to use it?

- A value changes due to user interaction (click, typing, toggle)
- The UI needs to reflect that change immediately
- The state is local to one component and doesn't need to be shared globally

## When NOT to use it?

- The value doesn't affect the UI → use a regular variable or `useRef`
- Multiple components need the same value → use Zustand or useContext
- The data comes from a server → use TanStack Query
- The state logic is very complex with many related values → use `useReducer`

## Is it worth learning?

Yes. `useState` is the most fundamental Hook in React.
Every React developer uses it daily. It is the starting point
for understanding how React works and how state drives the UI.

## Alternatives

| Technology | When to choose it |
|---|---|
| useState (this) | Simple local state, single component |
| useReducer | Complex state with multiple related values |
| useContext | Shared state across multiple components |
| Zustand | Global state across the entire app |

## useState vs useReducer

**useState** is the right choice when the state is simple:
a single value, a boolean, or a small object.

**useReducer** is better when you have multiple values that change
together or when the next state depends on complex logic.

**Recommendation:** Start with `useState`. Switch to `useReducer`
only when the logic becomes hard to follow.

## What does the example in this branch do?

`src/App.tsx` defines a counter that starts at 0.
Each time the user clicks the button, the counter increases by 1.
It demonstrates how `useState` stores a value between renders
and how updating it triggers a UI re-render automatically.

## How to run

```bash
git checkout feat/useState
cd pweb-react-investigation
npm install
npm run dev
```

## Official Resources

- [useState Reference](https://react.dev/reference/react/useState)
- [State: A Component's Memory](https://react.dev/learn/state-a-components-memory)