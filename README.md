# Validation

## What is it?

Validation is the process of verifying that user-provided data
meets the expected requirements before processing it.
It is not a library but a fundamental practice in web development
that can be done manually or with the help of libraries like Zod or Yup.

## What is it used for?

Ensuring data integrity before sending it to a server or processing it.
Common use cases:

- Checking that required fields are not empty
- Verifying that an email has the correct format
- Ensuring a password meets minimum length requirements
- Confirming that two password fields match

## Key Concepts

**Client-side validation** — Validation that happens in the browser
before the data is sent to the server. Provides immediate feedback
to the user without a network request.

**Required field** — A field that must have a value before submission.
The simplest and most common validation rule.

**Error state** — A piece of state that holds the error message
for a field. Empty string means no error.

**Early return** — Using `return` inside the validation function
to stop execution when an error is found.

## When to use it?

- Always. Every form that accepts user input should be validated.
- Use manual validation for simple forms with one or two fields.
- Use Zod or Yup for complex forms with many rules.

## When NOT to use manual validation?

- The form has many fields with complex rules → use Zod
- You are already using React Hook Form or Formik → use their built-in validation
- The same validation rules are needed in multiple places → use a schema

## Is it worth learning?

Yes. Understanding manual validation is essential before using
any validation library. Libraries like Zod and Yup are just
structured ways to write the same logic you would write manually.

## Alternatives

| Technology | When to choose it |
|---|---|
| Manual validation (this) | Simple forms, no dependencies |
| Zod | Type-safe schema validation with TypeScript |
| Yup | Schema validation, works well with Formik |
| React Hook Form rules | Built-in validation without extra libraries |

## Manual Validation vs Zod

**Manual validation** uses plain JavaScript if/else statements.
Simple to understand but repetitive for complex forms.
No TypeScript type inference from the validation rules.

**Zod** defines validation rules as a schema.
TypeScript automatically infers the type from the schema.
Less repetitive and easier to reuse across the application.

**Recommendation:** Start with manual validation to understand the concept.
Switch to Zod when the form has many fields or complex rules.

## What does the example in this branch do?

`src/App.tsx` creates a form with one input field.
When the user clicks the button without typing a name,
an error message appears below the input.
When the user types a name and clicks the button,
the error disappears and an alert shows the name.
It demonstrates how to validate a field manually
using only `useState` and an if statement.

## How to run

```bash
git checkout feat/validation
cd pweb-react-investigation
npm install
npm run dev
```

## Official Resources

- [MDN Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)