import React, {FC} from "react";
import {Link} from "react-router-dom";
import style from ".//style.module.scss";
import Statistics, {StatisticsProps} from "../Statistics";
import Tag, {TagProps} from "../Tag";

export interface HotNewsCardProps {
    _id: string,
    img: string,
    tag: TagProps
    title: string,
    statistics: StatisticsProps

}

const HotNewsCard: FC<HotNewsCardProps> = ({img, title,statistics, tag}) =>
    (<div className={style.hot}>
        <img className={style.hot__image} src={img} alt="img"/>
            <Tag {...tag}/>
        <div className={style.hot__text}> {title} </div>
        <Statistics {...statistics}/>
    </div>
);

export default HotNewsCard;