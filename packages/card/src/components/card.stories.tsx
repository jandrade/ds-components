import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Card } from "./card";

export default {
    title: "Components / Card",
    component: Card,
} as ComponentMeta<typeof Card>;

type Story = ComponentStoryObj<typeof Card>;

export const Default: Story = { args: { children: "This is a card" } };
