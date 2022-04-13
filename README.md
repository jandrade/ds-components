# ds-components

The UI component library that is part of a Design System.

## Getting started

Install dependencies:

```
npm i
```

Run Storybook:

```
npm run storybook
```

Build Storybook:

```
npm build-storybook
```

To include package contributions:

```
npx changeset
```

## Technical details

This package uses `npm` workspaces.

To generate new colors in the `theme` package, you can run the following
command:

```
npm run gentokens -w @jandrade/ds-theme
```
