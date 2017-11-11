import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Helper functions to standardize styling
import { buildStyle, sizeToClass } from '../../Actions/HelperActions.js';

import './style.scss';

class Button extends Component {
    openLink() {
        // Open in a new window
        window.open(this.props.description.link, '_blank');
    }

    render() {
        const {
            id,
            content,
            description,
        } = this.props;

        const className = `button button-${sizeToClass(description.size)}`;

        // Set the color of the font to the background, set font to white
        let backgroundColor = description.textColor;
        if (backgroundColor == 'default') backgroundColor = 'gray'; // Set the default to gray
        const fontColor = description.backgroundColor;

        // Swap the values
        description.textColor = backgroundColor;
        description.backgroundColor = fontColor;

        const style = buildStyle(description); // Build the style object

        // Add border to the button
        style.borderColor = description.textColor;

        return (
            <button className={className} id={id} onClick={() => this.openLink()} style={style}>
                {content}
            </button>
        );
    }
}

Button.propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
};

export default Button;
