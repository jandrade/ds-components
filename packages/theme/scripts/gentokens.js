import fs from "fs";
import path from "path";
import process from "process";
import prettier from "prettier";
//import { lighten, rgba, toHex } from "color2k";
import chroma from "chroma-js";

const tokensFile = await fs.promises.readFile(
    new URL("./tokens/colors.json", import.meta.url),
);

const tokens = JSON.parse(tokensFile);

const generateColorPalettes = (source, colors) => {
    Object.entries(source.colors).map(([name, value]) => {
        const lightColor = chroma(value).luminance(0.85);
        const SCALE_DELTA = 100;

        const colorScale = chroma
            .scale([lightColor, value])
            .correctLightness(true)
            .colors(source.steps);

        colorScale.forEach((c, i) => {
            colors[`${name}_${(i + 1) * SCALE_DELTA}`] = c;
        });

        const darkColor = chroma(value).darken(0.5).hex();

        // Add an extra color (useful for pressed states)
        colors[`${name}_${(source.steps + 1) * SCALE_DELTA}`] = darkColor;
    });
};

const generateColors = (source) => {
    const colors = {};

    // Primary colors
    generateColorPalettes(source.primary, colors);
    // Gray colors
    generateColorPalettes(source.neutral, colors);

    Object.entries(source.shadings.colors).map(([name, value]) => {
        Object.entries(source.shadings.alphas).map(([key, alpha]) => {
            colors[`${name}_${key}`] = chroma(value).alpha(alpha).hex();
        });
    });

    return colors;
};

const colors = generateColors(tokens);

try {
    const filename = path.join(process.cwd(), "src", "tokens", "colors.ts");

    const options = await prettier.resolveConfig.sync(
        path.join(process.cwd(), ".prettierrc"),
    );

    const output = prettier.format(
        `export default ${JSON.stringify(colors, null, 4)}`,
        { ...options, parser: "typescript" },
    );

    fs.writeFileSync(filename, output);
} catch (err) {
    console.error(err);
}
