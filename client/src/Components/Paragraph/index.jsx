import React from 'react';
import PropTypes from 'prop-types';

// Helper functions to standardize styling
import { buildStyle, columnToClass } from '../../Actions/HelperActions.js';

import './style.scss';

const paragraph = (props) => {
    const label = props.admin ? props.id : props.content;
    return (
        <div className={columnToClass(props.column)} id={props.id}>
            <p className="paragraph" style={buildStyle(props.description)}>
                {label}
            </p>
        </div>
    );
}

paragraph.propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
    column: PropTypes.number.isRequired,

    admin: PropTypes.bool.isRequired,
};

export default paragraph;
