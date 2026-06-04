import {
  createRouter,
  createRoute,
  createRootRoute,
  RouterProvider,
  Link,
  Outlet,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({
  component: () => (
    <div>
      <nav>
        <Link to="/">Inicio</Link>
        {" | "}
        <Link to="/acerca">Acerca</Link>
      </nav>
      <Outlet />
    </div>
  ),
});

const inicioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <h1>Página de Inicio</h1>,
});

const acercaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/acerca",
  component: () => <h1>Página Acerca de</h1>,
});

const routeTree = rootRoute.addChildren([inicioRoute, acercaRoute]);
const router = createRouter({ routeTree });

function App() {
  return <RouterProvider router={router} />;
}

export default App;