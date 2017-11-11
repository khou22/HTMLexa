import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../Styles/main.scss';

import map from './map.js'; // Dictionary for string to JSX components

class Main extends Component {
    render() {
        return (
            <div>
                Hello, World.
            </div>
        );
    }
}

Main.propTypes = {
};

export default Main;
