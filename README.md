# Material UI

## What is it?

Material UI (MUI) is an open-source React component library
that implements Google's Material Design. It provides a comprehensive
set of ready-made components that are fully accessible,
customizable, and production-ready out of the box.

## What is it used for?

Building consistent and professional user interfaces quickly
using Google's Material Design system. Common use cases:

- Enterprise dashboards and admin panels
- Data tables with sorting, filtering and pagination
- Forms with inputs, selects and date pickers
- Navigation with app bars, drawers and tabs

## Key Concepts

**Box** — The most fundamental layout component.
Equivalent to a div but accepts CSS properties as props
through the `sx` prop or directly as props.

**Typography** — Component for displaying text with predefined variants.
`variant="h4"` renders a heading. `variant="body1"` renders a paragraph.

**Paper** — A surface component with elevation and shadow.
Used to create cards and contained sections.
`elevation` controls the shadow intensity.

**Button** — A button with three variants:
`contained` has a solid background, `outlined` has a border only,
`text` has no background or border.

**sx prop** — A shorthand for inline styles using the MUI theme.
`sx={{ p: 4 }}` sets padding. `sx={{ mt: 2 }}` sets margin top.

**Grid** — A 12-column grid system for responsive layouts.
`size={{ xs: 12, md: 6 }}` takes full width on mobile and half on desktop.

**Controller** — An adapter from React Hook Form that connects
MUI inputs to the form since MUI components are not native inputs.

## When to use it?

- Enterprise or business applications
- Projects that follow Material Design guidelines
- When you need complex components like DataGrid out of the box
- Large teams that need a standardized design system

## When NOT to use it?

- You need a fully custom design → use TailwindCSS instead
- The project is small and simple → Chakra UI is lighter
- You want full ownership of component code → use shadcn/ui

## Is it worth learning?

Yes. Material UI is the most downloaded React component library
on npm. It is used by thousands of companies worldwide and
is a standard in enterprise React development.
Knowing MUI is a significant advantage in the job market.

## Alternatives

| Technology | When to choose it |
|---|---|
| Material UI (this) | Material Design, enterprise, large projects |
| Chakra UI | Neutral design, startups, simpler API |
| TailwindCSS | Custom design, full control, utility-first |
| Ant Design | Enterprise, data-heavy applications |

## Material UI vs Chakra UI

**Material UI** follows Google's Material Design strictly.
More components available including complex ones like DataGrid.
Better for enterprise projects with large teams.

**Chakra UI** has a more neutral and flexible design system.
Simpler API and easier to customize.
Better for startups and projects that need a clean design.

**Recommendation:** Use Material UI for enterprise projects
or when Material Design is required. Use Chakra UI for
smaller projects that need a clean and flexible design system.

## What does the example in this branch do?

`src/App.tsx` creates a centered card on a gray background
using Material UI components. The card has a title, a description,
and a button. All styles are applied using MUI components
and the `sx` prop without any CSS file.
It demonstrates how `Box`, `Paper`, `Typography` and `Button`
work together to build a simple layout with Material Design.

## How to run

```bash
git checkout feat/material-ui
cd pweb-react-investigation
npm install
npm install @mui/material @emotion/react @emotion/styled
npm run dev
```

## Official Resources

- [Material UI Documentation](https://mui.com/material-ui)
- [Installation](https://mui.com/material-ui/getting-started/installation)
- [Box](https://mui.com/material-ui/react-box)
- [Typography](https://mui.com/material-ui/react-typography)