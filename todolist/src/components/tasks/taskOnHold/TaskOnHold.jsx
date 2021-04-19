import React from 'react';
import s from './TaskOnHold.module.scss';

export default function TaskOnHold() {
    return (
        <div>
            <div className={s.task}>
                <p className={s.task_text}>Evaluate the addition and deletion of user IDs.</p>
                <label htmlFor="1" >
                    <input type="checkbox" name="status" id="1" className={s.input} />
                    <div className={s.btn_status}>Pending</div>
                </label>
                <span>minor</span>
            </div>
            <div className={s.task}>
                <p className={s.task_text}>Evaluate the addition and deletion of user IDs.</p>
                <label htmlFor="2" >
                    <input type="checkbox" name="status" id="2" className={s.input} />
                    <div className={s.btn_status}>Pending</div>
                </label>
                <span>minor</span>
            </div>
            <div className={s.task}>
                <p className={s.task_text}>Evaluate the addition and deletion of user IDs.</p>
                <label htmlFor="3" >
                    <input type="checkbox" name="status" id="3" className={s.input} />
                    <div className={s.btn_status}>Pending</div>
                </label>
                <span>minor</span>
            </div>
            <div className={s.task}>
                <p className={s.task_text}>Evaluate the addition and deletion of user IDs.</p>
                <label htmlFor="4" >
                    <input type="checkbox" name="status" id="4" className={s.input} />
                    <div className={s.btn_status}>Pending</div>
                </label>
                <span>minor</span>
            </div>
        </div>

    )
}