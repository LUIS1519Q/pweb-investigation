# TanStack Router

## What is it?

TanStack Router is a fully type-safe routing library for React.
It connects URLs to components like React Router but with
complete TypeScript support for routes, params, and search params.

## What is it used for?

Building multi-page applications where type safety on routes is critical.
Common use cases:

- Navigation between pages with full TypeScript support
- Dynamic routes with typed parameters
- Type-safe search params
- Large scale applications where route errors must be caught at compile time

## Key Concepts

**createRootRoute** — Creates the root route that wraps all other routes.
This is where the global layout lives, like the navigation bar.

**createRoute** — Creates an individual route with a path and component.
Every route must declare its parent route with `getParentRoute`.

**Outlet** — Placeholder inside the root route where child routes render.
Similar to `{children}` in a layout component.

**RouterProvider** — Connects the router to React.
Wraps the entire app and enables the routing system.

**Link** — Navigates between pages without reloading the browser.
Fully typed so TypeScript knows which routes exist.

**Route.useParams()** — Reads URL params with full type safety.
TypeScript knows exactly which params each route has.

## When to use it?

- Full TypeScript type safety on routes is required
- Large projects where route mistakes must be caught early
- You want typed search params and navigation

## When NOT to use it?

- Simple projects where React Router is enough
- The team is already familiar with React Router
- Quick setup is more important than type safety

## Is it worth learning?

Yes. TanStack Router is growing rapidly in adoption.
It solves real problems with TypeScript and routing
that React Router does not address fully.
Learning it gives you an advantage in modern React projects.

## Alternatives

| Technology | When to choose it |
|---|---|
| TanStack Router (this) | Full type safety, large projects |
| React Router | Standard routing, simpler setup |

## TanStack Router vs React Router

**React Router** is simpler to set up and has a much larger community.
Most tutorials and projects use React Router.

**TanStack Router** requires more configuration but gives you
complete TypeScript safety. If you mistype a route name or param,
TypeScript catches it before you run the code.

**Recommendation:** Use React Router for most projects.
Use TanStack Router when type safety on routes is a hard requirement.

## What does the example in this branch do?

`src/App.tsx` creates two pages: Inicio and Acerca using TanStack Router.
The root route holds the navigation bar and the Outlet.
Each page is a child route that renders inside the Outlet.
It demonstrates how `createRootRoute`, `createRoute`,
`Outlet` and `RouterProvider` work together.

## How to run

```bash
git checkout feat/tanstack-router
cd pweb-react-investigation
npm install
npm run dev
```

## Official Resources

- [TanStack Router Documentation](https://tanstack.com/router/latest)
- [Quick Start](https://tanstack.com/router/latest/docs/framework/react/quick-start)
- [File Based Routing](https://tanstack.com/router/latest/docs/framework/react/routing/file-based-routing)