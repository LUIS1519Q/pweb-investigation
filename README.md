# useEffect

## What is it?

`useEffect` is a React Hook that lets you synchronize a component
with an external system. It runs code after the component renders,
outside of the main rendering process.

## What is it used for?

Running side effects that don't belong in the render phase. Common use cases:

- Fetching data from an API
- Setting up timers or intervals
- Updating the document title
- Syncing with external systems

## Key Concepts

**Effect function** — The function passed to `useEffect`.
Runs after every render by default.

**Dependency array** — Controls when the effect runs:
- No array → runs after every render
- Empty array `[]` → runs only once on mount
- With values `[val]` → runs when those values change

**Cleanup function** — Optional return value that runs
before the next effect or when the component unmounts.

**Async inside useEffect** — You cannot make the effect function
async directly. Create an async function inside and call it.

## When to use it?

- Fetching data when the component loads
- Setting up a subscription or event listener
- Running code when a specific value changes

## When NOT to use it?

- Transforming data for rendering → do it directly in the render
- Handling user events → use event handlers instead
- Initializing global state → do it outside the component

## Is it worth learning?

Yes. `useEffect` is one of the most used hooks in React.
Understanding when and how to use it correctly is essential
for building real applications that interact with external data.

## Alternatives

| Technology | When to choose it |
|---|---|
| useEffect (this) | Side effects, lifecycle, subscriptions |
| useLayoutEffect | DOM measurements before paint |
| TanStack Query | Server data fetching with cache |
| Event handlers | Responding to user interactions |

## useEffect vs TanStack Query

**useEffect** is a low-level tool. You manually handle
loading, error, and data states every time.

**TanStack Query** is built on top of useEffect but adds
automatic caching, refetching, and error handling out of the box.

**Recommendation:** Use `useEffect` for simple one-time effects.
Use TanStack Query for any serious data fetching from an API.

## What does the example in this branch do?

`src/App.tsx` shows the current date on screen.
When the component loads, `useEffect` runs once,
gets today's date and stores it in state.
It demonstrates how `useEffect` with an empty dependency
array runs only on mount.

## How to run

```bash
git checkout feat/useEffect
cd pweb-react-investigation
npm install
npm run dev
```

## Official Resources

- [useEffect Reference](https://react.dev/reference/react/useEffect)
- [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)