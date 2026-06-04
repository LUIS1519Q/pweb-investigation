# React Hook Form

## What is it?

React Hook Form is a library for managing forms in React.
It uses refs instead of state to track input values,
which means fewer re-renders and better performance.

## What is it used for?

Handling form values, validation, and submission with minimal code.
Common use cases:

- Login and registration forms
- Multi-field forms with validation
- Forms that submit data to an API
- Any form where performance matters

## Key Concepts

**useForm** — The main hook. Returns everything needed
to manage the form: register, handleSubmit, formState.

**register** — Connects an input to the form.
Accepts validation rules like required, minLength, pattern.

**handleSubmit** — Validates all fields before calling onSubmit.
If validation fails, onSubmit is never called.

**formState.errors** — Object that holds error messages
for each field that failed validation.

**isSubmitting** — Boolean that is true while the form is submitting.
Useful for disabling the submit button during processing.

**reset** — Clears all form fields back to their initial values.

## When to use it?

- Any form with more than one field
- Forms that need validation before submission
- Forms that send data to an API

## When NOT to use it?

- A single uncontrolled input with no validation
- You are already using Formik in an existing project

## Is it worth learning?

Yes. React Hook Form is the most popular form library in React today.
It has replaced Formik in most new projects due to its simplicity
and performance. It is a must-know for any React developer.

## Alternatives

| Technology | When to choose it |
|---|---|
| React Hook Form (this) | New projects, performance, simplicity |
| Formik | Legacy projects, already in use |
| Manual useState | Single input, no validation needed |

## React Hook Form vs Formik

**React Hook Form** uses refs so the component does not
re-render on every keystroke. Less code, better performance.

**Formik** uses state so the component re-renders on every keystroke.
More explicit but slower for large forms.

**Recommendation:** Use React Hook Form for all new projects.
Use Formik only if the project already has it installed.

## What does the example in this branch do?

`src/App.tsx` creates a form with one input field.
If the user submits without typing a name, an error message appears.
If the user types a name and submits, an alert shows the name.
It demonstrates how `register`, `handleSubmit` and `errors` work together.

## How to run

```bash
git checkout feat/react-hook-form
cd pweb-react-investigation
npm install
npm run dev
```

## Official Resources

- [React Hook Form Documentation](https://react-hook-form.com)
- [Get Started](https://react-hook-form.com/get-started)
- [useForm API](https://react-hook-form.com/api/useform)