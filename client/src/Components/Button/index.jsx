import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

        return (
            <button id={id} onClick={() => this.openLink()}>
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
