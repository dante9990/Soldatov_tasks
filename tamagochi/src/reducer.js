import React from "react";
export const ContextApp = React.createContext();


export const initialState = {
    HEALTH: 50,
    DRINK: 50,
    HUNGRY: 50,
    ENERGY: 50,
};

function clamp(obj) {
    for(let key in obj) {
        if(obj[key] < 0) {
            obj[key] = 0;
        }
        if(obj[key] > 100) {
            obj[key] = 100;
        }
    }

    return obj;
}

export const testReducer = (state, action) => {
    switch (action.type) {

        case 'HEALTH':
            return {
                ...state,
                ...clamp(action.payload)
            };
        case 'DRINK':
            return {
                ...state,
                ...clamp(action.payload)
            };
        case 'HUNGRY':
            return {
                ...state,
                ...clamp(action.payload)
            };
        case 'ENERGY':
            return {
                ...state,
                ...clamp(action.payload)
            };
        default:
            return state
    }
};
