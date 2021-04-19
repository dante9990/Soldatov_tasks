import React from 'react';
import s from './Comments.module.scss';

export default function Comments() {
    return (
        <div className={s.comments}>
            <div className={s.comment}>
                <img src="https://prvera.ru/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" alt="avatar" className={s.avatar} />
                <span className={s.username}>Alena Curtis</span>
                <span className={s.time}>Just now</span>
                <p className={s.comment_text}>Planning for new event at Sydney room for new project on 14:00 PM</p>
            </div>
            <div className={s.comment}>
                <img src="https://prvera.ru/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" alt="avatar" className={s.avatar} />
                <span className={s.username}>Alena Curtis</span>
                <span className={s.time}>Just now</span>
                <p className={s.comment_text}>Planning for new event at Sydney room for new project on 14:00 PM</p>
            </div>
            <div className={s.comment}>
                <img src="https://prvera.ru/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" alt="avatar" className={s.avatar} />
                <span className={s.username}>Alena Curtis</span>
                <span className={s.time}>Just now</span>
                <p className={s.comment_text}>Planning for new event at Sydney room for new project on 14:00 PM</p>
            </div>
            <div className={s.comment}>
                <img src="https://prvera.ru/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" alt="avatar" className={s.avatar} />
                <span className={s.username}>Alena Curtis</span>
                <span className={s.time}>Just now</span>
                <p className={s.comment_text}>Planning for new event at Sydney room for new project on 14:00 PM</p>
            </div>
        </div>
    )
}