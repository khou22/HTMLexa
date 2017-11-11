import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import { sizeToClass } from '../../Actions/HelperActions.js';

const image = (props) => {
    const sizeStr = sizeToClass(props.description.size);
    const customClass = `image image-${sizeStr}`;
    return (
        <img className={customClass} id={props.id} src={props.content} />
    );
}

image.propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
};

export default image;
