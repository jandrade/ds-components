import { ComponentStory } from "@storybook/react";
import React from "react";
import * as styles from "../shared/styles.css";
import { spacing } from "../../tokens";

export default {
    title: "Foundation / Spacing",
};

const SpacingTable = () => (
    <table className={styles.table}>
        <thead>
            <tr className={styles.header}>
                <th>Name</th>
                <th>Value</th>
                <th>Example</th>
            </tr>
        </thead>
        <tbody>
            {Object.entries(spacing).map(([size, value]) => {
                return (
                    <tr key={size} className={styles.row}>
                        <td>{size}</td>
                        <td>{value}</td>
                        <td>
                            <div className={styles.spacing[size]}></div>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
);

export const Spacing: ComponentStory<typeof SpacingTable> = () => (
    <SpacingTable />
);
