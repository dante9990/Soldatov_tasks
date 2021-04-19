import React from 'react';
import TaskCompleted from './taskCompleted/TaskCompleted';
import TaskOnHold from './taskOnHold/TaskOnHold';
import s from './Tasks.module.scss';

export default function Tasks() {
    return (
        <div className={s.tasks}>
            <div className={s.container}>
                <h1 className={s.title}>You’ve got <span className={s.pinky}>7 task</span> today</h1>
                <button className={s.btn}>Add New</button>
            </div>
            <h2 className={s.tasks_title}>On Hold</h2>
            <TaskOnHold />
            <h2 className={s.tasks_title}>Completed</h2>
            <TaskCompleted />
        </div>
    )
}