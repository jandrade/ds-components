import { createThemeContract } from "@vanilla-extract/css";
import { colors, font, fontSize, lineHeight, shadows, spacing } from "./tokens";

function extractKeysForContract(source: Record<string, string | number>) {
    return Object.keys(source).reduce<Record<string, string>>((acc, key) => {
        acc[key] = "";
        return acc;
    }, {});
}

export const vars = createThemeContract({
    color: extractKeysForContract(colors),

    font: extractKeysForContract(font),

    typography: {
        fontSize: extractKeysForContract(fontSize),
        lineHeight: extractKeysForContract(lineHeight),
    },

    spacing: extractKeysForContract(spacing),

    shadows: extractKeysForContract(shadows),
});
