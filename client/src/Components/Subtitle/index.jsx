import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Helper functions to standardize styling
import { buildStyle, columnToClass } from '../../Actions/HelperActions.js';

import './style.scss';

const title = (props) => {
    const className = `subtitle ${columnToClass(props.column)}`;
    const label = props.admin ? props.id : props.content.toUpperCase();
    return (
        <div className={className} id={props.id}>
            <h3 style={buildStyle(props.description)}>
                {label}
            </h3>
        </div>
    );
}

title.propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
    column: PropTypes.number.isRequired,

    admin: PropTypes.bool.isRequired,
};

export default title;
