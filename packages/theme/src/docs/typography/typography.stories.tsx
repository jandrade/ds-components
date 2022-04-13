import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import * as styles from "../shared/styles.css";
import { fontSize, lineHeight } from "../../tokens";
import type { Tokens } from "../../tokens";

interface TokensTableProps {
    tokenStyle: Tokens;
    tokens: Tokens;
    label?: string;
}

const TokensTable = ({ tokenStyle, tokens, label = "" }: TokensTableProps) => (
    <table className={styles.table}>
        <thead>
            <tr className={styles.header}>
                <th>Name</th>
                <th>Value</th>
                <th>Example</th>
            </tr>
        </thead>
        <tbody>
            {Object.entries(tokens).map(([size, value]) => {
                return (
                    <tr key={size} className={styles.row}>
                        <td>{size}</td>
                        <td>{value}</td>
                        <td>
                            <div className={tokenStyle[size]}>{label}</div>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
);

export default {
    title: "Foundation / Typography",
} as ComponentMeta<typeof TokensTable>;

export const FontSize: ComponentStory<typeof TokensTable> = () => (
    <TokensTable
        tokenStyle={styles.typography}
        tokens={fontSize}
        label="Title text"
    />
);

export const LineHeight: ComponentStory<typeof TokensTable> = () => (
    <TokensTable
        tokenStyle={styles.lineHeight}
        tokens={lineHeight}
        label="Title text"
    />
);
