# React Router

## What is it?

React Router is a client-side routing library for React.
It connects URLs to components, allowing navigation between
different views without reloading the browser.

## What is it used for?

Building multi-page applications where each view has its own URL.
Common use cases:

- Navigation between pages (home, about, profile)
- Dynamic routes with parameters (/products/1)
- Protected routes for authenticated users
- 404 not found pages

## Key Concepts

**BrowserRouter** — Wraps the entire app and enables
the routing system. Required for everything else to work.

**Routes** — Container that holds all route definitions.
Renders only the first route that matches the current URL.

**Route** — Defines a single route with a path and a component.
`path` is the URL and `element` is what gets rendered.

**Link** — Navigates between pages without reloading the browser.
Always use `Link` instead of `<a>` for internal navigation.

**useNavigate** — Hook that lets you navigate programmatically
from inside a function, for example after a form submission.

**useParams** — Hook that reads dynamic parameters from the URL,
for example the `id` in `/products/:id`.

## When to use it?

- The app has more than one screen or view
- Each view needs its own shareable URL
- You need browser back/forward button support

## When NOT to use it?

- Single page with no navigation needed
- You are already using TanStack Router

## Is it worth learning?

Yes. React Router is the standard routing solution for React.
It is used in the majority of React projects and is essential
knowledge for any frontend developer.

## Alternatives

| Technology | When to choose it |
|---|---|
| React Router (this) | Standard routing, most projects |
| TanStack Router | Full TypeScript type safety on routes |

## React Router vs TanStack Router

**React Router** is simpler to set up and has a larger community.
It works well for most projects but has limited TypeScript support
for route params and search params.

**TanStack Router** offers complete type safety.
TypeScript knows exactly which routes exist and what params they have.
Better for large projects where type safety is critical.

**Recommendation:** Use React Router for most projects.
Use TanStack Router if full type safety on routes is a priority.

## What does the example in this branch do?

`src/App.tsx` creates two pages: Inicio and Acerca.
The nav bar has two links that navigate between them.
It demonstrates how `BrowserRouter`, `Routes`, `Route` and `Link`
work together to enable client-side navigation without page reloads.

## How to run

```bash
git checkout feat/react-router
cd pweb-react-investigation
npm install
npm run dev
```

## Official Resources

- [React Router Documentation](https://reactrouter.com)
- [Installation](https://reactrouter.com/start/library/installation)
- [Routing](https://reactrouter.com/start/library/routing)