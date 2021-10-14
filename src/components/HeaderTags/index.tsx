import style from "./style.module.scss";
import {Link} from "react-router-dom";
import React from "react";
import classNames from 'classnames';

const tags = [
    {
        name: 'Новости',
        _id: '1',
        path: '',
    },
    {
        name: 'Финансы',
        _id: '2',
        path: '',
    },
    {
        name: 'Недвижимость',
        _id: '3',
        path: '',
    },
    {
        name: 'Спорт',
        _id: '4',
        path: '',
    },
    {
        name: 'Афиша',
        _id: '5',
        path: '',
    },
    {
        name: 'Магазины',
        _id: '6',
        path: '',
    },
    {
        name: 'Работа',
        _id: '7',
        path: '',
    },
    {
        name: 'ТВ-программа',
        _id: '8',
        path: '',
    },
    {
        name: 'Почта',
        _id: '9',
        path: '',
    },
    {
        name: 'Погода',
        _id: '10',
        path: '',
    },
];


export interface HeaderTagsProps {
    selectedTagId?: string;
    setSelectedTagId: (tagId: string) => void;
}

const HeaderTags: React.FC<HeaderTagsProps> = ({selectedTagId, setSelectedTagId}) => {
    return (
        <div className={style.header_buttons}>
            {
                tags.map(({_id, name, path}) => (
                    <div key={_id} className={classNames({
                        [style.header__button]: true,
                        [style.selected_tag]: _id === selectedTagId
                    })}>
                        <span onClick={()=>setSelectedTagId(_id)}>{name}</span>
                    </div>
                ))
            }
        </div>);
}

export default HeaderTags;