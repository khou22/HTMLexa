import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Helper functions to standardize styling
import { buildStyle, columnToClass } from '../../Actions/HelperActions.js';

import './style.scss';

const title = (props) => {
    const className = `subtitle ${columnToClass(props.column)}`;
    return (
        <div className={className} id={props.id}>
            <h2 style={buildStyle(props.description)}>
                {props.content}
            </h2>
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
