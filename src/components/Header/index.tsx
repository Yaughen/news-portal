import React, {FC} from "react";
import {Link} from "react-router-dom";
import style from './style.module.scss';
import HeaderTags from "../HeaderTags";
import HeaderMenu from "../HeaderMenu";

interface HeaderProps{
    selectedTagId?:string;
    setSelectedTagId:(tagId:string)=>void;
}

const Header: FC<HeaderProps> = ({selectedTagId,setSelectedTagId}) =>
    (<div className={style.header}>
        <div className={style.header__section}>
            <div className={style.header__logo}>
                <img src = {process.env.PUBLIC_URL + '/NewsLogo.svg'} alt="logo"/>
            </div>
            <HeaderTags selectedTagId={selectedTagId} setSelectedTagId={setSelectedTagId}/>
            <HeaderMenu/>
        </div>
    </div>);

export default Header;