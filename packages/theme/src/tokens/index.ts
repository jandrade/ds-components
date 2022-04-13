import generatedColors from "./colors";

type Unit = "px" | "rem" | "em";

/**
 *
 * @param n
 * @returns The value converted to pixels
 */
const toUnit = (n: number, unit: Unit = "px") => `${n}${unit}`;

const createLinearScale =
    (ratio: number, base: number, unit?: Unit) => (steps: number) =>
        toUnit(base * ratio * steps, unit);

const createModularScale =
    (ratio: number, base: number, unit?: Unit) => (steps: number) =>
        toUnit(base * ratio ** steps, unit);

/**
 * Colors
 */

export const colors = {
    ...generatedColors,
    white: "#ffffff",
    black: "#000000",
};

export type Colors = Record<keyof typeof colors, string>;

export const shadows = {
    sm: `0 4px 8px 0px ${colors.offBlack_8}`,
};

/**
 * Spacing
 */
const spaceScale = createLinearScale(1, 4);

export const spacing = {
    xxxs: spaceScale(0.5),
    xxs: spaceScale(1),
    xs: spaceScale(2),
    sm: spaceScale(3),
    md: spaceScale(4),
    lg: spaceScale(5),
    xl: spaceScale(6),
    xxl: spaceScale(8),
    xxxl: spaceScale(10),
};

export type Spacing = Record<keyof typeof spacing, string>;

/**
 * Typography
 */
export const font = {
    body: "Lato, sans-serif",
};

const typeScale = createModularScale(1.25, 1, "rem");

export const fontSize = {
    xs: typeScale(0),
    sm: typeScale(0.5),
    md: typeScale(1), // base fontSize
    lg: typeScale(2),
    xl: typeScale(3),
    xxl: typeScale(4),
};

export type FontSize = Record<keyof typeof fontSize, string>;

const lineHeightScale = createModularScale(1.25, 24);

export const lineHeight = {
    xs: lineHeightScale(0),
    sm: lineHeightScale(0.5),
    md: lineHeightScale(1), // base line height
    lg: lineHeightScale(2),
    xl: lineHeightScale(3),
    xxl: lineHeightScale(4),
};

export type LineHeight = Record<keyof typeof lineHeight, string>;

export type Tokens = Colors | Spacing | FontSize | LineHeight;
