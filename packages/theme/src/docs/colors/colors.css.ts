import { style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { vars } from "../../vars.css";
import { colors } from "../../tokens";

export const container = style({
    display: "flex",
    flexWrap: "wrap",
    gap: vars.spacing.md,
});

export const colorsList = styleVariants(colors, (token) => ({
    background: token,
    color: vars.color.text.body,
    display: "flex",
    flexDirection: "column",
    fontSize: vars.typography.fontSize.md,
    justifyContent: "center",
    alignItems: "center",
    height: calc.multiply(vars.spacing.xxxl, 6),
    flexBasis: `calc(20% - ${vars.spacing.md})`,
    borderRadius: 2,
    position: "relative",
    border: `1px solid ${vars.color.border.neutral}`,
    boxShadow: vars.shadows.sm,
}));

export const caption = style({
    display: "flex",
    justifyContent: "space-between",
    color: vars.color.text.body,
    background: vars.color.background.body,
    borderTop: `1px solid ${vars.color.background.body}`,
    boxShadow: vars.shadows.sm,
    position: "absolute",
    bottom: 0,
    padding: vars.spacing.sm,
    width: "100%",
    textAlign: "center",
});

const baseChip = style({
    border: `1px solid ${vars.color.border.primary}`,
    margin: vars.spacing.xxs,
    padding: vars.spacing.xxs,
    fontWeight: 700,
});

export const chip = styleVariants({
    pass: [
        baseChip,
        {
            color: vars.color.text.positive,
            ":before": {
                content: "'✔ '",
            },
        },
    ],
    fail: [
        baseChip,
        {
            color: vars.color.text.negative,
            ":before": {
                content: "'X '",
            },
        },
    ],
});
