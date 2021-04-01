import React, { Fragment } from 'react';
import './button.scss';

class Button extends React.Component {
    buttons = [
        {
            name: 'ЕСТЬ',
            className: 'eat'
        },
        {
            name: 'ПИТЬ',
            className: 'drink'
        },
        {
            name: 'ОТДОХНУТЬ',
            className: 'relax'
        },
        {
            name: 'РАБОТАТЬ',
            className: 'job'
        }
    ]

    render() {
        return (
            <Fragment>
                {this.buttons.map(btn =>
                    <button className={`btn-${btn.className}`}>
                        {btn.name}
                    </button>
                )}
            </Fragment>

        )
    }
}

export default Button;