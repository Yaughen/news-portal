import React, {FC} from "react";
import style from "./style.module.scss";

export interface SmallColumnProps {
    title: string;
}

const SmallNewsColumn: FC<SmallColumnProps> = ({title, children}) => (
    <div className={style.SmallNewsColumn}>
        <h3 className={style.title}>{title}</h3>
        <div>
            {children}
        </div>
    </div>
);
export default SmallNewsColumn