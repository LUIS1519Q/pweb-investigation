# TailwindCSS

## What is it?

Tailwind CSS is a utility-first CSS framework packed with classes
like `flex`, `pt-4`, `text-center` and `rotate-90` that can be
composed to build any design directly in your markup.
Instead of writing custom CSS, you apply pre-defined utility
classes directly in your HTML or JSX.

## What is it used for?

Building custom designs quickly without leaving your component files.
Common use cases:

- Styling layouts with flexbox and grid
- Building responsive designs with breakpoint prefixes
- Creating cards, buttons, forms and navbars
- Applying hover, focus and other interactive states

## Key Concepts

**Utility classes** — Single-purpose classes that do one thing.
`bg-blue-500` sets background color. `p-4` sets padding.
`text-white` sets text color.

**Responsive prefixes** — Classes prefixed with breakpoints
apply only at that screen size and above.
`md:grid-cols-3` applies 3 columns only on medium screens and larger.

**State variants** — Classes prefixed with a state apply only
in that state. `hover:bg-blue-600` changes background on hover.
`focus:ring-2` adds a ring on focus.

**Spacing scale** — Numbers map to consistent spacing values.
`p-1` = 4px, `p-2` = 8px, `p-4` = 16px, `p-8` = 32px.

**Color scale** — Numbers indicate shade intensity.
`blue-100` is very light, `blue-500` is medium, `blue-900` is very dark.

## When to use it?

- You want to style components without writing separate CSS files
- You need a consistent design system with predefined values
- You want responsive design with minimal effort
- You prefer keeping styles close to the component markup

## When NOT to use it?

- The project already uses a component library like Chakra UI or MUI
- The team prefers writing traditional CSS or SCSS
- You need highly complex animations or custom CSS features

## Is it worth learning?

Yes. Tailwind CSS is the most popular CSS framework today,
surpassing Bootstrap in adoption. It is used by companies
like GitHub, Netflix, and NASA. The utility-first approach
is now a standard pattern in modern frontend development.

## Alternatives

| Technology | When to choose it |
|---|---|
| TailwindCSS (this) | Custom design, full control, utility-first |
| Chakra UI | Ready-made accessible components, faster setup |
| Material UI | Material Design components, enterprise projects |
| Bootstrap | Legacy projects, already in use |

## TailwindCSS vs Chakra UI

**TailwindCSS** gives you full control over the design.
You build everything from scratch using utility classes.
More flexible but requires more work to build components.

**Chakra UI** gives you ready-made components like Button,
Input, and Modal out of the box. Less flexible but much
faster to build a working UI.

**Recommendation:** Use TailwindCSS when you need a custom design.
Use Chakra UI or Material UI when you need ready-made components quickly.

## What does the example in this branch do?

`src/App.tsx` creates a centered card on a gray background.
The card has a title, a description, and a button.
All styles are applied using Tailwind utility classes directly
in the JSX. It demonstrates how flexbox, spacing, colors,
shadows, and hover states work with Tailwind classes.

## How to run

```bash
git checkout feat/tailwindcss
cd pweb-react-investigation
npm install
npm install tailwindcss @tailwindcss/vite
npm run dev
```

## Official Resources

- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Installation with Vite](https://tailwindcss.com/docs/installation/using-vite)
- [Utility-First Fundamentals](https://tailwindcss.com/docs/utility-first)