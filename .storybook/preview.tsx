import defaultTheme from "@jandrade/ds-theme/src/themes/default.css";
// import darkTheme from "@jandrade/ds-theme/src/themes/dark.css";

const theme = defaultTheme;

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: {
            order: ["Foundation", "Components"],
        },
    },
};

export const decorators = [(Story) => <div className={theme}>{Story()}</div>];
