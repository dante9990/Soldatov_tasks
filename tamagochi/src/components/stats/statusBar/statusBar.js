import React, { Fragment } from 'react';
import './statusBar.scss';

class StatusBar extends React.Component {

    statusBars = [
        {
            id: '1',
            name: 'Здоровье:',
            className: 'hp'
        },
        {
            id: '2',
            name: 'Жажда:',
            className: 'thr'
        },
        {
            id: '3',
            name: 'Голод:',
            className: 'hungry'
        },
        {
            id: '4',
            name: 'Усталость:',
            className: 'energy'
        }
    ];

    render() {
        return (
            <Fragment>
                {this.statusBars.map(statusBar => <div className="statusContainer" key={statusBar.id}>
                    <h4 className="statusTitle">{statusBar.name}</h4>
                    <div className="statusСapacity">
                        <div className={`statusContent-${statusBar.className}`}></div>
                    </div>
                </div>)}
            </Fragment>


        )
    }
}

export default StatusBar;