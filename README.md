# MobX

## What is it?

MobX is a battle-tested state management library that makes
state management simple and scalable by applying transparent
functional reactive programming. It automatically tracks
which parts of the state your components use and updates
only those components when the state changes.

## What is it used for?

Managing application state in a reactive way where changes
propagate automatically to all components that depend on them.
Common use cases:

- Complex state with many relationships between data
- Applications where state changes need to propagate automatically
- Projects where object-oriented programming is preferred
- Real-time applications like dashboards or simulations

## Key Concepts

**makeAutoObservable** — Automatically makes all properties
observable and all methods actions. The simplest way to set up MobX.

**observable** — A value that MobX tracks.
When it changes, all components that use it re-render automatically.

**action** — A method that modifies observable state.
MobX requires state to be modified inside actions.

**computed** — A value derived from observable state.
Automatically recalculates when its dependencies change.

**observer** — A higher-order component from `mobx-react-lite`.
Wraps a React component so it re-renders when observable state changes.
Without it, the component will not react to state changes.

## When to use it?

- The state has complex relationships between multiple values
- The team prefers object-oriented programming
- State changes need to propagate automatically without explicit setters
- The domain naturally fits a reactive model

## When NOT to use it?

- Simple global state → use Zustand instead
- The team is not familiar with OOP or reactive programming
- You prefer explicit and predictable state updates

## Is it worth learning?

Yes. MobX has been around since 2015 and is used in many
large enterprise applications. Understanding it gives you
insight into reactive programming and how state can be
managed in an object-oriented way in React.

## Alternatives

| Technology | When to choose it |
|---|---|
| MobX (this) | Reactive state, OOP, complex relationships |
| Zustand | Simple API, functional, modern projects |
| Redux Toolkit | Enterprise, large team, complex middlewares |
| Context API | No dependencies, simple static data |

## MobX vs Zustand

**MobX** is reactive and magical. You modify state directly
and MobX automatically detects the change and updates
all components that depend on it. Less boilerplate for
complex states with many relationships.

**Zustand** is functional and explicit. You know exactly
when state changes because you call `set` explicitly.
More predictable and easier to debug.

**Recommendation:** Use Zustand for most new projects.
Use MobX if the team has prior experience with it or if
the domain naturally fits the reactive model.

## What does the example in this branch do?

`src/App.tsx` defines a MobX store as a class with a counter
and an increment method. `makeAutoObservable` makes the counter
observable and the method an action automatically.
The App component is wrapped with `observer` so it re-renders
when the counter changes. Each click calls the increment method
which modifies the state directly.
It demonstrates how `makeAutoObservable`, `observer`,
and direct state mutation work together in MobX.

## How to run

```bash
git checkout feat/mobx
cd pweb-react-investigation
npm install
npm install mobx mobx-react-lite
npm run dev
```

## Official Resources

- [MobX Documentation](https://mobx.js.org)
- [The Gist of MobX](https://mobx.js.org/the-gist-of-mobx.html)
- [React Integration](https://mobx.js.org/react-integration.html)