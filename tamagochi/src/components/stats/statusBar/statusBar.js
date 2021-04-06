import React, { Fragment } from 'react';
import './statusBar.scss';

class StatusBar extends React.Component {

    statusBars = [
        {
            id: '1',
            name: 'Здоровье:',
            className: 'HEALTH',
            type: 'health'
        },
        {
            id: '2',
            name: 'Жажда:',
            className: 'DRINK'
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
        console.log(this.props.statusData);
        return (
            <Fragment>
                {this.statusBars.map(statusBar => <div className="statusContainer" key={statusBar.id}>
                    <h4 className="statusTitle">{statusBar.name}</h4>
                    <div className="statusСapacity">
                        <div style={{width:this.props.statusData[statusBar.className] + '%'}} className={`statusContent-${statusBar.className}`}></div>
                    </div>
                </div>)}
            </Fragment>


        )
    }
}

export default StatusBar;