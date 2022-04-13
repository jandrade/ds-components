import React, { ElementType } from "react";

import { heading } from "./heading.css";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
    /**
     * Heading content.
     */
    children: React.ReactNode;
    /**
     * The heading level. From 1 to 6.
     */
    level?: HeadingLevel;
}

/**
 * A heading component used to create various levels of typographic hierarchies.
 *
 * ## Usage
 *
 * ```jsx
 * import {Heading} from "ds-typography";
 *
 * <Heading level={1}>This is the main title</Heading>
 * ```
 */
export function Heading({ children, level = 2 }: HeadingProps) {
    const HeadingTag = `h${level}` as ElementType;
    return <HeadingTag className={heading({ level })}>{children}</HeadingTag>;
}
