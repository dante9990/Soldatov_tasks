import React, { useContext } from 'react';
import { ContextApp } from "./../../../reducer";
import './button.scss';

export default function Button() {


    let buttons = [
        {
            id: '1',
            name: 'ЕСТЬ',
            className: 'eat',
            tp: 'HEALTH'
        },
        {
            id: '2',
            name: 'ПИТЬ',
            className: 'drink',
            tp: 'DRINK'
        },
        {
            id: '3',
            name: 'ОТДОХНУТЬ',
            className: 'relax',
            tp: 'RELAX'
        },
        {
            id: '4',
            name: 'РАБОТАТЬ',
            className: 'job',
            tp: 'JOB'
        }
    ]

    const { state, dispatch } = useContext(ContextApp);
    let tempType = 0;

    let onClick  = (btn) => 
        
        dispatch({
            type: btn.target.id,
            payload: {
                [btn.target.id]: state[btn.target.id] - 10
            }
        })
    
    
    return (
        buttons.map(btn =>
            <button className={`btn-${btn.className}`} key={btn.id} id={btn.tp} onClick={onClick}>
                {btn.name}
            </button>
            
        )

    )
}
