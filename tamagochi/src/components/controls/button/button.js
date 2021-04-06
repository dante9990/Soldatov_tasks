import React, { Fragment } from 'react';
import './button.scss';

class Button extends React.Component {
    buttons = [
        {
            id: '1',
            name: 'ЕСТЬ',
            className: 'eat',
            click: 'кликнули по еде'
        },
        {
            id: '2',
            name: 'ПИТЬ',
            className: 'drink',
            click: 'кликнули по питью'
        },
        {
            id: '3',
            name: 'ОТДОХНУТЬ',
            className: 'relax',
            click: 'кликнули по отдыху'
        },
        {
            id: '4',
            name: 'РАБОТАТЬ',
            className: 'job',
            click: 'кликнули по работе'
        }
    ]

    render() {
        return (
            <Fragment>
                {this.buttons.map(btn =>
                    <button className={`btn-${btn.className}`} key={btn.id}>
                        {btn.name}
                    </button>
                )}
            </Fragment>

        )
    }
}

export default Button;