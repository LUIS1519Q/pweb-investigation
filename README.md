# useContext

## What is it?

`useContext` is a React Hook that lets you read and subscribe
to context from your component. It allows sharing data across
the component tree without passing props manually at every level.

## What is it used for?

Sharing global data that many components need. Common use cases:

- Current authenticated user
- Theme (dark/light mode)
- Language or locale settings
- Any data needed by deeply nested components

## Key Concepts

**createContext(defaultValue)** — Creates the context object.
The default value is used only when no Provider is found above.

**Provider** — Wraps the components that need access to the context.
Accepts a `value` prop that is shared with all children.

**useContext(MyContext)** — Reads the current context value
from the nearest Provider above in the tree.

**Re-renders** — Every component that calls `useContext`
re-renders when the context value changes.

## When to use it?

- Data needs to be accessible by many components at different levels
- You want to avoid prop drilling through intermediate components
- The data is relatively stable (theme, user, language)

## When NOT to use it?

- Only two nearby components share the data → pass props directly
- The data changes very frequently → causes too many re-renders
- The app is large and complex → use Zustand instead

## Is it worth learning?

Yes. `useContext` is built into React with no extra installation.
It is perfect for simple global state like themes or user info.
Understanding it also helps you understand how Zustand works internally.

## Alternatives

| Technology | When to choose it |
|---|---|
| useContext (this) | Simple global data, stable values |
| useState + props | Two nearby components |
| Zustand | Frequently changing global state |
| MobX | Reactive state with complex relationships |

## useContext vs Zustand

**useContext** is built into React, requires no installation,
and works well for stable data like themes or user info.
However, every consumer re-renders when the value changes.

**Zustand** uses selectors so components only re-render
when the specific piece of state they use changes.
Better for frequently updated global state.

**Recommendation:** Use `useContext` for simple and stable global data.
Use Zustand when performance matters or the state changes often.

## What does the example in this branch do?

`src/App.tsx` creates a context with a greeting value.
The `Mensaje` component reads the greeting directly from
the context without receiving any props.
It demonstrates how `useContext` eliminates prop drilling
by making data available anywhere in the tree.

## How to run

```bash
git checkout feat/useContext
cd pweb-react-investigation
npm install
npm run dev
```

## Official Resources

- [useContext Reference](https://react.dev/reference/react/useContext)
- [Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)