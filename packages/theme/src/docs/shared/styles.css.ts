import { globalStyle, style, styleVariants } from "@vanilla-extract/css";

import { vars } from "../../vars.css";

/**
 * Table styles.
 */
export const table = style({
    background: vars.color.white,
    fontSize: vars.typography.fontSize.md,
    margin: vars.spacing.xxs,
    textAlign: "left",
    width: "100%",
});

export const header = style({
    background: vars.color.gray_800,
    color: vars.color.white,
    boxShadow: vars.shadows.base,
});

globalStyle(`${header} th`, {
    padding: vars.spacing.sm,
});

export const row = style({
    boxShadow: vars.shadows.base,
    margin: vars.spacing.sm,
});

globalStyle(`${row} td`, {
    padding: vars.spacing.sm,
});

/**
 * Tokens helpers.
 */
export const spacing = styleVariants(vars.spacing, (token) => ({
    width: token,
    height: vars.spacing.lg,
    background: vars.color.purple_400,
}));

export const typography = styleVariants(vars.typography.fontSize, (token) => ({
    fontSize: token,
}));

export const lineHeight = styleVariants(
    vars.typography.lineHeight,
    (token) => ({
        background: vars.color.yellow_200,
        paddingLeft: vars.spacing.xs,
        paddingRight: vars.spacing.xs,
        lineHeight: token,
    }),
);
