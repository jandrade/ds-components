// use `mergeConfig` to recursively merge Vite options
const { mergeConfig } = require("vite");
const { vanillaExtractPlugin } = require("@vanilla-extract/vite-plugin");

module.exports = {
    stories: [
        "../packages/**/*.stories.mdx",
        "../packages/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-a11y",
    ],
    framework: "@storybook/react",
    core: { builder: "@storybook/builder-vite" },
    async viteFinal(config) {
        return mergeConfig(config, {
            // Integrate vanilla-extract with Storybook preview (using the vite
            // builder)
            plugins: [vanillaExtractPlugin()],
        });
    },
    features: {
        storyStoreV7: true,
    },
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            shouldRemoveUndefinedFromOptional: true,
            shouldExtractLiteralValuesFromEnum: true,
            compilerOptions: {
                allowSyntheticDefaultImports: true,
                esModuleInterop: true,
            },
        },
    },
};
