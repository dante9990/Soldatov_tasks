import React from 'react';
import s from './TaskOnHold.module.scss';

export default function TaskOnHold() {
    return (
        <div>
            <div className={s.task}>
                <p className={s.task_text}>Evaluate the addition and deletion of user IDs.</p>
                <label htmlFor="5" >
                    <input type="checkbox" name="status" id="5" className={s.input} />
                    <div className={s.btn_status}>Pending</div>
                </label>
                <span>minor</span>
            </div>
            <div className={s.task}>
                <p className={s.task_text}>Evaluate the addition and deletion of user IDs.</p>
                <label htmlFor="6" >
                    <input type="checkbox" name="status" id="6" className={s.input} />
                    <div className={s.btn_status}>Pending</div>
                </label>
                <span>minor</span>
            </div>
            <div className={s.task}>
                <p className={s.task_text}>Evaluate the addition and deletion of user IDs.</p>
                <label htmlFor="7" >
                    <input type="checkbox" name="status" id="7" className={s.input} />
                    <div className={s.btn_status}>Pending</div>
                </label>
                <span>minor</span>
            </div>
            <div className={s.task}>
                <p className={s.task_text}>Evaluate the addition and deletion of user IDs.</p>
                <label htmlFor="8" >
                    <input type="checkbox" name="status" id="8" className={s.input} />
                    <div className={s.btn_status}>Pending</div>
                </label>
                <span>minor</span>
            </div>
        </div>

    )
}