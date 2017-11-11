import * as types from '../Constants/MainActionTypes';

const initialState = {
    loadingScreen: true, // Showing loading screen by default
};

const MainReducer = (state = initialState, action) => {
    // The app can decide what to do based on the action type
    // The return object for this function will be the new state
    switch (action.type) {
        case types.ACTION_ERROR:
            return state;
        case types.END_LOADING:
            return {
                ...state,
                loadingScreen: false, // Turn off loading screen
            }
        default: // Default, no state change
            return state;
    }
    return state;
};

export default MainReducer;
