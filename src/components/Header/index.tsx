import React, {FC} from "react";
import {Link} from "react-router-dom";
import style from './style.module.scss';

const categories = [
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

const Header: FC = () =>
    (<div className={style.header}>
        <div className={style.header__section}>
            <div className={style.header__logo}>
                <img src = {process.env.PUBLIC_URL + '/NewsLogo.svg'} alt="logo"/>
            </div>
            <div className={style.header_buttons}>
                {
                    categories.map(({_id, name, path}) => (
                        <div key={_id} className={style.header__button}>
                            <Link to={path}>{name}</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>);

export default Header;