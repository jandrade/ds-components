// use `mergeConfig` to recursively merge Vite options
const { mergeConfig } = require("vite");

module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: "@storybook/react",
    core: { builder: "@storybook/builder-vite" },
    async viteFinal(config) {
        return mergeConfig(config, {
            define: {
                global: "window",
            },
        });
    },
    features: {
        storyStoreV7: true,
    },
};
