# Zod

## What is it?

Zod is a TypeScript-first schema declaration and validation library.
A schema describes the shape and rules of your data.
Zod automatically infers the TypeScript type from the schema,
so you never have to define types and validation rules separately.

## What is it used for?

Defining validation rules in one place and reusing them across the app.
Common use cases:

- Form validation with React Hook Form
- Validating API responses
- Validating environment variables
- Any data that needs to be verified before use

## Key Concepts

**z.object** — Defines a schema for an object with multiple fields.

**z.string()** — Validates that a value is a string.
Can be chained with rules like `.nonempty()`, `.min()`, `.email()`.

**z.number()** — Validates that a value is a number.
Can be chained with `.min()`, `.max()`, `.positive()`.

**z.infer** — Extracts the TypeScript type from a schema automatically.
No need to define the interface separately.

**safeParse** — Validates data without throwing an error.
Returns `{ success: true, data }` or `{ success: false, error }`.

**refine** — Adds a custom validation rule that can compare
multiple fields, for example checking that two passwords match.

**zodResolver** — Adapter that connects Zod with React Hook Form.
Replaces the need for validation rules inside `register`.

## When to use it?

- Forms with multiple fields and complex validation rules
- When you want TypeScript to infer types from validation rules
- When the same validation rules are needed in multiple places

## When NOT to use it?

- A single field with a simple required check → use manual validation
- The project already uses Yup → no need to switch

## Is it worth learning?

Yes. Zod is the most popular validation library in the modern
React and TypeScript ecosystem. It eliminates duplicate type definitions
and makes validation predictable and reusable.

## Alternatives

| Technology | When to choose it |
|---|---|
| Zod (this) | TypeScript projects, type inference from schema |
| Yup | Works well with Formik, older projects |
| Manual validation | Simple forms, no dependencies |

## Zod vs Manual Validation

**Manual validation** uses plain if/else statements.
Simple but repetitive. No TypeScript type inference.

**Zod** defines all rules in a schema.
TypeScript infers the type automatically.
Reusable across the entire application.

**Recommendation:** Use manual validation to understand the concept.
Use Zod for any real project with forms or API validation.

## What does the example in this branch do?

`src/App.tsx` creates a form with one input field.
The validation rules are defined in a Zod schema.
The schema is connected to React Hook Form via `zodResolver`.
If the user submits without typing a name, Zod catches the error
and React Hook Form displays the message automatically.
It demonstrates how Zod, `z.infer`, and `zodResolver` work together.

## How to run

```bash
git checkout feat/zod
cd pweb-react-investigation
npm install
npm install zod react-hook-form @hookform/resolvers
npm run dev
```

## Official Resources

- [Zod Documentation](https://zod.dev)
- [Basic Usage](https://zod.dev/api)
- [React Hook Form Schema Validation](https://react-hook-form.com/get-started#SchemaValidation)