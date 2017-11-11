import React from 'react';
import PropTypes from 'prop-types';

// Helper functions to standardize styling
import { buildStyle } from '../../Actions/HelperActions.js';

import './style.scss';

const paragraph = (props) => (
    <p className="paragraph" id={props.id} style={buildStyle(props.description)}>
        {props.content}
    </p>
)

paragraph.propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
};

export default paragraph;
