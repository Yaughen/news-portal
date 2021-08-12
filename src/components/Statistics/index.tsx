import React, {FC} from "react";
import {Link} from "react-router-dom";
import style from './style.module.scss';
import makeRounding from "../../helpers/makeRounding";

export interface StatisticsProps {
    likes: number,
    comments: number
}

const Statistics: FC<StatisticsProps> = ({likes, comments}) =>
    (<div className={style.statistics}>
        <div className={style.statistics__number}>
            <img className={style.statistics__img} src={process.env.PUBLIC_URL + '/like.svg'} alt="img"/>
            {makeRounding(likes)}
        </div>
        <div className={style.statistics__number}>
            <img className={style.statistics__img} src={process.env.PUBLIC_URL + '/comment.svg'} alt="img"/>
            {makeRounding(comments)}
        </div>
    </div>);
export default Statistics;