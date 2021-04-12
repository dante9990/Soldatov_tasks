import React, { useContext } from 'react';
import { ContextApp } from "./../../../reducer";
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
            if(state.HUNGRY <=1) {
                dispatch({
                    type: 'HEALTH',
                    payload: {
                        HEALTH: state.HEALTH + getRandomInRange((-2), 2),
                        HUNGRY: 0,
                    },
                })
            }
            if(state.ENERGY >=99) {
                dispatch({
                    type: 'HEALTH',
                    payload: {
                        HEALTH: state.HEALTH + getRandomInRange((-2), 2),
                        ENERGY: 100
                    },
                }) 
            }
            if(state.HEALTH <= 1) {
                dispatch({
                    type: 'HEALTH',
                    payload: {
                        HEALTH: 0
                    },
                }) 
            }
            if(state.HEALTH >= 99) {
                dispatch({
                    type: 'HEALTH',
                    payload: {
                        HEALTH: 100
                    },
                }) 
            }
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
            if(state.DRINK <= 1) {
                dispatch({
                    type: 'DRINK',
                    payload: {
                        HEALTH: state.HEALTH - getRandomInRange((-1), 1),
                        DRINK: 0,
                    }
                })
            }
            if(state.ENERGY >= 99) {
                dispatch({
                    type: 'DRINK',
                    payload: {
                        HEALTH: state.HEALTH - getRandomInRange((-1), 1),
                        ENERGY: 100
                    }
                })
            }
            if(state.HEALTH <= 1) {
                dispatch({
                    type: 'DRINK',
                    payload: {
                        HEALTH: 0
                    },
                }) 
            }
            if(state.HEALTH >= 99) {
                dispatch({
                    type: 'DRINK',
                    payload: {
                        HEALTH: 100
                    },
                }) 
            }
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
            if(state.DRINK <= 1) {
                dispatch({
                    type: 'ENERGY',
                    payload: {
                        HEALTH: state.HEALTH + getRandomInRange(1, 10),
                        DRINK: 0,
                    }
                })
            }
            if(state.HUNGRY <=1) {
                dispatch({
                    type: 'ENERGY',
                    payload: {
                        HEALTH: state.HEALTH + getRandomInRange(1, 10),
                        HUNGRY: 0,
                    },
                })
            }
            if(state.ENERGY <=1) {
                dispatch({
                    type: 'ENERGY',
                    payload: {
                        HEALTH: state.HEALTH + getRandomInRange(1, 10),
                        ENERGY: 0,
                    },
                })
            }
            if(state.HEALTH <= 1) {
                dispatch({
                    type: 'ENERGY',
                    payload: {
                        HEALTH: 0
                    },
                }) 
            }
            if(state.HEALTH >= 99) {
                dispatch({
                    type: 'ENERGY',
                    payload: {
                        HEALTH: 100
                    },
                }) 
            }
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
            if(state.DRINK >= 99) {
                dispatch({
                    type: 'ENERGY',
                    payload: {
                        DRINK: 100
                        
                    }
                })
            }
            if(state.HUNGRY >= 99) {
                dispatch({
                    type: 'ENERGY',
                    payload: {
                        HUNGRY: 100
                    }
                })
            }
            if(state.ENERGY >= 99) {
                dispatch({
                    type: 'ENERGY',
                    payload: {
                        ENERGY: 100
                    }
                })
            }
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
