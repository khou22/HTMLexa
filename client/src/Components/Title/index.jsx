import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const title = (props) => (
    <h1 id={props.id}>
        {props.content}
    </h1>
)

title.propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
};

export default title;
