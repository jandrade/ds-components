import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import chroma from "chroma-js";

import * as styles from "./colors.css";
import { colors } from "../../tokens";

const ColorsTable = () => (
    <div className={styles.container}>
        {Object.entries(colors).map(([size, value]) => {
            let contrastRatio = chroma.contrast(value, "black");
            let passesAA = contrastRatio > 4.5;
            let passesAAA = contrastRatio > 7;
            const result = (isValid: boolean) => (isValid ? "pass" : "fail");

            let style = undefined;

            if (!passesAA) {
                style = { color: "white" };
                contrastRatio = chroma.contrast(value, "white");
                passesAA = contrastRatio > 4.5;
                passesAAA = contrastRatio > 7;
            }

            return (
                <div key={value} className={styles.colors[size]} style={style}>
                    <b>{size}</b>
                    <span>{value}</span>

                    <div className={styles.caption}>
                        <div>
                            <strong className={styles.chip[result(passesAA)]}>
                                AA
                            </strong>
                            <strong className={styles.chip[result(passesAAA)]}>
                                AAA
                            </strong>
                        </div>
                        {contrastRatio.toFixed(2)}
                    </div>
                </div>
            );
        })}
    </div>
);

export default {
    title: "Foundation / Colors",
} as ComponentMeta<typeof ColorsTable>;

export const Colors: ComponentStory<typeof ColorsTable> = () => <ColorsTable />;
