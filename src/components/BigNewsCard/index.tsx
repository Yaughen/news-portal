import React, {FC} from "react";
import {Link} from "react-router-dom";
import style from './style.module.scss';
import Statistics, {StatisticsProps} from "../Statistics";
import Tag, {TagProps} from "../Tag";
import moment from "moment";
import 'moment/locale/ru'

export interface BigNewsCardProps {
    _id: string;
    img: string;
    title: string;
    description: string;
    createDate: Date;
    statistics: StatisticsProps;
    tag: TagProps

}
moment.locale('ru')

const BigNewsCard: FC<BigNewsCardProps> = ({img, title, description, createDate, statistics, tag}) =>
    (<div className={style.news__article}>
        <img className={style.article__image} src={img} alt="img"/>
        <div className={style.article__characteristics}>
            <Tag {...tag}/>
            <div
                className={`${style.article__date} ${style.item}`}>{moment(createDate).format('DD MMMM yyyy в hh:mm')}</div>
            <Statistics {...statistics}/>
        </div>
        <div className={style.article__title}>{title}</div>
        <div className={style.article__text}>{description}</div>
    </div>);

export default BigNewsCard;