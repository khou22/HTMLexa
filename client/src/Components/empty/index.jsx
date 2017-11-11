import React from 'react';

import Logo from './htmlexalogo.svg'; // SVG Loading animation

import './../../Styles/empty.scss'; // Import styling

const emptyScreen = () => {
    return (
        <div className="empty">
            <span dangerouslySetInnerHTML={{ __html: Logo }} />
            <br />
            <h3>Welcome</h3>
            <br />
            <p>
                Please talk to your Alexa to configure your website!
            </p>
        </div>
    );
}

export default emptyScreen;
