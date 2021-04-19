import React from 'react';
import s from './Search.module.scss';

export default function Search() {
    return (
        <form>
            <input type="search" placeholder="Search for any training you want" className={s.search}></input>
        </form>
    )
}