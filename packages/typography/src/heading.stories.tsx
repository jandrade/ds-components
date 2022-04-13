import React from "react";

import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Heading, HeadingLevel } from "./heading";

import { vars } from "@jandrade/ds-theme";

export default {
    title: "Components / Typography / Heading",
    component: Heading,
    args: {
        level: 2,
    },
} as ComponentMeta<typeof Heading>;

type Story = ComponentStoryObj<typeof Heading>;

export const Default: Story = { args: { children: "This is the main title" } };

export const AllLevels = () =>
    new Array(6).fill(null).map((_, i) => {
        const level = (i + 1) as HeadingLevel;
        // if (level === 2) {
        //     return null;
        // }
        return (
            <div
                key={i}
                style={{ background: vars.color.background.secondaryLight }}
            >
                <Heading level={level}>Heading {i + 1}</Heading>
            </div>
        );
    });

AllLevels.parameters = {
    docs: {
        description: {
            story: "Headings are used as the titles of each major section of a page. Below you can see all the different heading levels available.",
        },
    },
};
