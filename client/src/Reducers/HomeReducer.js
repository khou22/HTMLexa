import * as types from '../Constants/MainActionTypes';

const initialState = {
    defaultColors: {
        primary: '#5092DF',
        lighter: '#90B9FD',
        darker: '#495D7E',
    },
    componentData: [], // Component data
};

const HomeReducer = (state = initialState, action) => {
    // The app can decide what to do based on the action type
    // The return object for this function will be the new state
    switch (action.type) {
        
        // Received data from server
        case types.RECEIVED_COMPONENTS:
            return {
                ...state,
                defaultColors: {
                    primary: action.primaryColor,
                    lighter: action.lighterColor,
                    darker: action.darkerColor,
                },
                componentData: action.componentData,
            }

        default: // Default, no state change
            return state;
    }
    return state;
};

export default HomeReducer;
