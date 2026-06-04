# useRef

## What is it?

`useRef` is a React Hook that lets you reference a value
that is not needed for rendering. Unlike state, changing
a ref does not trigger a re-render.

## What is it used for?

Accessing DOM elements directly or storing values that
persist between renders without causing re-renders. Common use cases:

- Focusing an input programmatically
- Storing a timer ID
- Keeping track of previous state values
- Accessing video or canvas elements directly

## Key Concepts

**ref.current** — The property that holds the actual value.
Mutable and does not trigger re-renders when changed.

**useRef(null)** — Initial value is null when referencing DOM elements.
React assigns the real element after the first render.

**ref={inputRef}** — Connects the ref to a DOM element in JSX.

**Optional chaining ?.** — Used to safely access ref.current
methods only if the element exists.

## When to use it?

- You need to interact with a DOM element directly (focus, scroll, measure)
- You need to store a value between renders without triggering re-renders
- You need to store a timer or interval ID to clear it later

## When NOT to use it?

- The value needs to update the UI → use `useState` instead
- You want to share data between components → use Zustand or useContext

## Is it worth learning?

Yes. `useRef` solves specific problems that `useState` cannot.
Every time you need to interact with the DOM directly
or store a silent value, `useRef` is the right tool.

## Alternatives

| Technology | When to choose it |
|---|---|
| useRef (this) | DOM access, silent values, timer IDs |
| useState | Values that need to update the UI |
| useCallback | Memoizing functions between renders |

## useRef vs useState

**useRef** stores a value silently.
Changing it does not re-render the component.

**useState** stores a value visibly.
Changing it triggers a re-render and updates the UI.

**Recommendation:** If the value needs to appear on screen, use `useState`.
If it only needs to exist in memory or interact with the DOM, use `useRef`.

## What does the example in this branch do?

`src/App.tsx` creates an input and a button.
When the user clicks the button, `useRef` is used to access
the input element directly and call `.focus()` on it,
placing the cursor inside the input automatically.

## How to run

```bash
git checkout feat/useRef
cd pweb-react-investigation
npm install
npm run dev
```

## Official Resources

- [useRef Reference](https://react.dev/reference/react/useRef)
- [Referencing Values with Refs](https://react.dev/learn/referencing-values-with-refs)
- [Manipulating the DOM with Refs](https://react.dev/learn/manipulating-the-dom-with-refs)