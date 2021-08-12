import React from "react";
import BigNewsCard, {BigNewsCardProps} from "../BigNewsCard";
import style from "./style.module.scss"

export interface BigNewsColumnProps {
    items: BigNewsCardProps[]
}

const BigNewsColumn: React.FC<BigNewsColumnProps> = ({items}) =>
    (
        <div className={style.mainNewsContainer}>
            {items.map(n => <BigNewsCard key={n._id} {...n}/>)}
        </div>
    );
export default BigNewsColumn