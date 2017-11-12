import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Helper functions to standardize styling
import { buildStyle, columnToClass } from '../../Actions/HelperActions.js';

import './style.scss';

const title = (props) => {
    const className = `title ${columnToClass(props.column)}`;
    const label = props.admin ? props.id : props.content;
    return (
        <div className={className} id={props.id}>
            <h1 style={buildStyle(props.description)}>
                {label}
            </h1>
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
