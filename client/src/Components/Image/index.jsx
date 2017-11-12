import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

// Helper functions to standardize styling
import { sizeToClass, buildStyle, columnToClass } from '../../Actions/HelperActions.js';

const image = (props) => {
    const sizeStr = sizeToClass(props.description.size);
    const customClass = `image image-${sizeStr}`;
    console.log(props.admin, props.id);
    const label = props.admin ? props.id : <span data-note="Not in admin" />;
    return (
        <div className={columnToClass(props.column)} id={props.id}>
            <img className={customClass} src={props.content} style={buildStyle(props.description)} />
            <div className={`${customClass} image-admin`}>{label}</div>
        </div>
    );
}

image.propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
    column: PropTypes.number.isRequired,

    admin: PropTypes.bool.isRequired,
};

export default image;
