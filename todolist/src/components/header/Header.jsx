import React from 'react';
import s from './Header.module.scss';
import Search from './search/Search';
import User from './user/User';

export default function Header() {
    return (
        <header className={s.header}>
            <Search/>
            <User/>
        </header>
    )
}