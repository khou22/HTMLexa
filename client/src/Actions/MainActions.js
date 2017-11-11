import 'whatwg-fetch'; // Fetch requests
import * as types from '../Constants/MainActionTypes';

// Action errors
const actionError = (error) => ({
    type: types.ACTION_ERROR,
    error,
});

// Parse the component data into Redux
const receivedComponents = (json) => ({
    type: types.RECIEVED_PRINTERS,
    componentData: json,
});

export const getComponents = () => {
    const url = '/api/components';

    // Returning a promise allows you to use the 'dispatch' function in the child scope
    return (dispatch) => {
        // Return the contents of the fetch promise
        return fetch(url, { // See watwg-fetch for docs
            credentials: 'same-origin', // If same origin
        }).then(response => response.json()) // Parse response
        .then(json => {
            // console.log('Received printers data: ', json);
            // Load data into redux state
            dispatch(receivedComponents(json));
        })
        .catch(error => { // Catch any errors
            dispatch(actionError(error));
        });
    };
}