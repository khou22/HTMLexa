import React from 'react';

import NavigationBar from './NavigationBar/index.jsx';
import Paragraph from './Paragraph/index.jsx';
import Title from './Title/index.jsx';

// Map the data to a component with props
const createComponent = (type, id, content, description) => {
    switch(type) {
        case 'navigationBar':
            return (
                <NavigationBar
                    id={id}
                    content={content}
                    description={description}
                />
            );

        case 'paragraph':
            return (
                <Paragraph
                    id={id}
                    content={content}
                    description={description}
                />
            );

        case 'title':
            return (
                <Title
                    id={id}
                    content={content}
                    description={description}
                />
            );

        default:
            return (
                <span data-note="error" />
            );
    }
}

export default createComponent;
