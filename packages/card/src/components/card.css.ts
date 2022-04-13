import { style } from "@vanilla-extract/css";

import { vars } from "@jandrade/ds-theme";

export const card = style({
    display: "flex",
    background: vars.color.background.primary,
    borderRadius: 12,
    color: vars.color.text.body,
    padding: vars.spacing.xxl,

    border: "1px solid rgba(255, 255, 255, 0.16)",
    boxShadow: vars.shadows.lg,
});
