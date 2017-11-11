import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Helper functions to standardize styling
import { buildStyle, sizeToClass, columnToClass } from '../../Actions/HelperActions.js';

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
            column,
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
            <div className={columnToClass(column)} id={id}>
                <button className={className} onClick={() => this.openLink()} style={style}>
                    {content}
                </button>
            </div>
        );
    }
}

Button.propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
    column: PropTypes.number.isRequired,
};

export default Button;
