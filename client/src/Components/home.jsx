import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../Styles/main.scss';

import map from './map.js'; // Dictionary for string to JSX components

class Home extends Component {
    render() {
        const {
            primaryColor,
            componentData,
        } = this.props;

        const componentNodes = componentData.map((component) => {
            const {
                type,
                id,
                content,
                description,
            } = component;
            return map(type, id, content, description);
        });

        return (
            <div>
                {componentNodes}
            </div>
        );
    }
}

Home.propTypes = {
    primaryColor: PropTypes.string.isRequired,
    componentData: PropTypes.array.isRequired,
};

export default Home;
