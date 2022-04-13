import { recipe } from "@vanilla-extract/recipes";

import { vars } from "@jandrade/ds-theme";

export const heading = recipe({
    base: {
        fontFamily: vars.typography.font.body,
        fontWeight: vars.typography.fontWeight.regular,
        lineHeight: vars.typography.lineHeight.md,
        color: vars.color.text.body,
    },

    variants: {
        level: {
            1: {
                marginTop: 0,
                fontSize: vars.typography.fontSize.xxl,
                lineHeight: vars.typography.lineHeight.xxl,
            },
            2: {
                fontSize: vars.typography.fontSize.xl,
                lineHeight: vars.typography.lineHeight.xl,
            },
            3: {
                fontSize: vars.typography.fontSize.lg,
                lineHeight: vars.typography.lineHeight.lg,
            },
            4: {
                fontSize: vars.typography.fontSize.md,
                lineHeight: vars.typography.lineHeight.md,
            },
            5: {
                fontSize: vars.typography.fontSize.sm,
                lineHeight: vars.typography.lineHeight.sm,
            },
            6: {
                fontSize: vars.typography.fontSize.xs,
                lineHeight: vars.typography.lineHeight.xs,
            },
        },
    },
});
