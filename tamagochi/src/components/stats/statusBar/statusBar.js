import React, { Fragment } from 'react';
import './statusBar.scss';

class StatusBar extends React.Component {

    statusBars = [{
        name: 'Здоровье:',
        className: 'hp'
    },
    {
        name: 'Жажда:',
        className: 'thr'
    },
    {
        name: 'Голод:',
        className: 'hungry'
    },
    {
        name: 'Усталость:',
        className: 'energy'
    }];

    render() {
        return (
            <Fragment>
                {this.statusBars.map(statusBar => <div className="statusContainer">
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