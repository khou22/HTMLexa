import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Helper functions to standardize styling
import { buildStyle } from '../../Actions/HelperActions.js';

import './style.scss';

const title = (props) => (
    <h1 id={props.id} style={buildStyle(props.description)}>
        {props.content}
    </h1>
)

title.propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
};

export default title;
