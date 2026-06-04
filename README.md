# Chakra UI

## What is it?

Chakra UI is a simple, modular, and accessible component library
for React. It provides a set of ready-made UI components that
follow WAI-ARIA accessibility guidelines out of the box.
Every component is designed to be composable and customizable
using style props directly in JSX.

## What is it used for?

Building accessible and consistent user interfaces quickly
without writing CSS from scratch. Common use cases:

- Building forms with inputs, labels and error messages
- Creating layouts with Box, Flex, Grid and Stack
- Adding modals, toasts and drawers to the app
- Implementing dark mode with zero extra configuration

## Key Concepts

**Provider** — Wraps the entire app and enables Chakra UI.
Required for all Chakra components to work correctly.

**Box** — The most fundamental component. Equivalent to a div
but accepts all CSS properties as props.

**Style props** — CSS properties passed directly as props.
`bg="white"` sets background. `p={4}` sets padding.
`color="blue.600"` sets text color.

**HStack / VStack** — Flex containers with automatic spacing.
HStack arranges children horizontally. VStack vertically.

**colorScheme** — Applies a complete color palette to a component.
`colorScheme="blue"` sets background, hover, and focus colors automatically.

**Responsive values** — Pass an array to apply different values
at different breakpoints: `fontSize={{ base: "sm", md: "lg" }}`.

## When to use it?

- You need accessible components without building them from scratch
- You want a consistent design system with minimal configuration
- You need complex components like Modal, Toast, or Drawer quickly

## When NOT to use it?

- You need a fully custom design → use TailwindCSS instead
- The project already uses Material UI
- Bundle size is critical → Chakra adds significant weight

## Is it worth learning?

Yes. Chakra UI is one of the most popular React component libraries.
Its accessibility-first approach and simple API make it
a great choice for building production-ready interfaces quickly.
It is widely used in startups and medium-sized projects.

## Alternatives

| Technology | When to choose it |
|---|---|
| Chakra UI (this) | Accessible components, simple API, startups |
| TailwindCSS | Custom design, full control, utility-first |
| Material UI | Material Design, enterprise projects |
| shadcn/ui | Copy-paste components, full ownership of code |

## Chakra UI vs Material UI

**Chakra UI** has a simpler and more flexible API.
Style props make customization straightforward.
Better for projects that need a neutral design system.

**Material UI** implements Google's Material Design strictly.
More components available out of the box including DataGrid.
Better for enterprise projects that need a familiar design language.

**Recommendation:** Use Chakra UI for startups and projects
that need a clean neutral design. Use Material UI for enterprise
projects or when Material Design is required.

## What does the example in this branch do?

`src/App.tsx` creates a centered card on a gray background
using Chakra UI components. The card has a title, a description,
and a button. All styles are applied using Chakra style props
directly in JSX without any CSS file.
It demonstrates how `Provider`, `Box`, `Heading`, `Text`,
and `Button` work together with style props.

## How to run

```bash
git checkout feat/chakra-ui
cd pweb-react-investigation
npm install
npm install @chakra-ui/react
npm run dev
```

## Official Resources

- [Chakra UI Documentation](https://chakra-ui.com/docs)
- [Installation](https://chakra-ui.com/docs/get-started/installation)
- [Style Props](https://chakra-ui.com/docs/styled-system/style-props)