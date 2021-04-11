import React from "react";
export const ContextApp = React.createContext();


export const initialState = {
    HEALTH: 50,
    DRINK: 50,
    HUNGRY: 50,
    ENERGY: 50,
};

export const testReducer = (state, action) => {
    switch (action.type) {

        case 'HEALTH':
            return {
                ...state,
                ...action.payload
            };
        case 'DRINK':
            return {
                ...state,
                ...action.payload
            };
        case 'HUNGRY':
            return {
                ...state,
                ...action.payload
            };
        case 'ENERGY':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
};
