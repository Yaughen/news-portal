import React, {FC} from "react";
import {Link} from "react-router-dom";
import style from "./style.module.scss";

export interface TagProps {
    _id: string,
    alias: string,
    name: string,
    color: string
}

const Tag: FC<TagProps> = ({_id, alias, name, color}) =>
    (
        <div className={style.tag} style={{backgroundColor: color}}>
            {name}
        </div>
    );
export default Tag;