import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EmptySite from './empty/index.jsx'; // Placeholder if no items on page
import map from './map.js'; // Dictionary for string to JSX components

// Import column styling
import '../Styles/columns.scss';

class Home extends Component {
    render() {
        const {
            primaryColor,
            componentData,
        } = this.props;

        // If no items, display the EmptySite component
        if (componentData.length == 0) {
            return <EmptySite />;
        }

        const componentNodes = componentData.map((component) => {
            const {
                type,
                id,
                content,
                column,
                description,
            } = component;
            return map(type, id, content, column, description);
        });

        return (
            <div>
                {componentNodes}
            </div>
        );
    }
}

Home.propTypes = {
    // Defaults
    defaultColors: PropTypes.shape({
        primary: PropTypes.string.isRequired,
        lighter: PropTypes.string.isRequired,
        darker: PropTypes.string.isRequired,
    }).isRequired,

    // Component data
    componentData: PropTypes.array.isRequired,
};

export default Home;
