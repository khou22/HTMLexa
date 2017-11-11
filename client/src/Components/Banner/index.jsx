import React from 'react';
import PropTypes from 'prop-types';

// Helper functions to standardize styling
import { buildStyle, columnToClass } from '../../Actions/HelperActions.js';

import './style.scss';

const banner = (props) => {
    const backgroundImage = {
        "background-image": `url(${props.description.link})`,
    };
    return (
        <div id={props.id} className={columnToClass(props.column)}>
            <div className="banner" style={buildStyle(props.description)}>
                <div className="banner-background" style={backgroundImage} />
                <div className="banner-content">
                    <h1>{props.content}</h1>
                </div>
            </div>
        </div>
    );
}

banner.propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
    column: PropTypes.number.isRequired,
};

export default banner;
