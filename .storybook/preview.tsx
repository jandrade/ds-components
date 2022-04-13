import defaultTheme from "@jandrade/ds-theme/src/themes/default.css";

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

export const decorators = [
    (Story) => <div className={defaultTheme}>{Story()}</div>,
];
