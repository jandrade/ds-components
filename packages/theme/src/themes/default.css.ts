import { createTheme } from "@vanilla-extract/css";
import { vars } from "../vars.css";
import { colors, fontSize, lineHeight, shadows, spacing } from "../tokens";
import { ThemeContract } from "../tokens/schema";

const lightTheme: ThemeContract = {
    name: "light",
    typography: {
        font: {
            body: "Lato, sans-serif",
        },
        fontWeight: {
            regular: "400",
            medium: "500",
            strong: "700",
        },
        fontSize: fontSize,
        lineHeight: lineHeight,
    },

    spacing: spacing,

    color: {
        text: {
            body: colors.gray_1000,
            bodyInverted: colors.white,
            primary: colors.blue_400,
            primaryLight: colors.blue_100,
            secondary: colors.purple_400,
            secondaryLight: colors.purple_400,
            positive: colors.green_400,
            negative: colors.red_400,
            warning: colors.yellow_400,
            neutral: colors.gray_400,
        },
        background: {
            body: colors.gray_100,
            primary: colors.blue_400,
            primaryLight: colors.blue_100,
            secondary: colors.purple_400,
            secondaryLight: colors.purple_200,
            positive: colors.green_400,
            negative: colors.red_400,
            warning: colors.yellow_400,
            neutral: colors.gray_900,
        },
        border: {
            body: colors.gray_200,
            primary: colors.blue_500,
            primaryLight: colors.blue_500,
            secondary: colors.purple_500,
            secondaryLight: colors.purple_500,
            positive: colors.green_500,
            negative: colors.red_500,
            warning: colors.yellow_500,
            neutral: colors.gray_500,
        },
    },

    shadows,
};

export default createTheme(vars, lightTheme);
