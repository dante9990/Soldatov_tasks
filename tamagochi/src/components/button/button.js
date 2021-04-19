import React, { useContext } from 'react';
import { ContextApp } from "./../../reducer";
import './button.scss';

export default function Button() {

    function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


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
            tp: 'ENERGY'
        },
        {
            id: '4',
            name: 'РАБОТАТЬ',
            className: 'job',
            tp: 'JOB'
        }
    ]

    const { state, dispatch } = useContext(ContextApp);

    let onClick = (btn) => {
        
        //событие при нажатии на кнопку "ЕСТЬ"
        if (btn.target.id === 'HEALTH') {
            dispatch({
                type: 'HEALTH',
                payload: {
                    HEALTH: state.HEALTH + getRandomInRange((-2), 2),
                    HUNGRY: state.HUNGRY - 10,
                    ENERGY: state.ENERGY + 10
                },
            });
        } 
        //событие при нажатии на кнопку "ПИТЬ"
        if (btn.target.id === 'DRINK') {
            dispatch({
                type: 'DRINK',
                payload: {
                    HEALTH: state.HEALTH - getRandomInRange((-1), 1),
                    DRINK: state.DRINK - 10,
                    ENERGY: state.ENERGY + 10
                }
            })
        }
        //событие при нажатии на кнопку "ОТДОХНУТЬ"
        if (btn.target.id === 'ENERGY') {
            dispatch({
                type: 'ENERGY',
                payload: {
                    HEALTH: state.HEALTH + getRandomInRange(1, 10),
                    DRINK: state.DRINK - 10,
                    HUNGRY: state.HUNGRY - 10,
                    ENERGY: state.ENERGY - 10
                }
            })
        }
        //событие при нажатии на кнопку "РАБОТАТЬ"
        if (btn.target.id === 'JOB') {
            dispatch({
                type: 'ENERGY',
                payload: {
                    DRINK: state.DRINK + getRandomInRange(30, 40),
                    HUNGRY: state.HUNGRY + getRandomInRange(30, 40),
                    ENERGY: state.ENERGY + 20
                }
            })
        }
        // dispatch({
        //     type: btn.target.id,
        //     payload: {
        //         [btn.target.id]: state[btn.target.id] - 10
        //     }
        // })
    }


    return (
        buttons.map(btn =>
            <button className={`btn-${btn.className}`} key={btn.id} id={btn.tp} onClick={onClick}>
                {btn.name}
            </button>

        )

    )
}
