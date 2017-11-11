import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Helper functions to standardize styling
import { buildStyle, columnToClass } from '../../Actions/HelperActions.js';

import './style.scss';

const title = (props) => {
    return (
        <div className={columnToClass(props.column)} id={props.id}>
            <h1 style={buildStyle(props.description)}>
                {props.content}
            </h1>
        </div>
    );
}

title.propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
    column: PropTypes.number.isRequired,
};

export default title;
