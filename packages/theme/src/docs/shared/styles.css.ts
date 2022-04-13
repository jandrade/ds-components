import { globalStyle, style, styleVariants } from "@vanilla-extract/css";

import { vars } from "../../vars.css";

/**
 * Table styles.
 */
export const table = style({
    background: vars.color.background.body,
    fontSize: vars.typography.fontSize.md,
    margin: vars.spacing.xxs,
    textAlign: "left",
    width: "100%",
});

export const header = style({
    background: vars.color.background.neutral,
    color: vars.color.text.bodyInverted,
    boxShadow: vars.shadows.sm,
});

globalStyle(`${header} th`, {
    padding: vars.spacing.sm,
});

export const row = style({
    margin: vars.spacing.sm,
});

globalStyle(`${row} td`, {
    borderBottom: `1px solid ${vars.color.border.neutral}`,
    padding: vars.spacing.sm,
});

/**
 * Tokens helpers.
 */
export const spacing = styleVariants(vars.spacing, (token) => ({
    width: token,
    height: vars.spacing.lg,
    background: vars.color.background.secondary,
}));

export const typography = styleVariants(vars.typography.fontSize, (token) => ({
    fontSize: token,
}));

export const lineHeight = styleVariants(
    vars.typography.lineHeight,
    (token) => ({
        background: vars.color.background.secondaryLight,
        paddingLeft: vars.spacing.xs,
        paddingRight: vars.spacing.xs,
        lineHeight: token,
    }),
);
