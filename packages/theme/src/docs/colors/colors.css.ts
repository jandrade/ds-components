import { style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { vars } from "../../vars.css";

export const container = style({
    display: "flex",
    flexWrap: "wrap",
    gap: vars.spacing.md,
});

export const colors = styleVariants(vars.color, (token) => ({
    background: token,
    color: vars.color.black,
    display: "flex",
    flexDirection: "column",
    fontSize: vars.typography.fontSize.md,
    justifyContent: "center",
    alignItems: "center",
    height: calc.multiply(vars.spacing.xxxl, 6),
    flexBasis: `calc(20% - ${vars.spacing.md})`,
    borderRadius: 2,
    position: "relative",
    border: `1px solid ${vars.color.gray_200}`,
    boxShadow: vars.shadows.base,
}));

export const caption = style({
    display: "flex",
    justifyContent: "space-between",
    color: vars.color.gray_900,
    background: vars.color.white,
    borderTop: `1px solid ${vars.color.gray_200}`,
    boxShadow: vars.shadows.base,
    position: "absolute",
    bottom: 0,
    padding: vars.spacing.sm,
    width: "100%",
    textAlign: "center",
});

const baseChip = style({
    border: `1px solid ${vars.color.gray_200}`,
    margin: vars.spacing.xxs,
    padding: vars.spacing.xxs,
    fontWeight: 700,
});

export const chip = styleVariants({
    pass: [
        baseChip,
        {
            color: vars.color.green_400,
            ":before": {
                content: "'✔ '",
            },
        },
    ],
    fail: [
        baseChip,
        {
            color: vars.color.red_400,
            ":before": {
                content: "'X '",
            },
        },
    ],
});
