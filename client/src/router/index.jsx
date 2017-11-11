import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { BrowserRouter as Switch } from 'react-router-dom';
import PropTypes from 'prop-types'; // For prop validation

// Components
import Home from '../Containers/HomeContainer.js';

// Loading Screen
import LoadingScreen from '../Components/loading/index.jsx';

class MainRouter extends Component {
    render() {
        const { loadingScreen } = this.props;
        return (
            <div>
                {/* <NavBar history={history} loggedIn={loggedIn} user={currentUser} /> */}
                <Route exact path="*" component={Home} />

                { loadingScreen ?
                    <LoadingScreen />
                    :
                    <span data-note="Not loading" />
                }
            </div>
        );
    }
}

// Prop validation
MainRouter.propTypes = {
    history: PropTypes.object.isRequire, // Passed by parent, not redux
    loadingScreen: PropTypes.bool.isRequired, // Whether to display loading screen
};

export default MainRouter;
