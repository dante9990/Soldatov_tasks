import React from "react";
export const ContextApp = React.createContext();

export const initialState = {
    HEALTH: 100,
    DRINK: 100
};

export const testReducer = (state, action) => {
    console.log(action.type)
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
        default:
            return state
    }
};
