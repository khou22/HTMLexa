import React from 'react';

import NavigationBar from './NavigationBar/index.jsx';
import Paragraph from './Paragraph/index.jsx';
import Title from './Title/index.jsx';
import Subtitle from './Subtitle/index.jsx';
import Button from './Button/index.jsx';
import Image from './Image/index.jsx';
import Banner from './Banner/index.jsx';

// Map the data to a component with props
const createComponent = (type, id, content, column, description, admin) => {
    switch(type) {
        case 'navigationBar':
            return (
                <NavigationBar
                    id={id}
                    content={content}
                    description={description}
                    column={column}
                    admin={admin}
                />
            );

        case 'Paragraph':
            return (
                <Paragraph
                    id={id}
                    content={content}
                    description={description}
                    column={column}
                    admin={admin}
                />
            );

        case 'Header':
            return (
                <Title
                    id={id}
                    content={content}
                    description={description}
                    column={column}
                    admin={admin}
                />
            );

        case 'Subheader':
            return (
                <Subtitle
                    id={id}
                    content={content}
                    description={description}
                    column={column}
                    admin={admin}
                />
            );

        case 'Image':
            return (
                <Image
                    id={id}
                    content={content}
                    description={description}
                    column={column}
                    admin={admin}
                />
            );

        case 'Button':
            return (
                <Button
                    id={id}
                    content={content}
                    description={description}
                    column={column}
                    admin={admin}
                />
            );

        case 'Link':
            return (
                <Button
                    id={id}
                    content={content}
                    description={description}
                    column={column}
                    admin={admin}
                />
            );

        case 'banner':
            return (
                <Banner
                    id={id}
                    content={content}
                    description={description}
                    column={column}
                    admin={admin}
                />
            );

        default:
            return (
                <span data-note="error" />
            );
    }
}

export default createComponent;
