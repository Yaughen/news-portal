import React from "react";
import style from './style.module.scss'

export interface HeaderMenuProps {

}

const HeaderMenu: React.FC<HeaderMenuProps> = () => {
    return (
        <div className={style.icons}>
            <img src={process.env.PUBLIC_URL + '/search.png'} alt="search"/>
            <img className={style.HeaderMenuAvatar} src={process.env.PUBLIC_URL + '/unknown.png'} alt="avatar"/>
            <img src={process.env.PUBLIC_URL + '/Group 36.svg'} alt="plus"/>
        </div>);

};

export default HeaderMenu;