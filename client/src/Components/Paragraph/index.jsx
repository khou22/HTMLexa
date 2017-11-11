import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const paragraph = (props) => (
    <p id={props.id}>
        {props.content}
    </p>
)

paragraph.propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
};

export default paragraph;
