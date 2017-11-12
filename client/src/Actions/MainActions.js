import 'whatwg-fetch'; // Fetch requests
import * as types from '../Constants/MainActionTypes';

// Action errors
const actionError = (error) => ({
    type: types.ACTION_ERROR,
    error,
});

// Parse the component data into Redux
const receivedData = (json) => ({
    type: types.RECEIVED_COMPONENTS,

    // Defaults
    primaryColor: json.defaults.defaultColors.primary,
    lighterColor: json.defaults.defaultColors.lighter,
    darkerColor: json.defaults.defaultColors.darker,

    // Array of component data
    componentData: json.components,
});

export const getComponents = () => {
    const prodURL = '/api/components';
    const testURL = '/api/sample';
    const testEmpty = '/api/empty';

    const currentPathname = window.location.pathname;
    const url = currentPathname === '/test' ? testURL : prodURL;

    // Returning a promise allows you to use the 'dispatch' function in the child scope
    return (dispatch) => {
        // Return the contents of the fetch promise
        return fetch(url, { // See watwg-fetch for docs
            credentials: 'same-origin', // If same origin
        }).then(response => response.json()) // Parse response
        .then(json => {
            // console.log('Received printers data: ', json);
            // Load data into redux state
            dispatch(receivedData(json));

            // Set the site title
            document.title = json.defaults.title;
        })
        .catch(error => { // Catch any errors
            // Prod not working
            window.location = '/test'; // Redirect to working schema

            dispatch(actionError(error));
        });
    };
}
