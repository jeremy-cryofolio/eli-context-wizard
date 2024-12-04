# Eli Context Wizard Demo

- This is a quick demo of how to use React's Context API to share state across wizard steps.
- There was some discussion about doing this during my interview with Santiago & Dante, but we ran out of time trying to figure out a bug with the Provider implementation.
- In the real world, we'd probably use a better approach to state management, as well as saving the user's progress to the backend when they move through each step.
- This example isn't intended to be a perfect or comprehensive solution - there's a lot of room for improvement, refactoring, reuse, error handling, testing, etc.

## Table of Contents

- [Scripts](#scripts)
- [Folders](#folders)
- [Technologies](#technologies)
  - [Runtime](#runtime)
  - [Development](#development)

## Scripts

| Cmd          | Description                            |
| ------------ | -------------------------------------- |
| `bun dev`    | Runs the app in development mode       |
| `bun prod`   | Builds a production version of the app |
| `bun start`  | Runs a production version of the app   |
| `bun lint`   | Runs ESLint and fixes any errors       |
| `bun format` | Runs Prettier and fixes any errors     |

## Folders

| Folder                    | Description                               |
| ------------------------- | ----------------------------------------- |
| [app](/app)               | The app's main layouts, pages, and routes |
| [components](/components) | Reusable components                       |
| [lib](/lib)               | Reusable utility functions                |
| [providers](/providers)   | React contexts and providers              |

## Technologies

### Runtime

| Category          | Technology                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Framework         | [NextJS 15](https://nextjs.org/docs)                                                                                            |
| UI Library        | [Shadcn UI](https://ui.shadcn.com/)                                                                                             |
| Styling           | [Tailwind](https://tailwindcss.com/)                                                                                            |
| Animations        | [Tailwind CSS Motion](https://rombo.co/tailwind) and [Tailwind CSS Animate](https://github.com/jamiebuilds/tailwindcss-animate) |
| Form Library      | [React Hook Form](https://react-hook-form.com/)                                                                                 |
| Schema Validation | [Zod](https://zod.dev)                                                                                                          |

### Development

| Category             | Technology                                                                                                                                                     |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Package Manager      | [Bun](https://bun.sh/docs/cli/install)                                                                                                                         |
| Linting & Formatting | [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) w/ [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) |
| Pre-Commit Hooks     | [Lefthook](https://github.com/evilmartians/lefthook)                                                                                                           |
