import { createThemeContract } from "@vanilla-extract/css";
import { colors, spacing } from "./tokens";

export const vars = createThemeContract({
    name: "default",
    typography: {
        font: {
            body: "Lato, sans-serif",
        },
        fontWeight: {
            regular: "400",
            medium: "500",
            strong: "700",
        },
        fontSize: {
            xs: "0.75rem",
            sm: "1rem",
            md: "1rem", // base fontSize
            lg: "1.25rem",
            xl: "1.5rem",
            xxl: "1.75rem",
        },
        lineHeight: {
            xs: "1.25rem",
            sm: "1.5rem",
            md: "1.5rem", // base line height
            lg: "1.75rem",
            xl: "2rem",
            xxl: "2.25rem",
        },
    },

    spacing: spacing,

    color: {
        text: {
            body: colors.gray_900,
            bodyInverted: colors.white,
            primary: colors.blue_400,
            primaryLight: "",
            secondaryLight: "",
            secondary: colors.purple_400,
            positive: colors.green_400,
            negative: colors.red_400,
            warning: colors.yellow_400,
            neutral: colors.gray_400,
        },
        background: {
            body: colors.gray_100,
            primary: colors.blue_400,
            primaryLight: "",
            secondaryLight: "",
            secondary: colors.purple_400,
            positive: colors.green_400,
            negative: colors.red_400,
            warning: colors.yellow_400,
            neutral: colors.gray_400,
        },
        border: {
            body: colors.gray_500,
            primary: colors.blue_500,
            primaryLight: "",
            secondaryLight: "",
            secondary: colors.purple_500,
            positive: colors.green_500,
            negative: colors.red_500,
            warning: colors.yellow_500,
            neutral: colors.gray_500,
        },
    },

    shadows: {
        sm: `0 4px 8px 0px ${colors.gray_900}`,
        md: `0 8px 16px 0px ${colors.gray_900}`,
        lg: `0 16px 32px 0px ${colors.gray_900}`,
    },
});
