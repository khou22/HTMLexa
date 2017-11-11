import * as types from '../Constants/MainActionTypes';

const initialState = {
    componentData: [], // Printer data
};

const HomeReducer = (state = initialState, action) => {
    // The app can decide what to do based on the action type
    // The return object for this function will be the new state
    switch (action.type) {
        case types.RECIEVED_COMPONENTS:
            return {
                ...state,
                componentData: action.componentData,
            }
        default: // Default, no state change
            return state;
    }
    return state;
};

export default HomeReducer;
