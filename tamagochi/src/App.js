import React, { useReducer } from 'react'
import { ContextApp, initialState, testReducer } from "./reducer.js";
import './App.scss';
import Stats from './components/stats/stats.js';
import Controls from './components/controls/controls.js';

const App = () => {
    const [state, dispatch] = useReducer(testReducer, initialState);
    return (
        <div className="app">
            <ContextApp.Provider value={{ dispatch, state }}>
                <Stats />
                <Controls />
            </ContextApp.Provider>
        </div>
    )
};

export default App;
