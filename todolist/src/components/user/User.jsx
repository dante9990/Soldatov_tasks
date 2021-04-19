import React from 'react';
import s from './User.module.scss';

export default function User() {
    return (
        <div className={s.user}>
            <div className={s.vector}></div>
            <img src="https://prvera.ru/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" alt="avatar" className={s.avatar} />
        </div>
    )
}