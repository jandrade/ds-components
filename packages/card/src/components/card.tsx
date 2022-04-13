import React from "react";
import { card } from "./card.css";

export interface CardProps {
    /**
     * The card contents.
     */
    children: React.ReactNode;
}

export function Card(props: CardProps) {
    return <div className={card}>{props.children}</div>;
}
