import * as types from '../Constants/MainActionTypes';

const initialState = {
    primaryColor: '#3286A8', // Default color
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
                primaryColor: action.primaryColor,
                componentData: action.componentData,
            }

        default: // Default, no state change
            return state;
    }
    return state;
};

export default HomeReducer;
