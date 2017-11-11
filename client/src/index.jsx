import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
// import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
// import { createBrowserHistory } from 'history';
import createHistory from 'history/createBrowserHistory';

// Get the routes/entry container
import Routes from './Containers/MainContainer.js';

// Get the store
import configureStore from './ConfigureStore';

// Actions to call on entry
import {
    getComponents,
} from './Actions/MainActions.js';

// Import main styling
import './Styles/constants.scss';
import './Styles/reset.scss'; // Normalize CSS
import './Styles/main.scss'; // Apply general styling

// Create an enhanced history that syncs navigation events with the store
const history = createHistory();
const store = configureStore(history);

// Immediate actions
store.dispatch(getComponents());

render(
    <Provider store={store}>
        <Router history={history}>
            <Routes history={history} />
        </Router>
    </Provider>,
    document.getElementById('main')
);
