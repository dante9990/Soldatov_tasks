import React, { useContext } from 'react';
import { ContextApp } from "./../../reducer";
import './stats.scss';
import StatusBar from './statusBar/statusBar';


export default function Stats() {

        const { state} = useContext(ContextApp);
        return (
            <div className="stats">
                <StatusBar statusData={state} />
            </div>
        )
}