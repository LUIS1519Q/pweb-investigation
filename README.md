# TanStack Query

## What is it?

TanStack Query is often described as the missing data-fetching
library for web applications. It makes fetching, caching,
synchronizing, and updating server state in React applications
straightforward and automatic.

## What is it used for?

Managing server state: data that lives on a remote server
and needs to be fetched, cached, and kept in sync.
Common use cases:

- Fetching data from a REST API
- Caching API responses to avoid unnecessary requests
- Automatically refetching stale data
- Managing loading and error states automatically

## Key Concepts

**QueryClient** — The central cache manager.
Stores all fetched data and manages cache invalidation.
Must be created once and provided to the app.

**QueryClientProvider** — Wraps the app and makes the QueryClient
available to all components. Required for useQuery to work.

**useQuery** — The main hook for fetching data.
Returns `data`, `isLoading`, `isError`, and more.

**queryKey** — A unique identifier for each query.
Used as the cache key. If two components use the same key,
they share the same cached data and only one request is made.

**queryFn** — The function that fetches the data.
Must return a Promise. TanStack Query calls it automatically.

**enabled** — Optional boolean that controls whether the query runs.
Useful when the query depends on a value that may not exist yet.

**invalidateQueries** — Forces a query to refetch its data.
Used after a mutation to keep the UI in sync with the server.

## When to use it?

- Any data that comes from a server or API
- When you need automatic caching and background refetching
- When you want loading and error states handled automatically

## When NOT to use it?

- Local UI state like toggles or counters → use useState
- Global app state like theme or user preferences → use Zustand
- Very simple one-time fetches in small apps → useEffect may be enough

## Is it worth learning?

Yes. TanStack Query has become the standard solution for server
state management in React. It eliminates dozens of lines of
manual useEffect code and handles edge cases automatically.
It is used in production by thousands of companies worldwide.

## Alternatives

| Technology | When to choose it |
|---|---|
| TanStack Query (this) | Server data, caching, automatic refetching |
| useEffect + fetch | Simple one-time fetches, no caching needed |
| SWR | Similar to TanStack Query, simpler API |
| Zustand | Client-side global state, not server data |

## TanStack Query vs useEffect

**useEffect** requires you to manually manage loading state,
error state, caching, and refetching every time you fetch data.
This leads to repetitive boilerplate code in every component.

**TanStack Query** handles all of that automatically.
You only define what data to fetch and it takes care of the rest:
caching, background updates, error retries, and loading states.

**Recommendation:** Use TanStack Query for any serious data fetching.
Use useEffect only for simple one-time effects that are not data fetching.

## What does the example in this branch do?

`src/App.tsx` fetches a user from a public API using TanStack Query.
While the data is loading, it shows a loading message.
If the request fails, it shows an error message.
When the data arrives, it displays the user's name.
It demonstrates how `QueryClient`, `QueryClientProvider`,
`useQuery`, `queryKey`, and `queryFn` work together
to fetch and display server data automatically.

## How to run

```bash
git checkout feat/tanstack-query
cd pweb-react-investigation
npm install
npm install @tanstack/react-query
npm run dev
```

## Official Resources

- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [Quick Start](https://tanstack.com/query/latest/docs/framework/react/quick-start)
- [useQuery Reference](https://tanstack.com/query/latest/docs/framework/react/reference/useQuery)