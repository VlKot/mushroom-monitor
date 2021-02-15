import React, { useReducer } from "react";
import { intitialState } from "./store"


const actions = {
    TOGGLE_FAN: "TOGGLE_FAN",
    TOGGLE_LIGHT: "TOGGLE_LIGHT",
    TOGGLE_SPRAY: "TOGGLE_SPRAY"
};

function reducer(state, action) {
    switch (action.type) {
        case actions.TOGGLE_FAN:
            return { ...state, isActiveFan: action.value };
        case actions.TOGGLE_LIGHT:
            return { ...state, isActiveLight: action.value };
        case actions.TOGGLE_SPRAY:
            return { ...state, isActiveSpray: action.value };

        default:
            return state;
    }
}

export const Context = React.createContext();

export const Provider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, intitialState);

    const value = {
        temperature: state.temperature,
        humidity: state.humidity,
        carbonDioxide: state.carbonDioxide,
        isActiveFan: state.isActiveFan,
        isActiveLight: state.isActiveLight,
        isActiveSpray: state.isActiveSpray,
        toggleFan: (value) => { 
            dispatch({ type: actions.TOGGLE_FAN, value }) 
        },
        toggleLight: (value) => { 
            dispatch({ type: actions.TOGGLE_LIGHT, value }) 
        },
        toggleSpray: (value) => { 
            dispatch({ type: actions.TOGGLE_SPRAY, value }) 
        }
    }

    return <Context.Provider value={value} >
        {children}
    </Context.Provider>
}