import React from 'react';
import './stats.scss';
import StatusBar from './statusBar/statusBar';


class Stats extends React.Component {
    render() {
        return (
            <div className="stats">
                <StatusBar />
            </div>
        )
    }
}

export default Stats;