import { createTheme } from "@vanilla-extract/css";
import { vars } from "../vars.css";
import {
    font,
    fontSize,
    spacing,
    lineHeight,
    colors,
    shadows,
} from "../tokens";

export default createTheme(vars, {
    color: colors,

    font: font,

    typography: {
        fontSize: fontSize,
        lineHeight: lineHeight,
    },

    spacing: spacing,

    shadows: shadows,
});
