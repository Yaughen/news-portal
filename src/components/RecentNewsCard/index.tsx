import React, {FC} from "react";
import {Link} from "react-router-dom";
import style from "./style.module.scss";
import moment from 'moment'

export interface RecentNewsCardProps {
    createDate: Date;
    title: string;
}

const RecentNewsCard: FC<RecentNewsCardProps> = ({title, createDate}) =>
    (<div className={style.recent_news}>
            <span className={style.recent_time}> {moment(createDate).format('hh:mm')} </span>
            &nbsp;
            {title}
        </div>
    );

export default RecentNewsCard;