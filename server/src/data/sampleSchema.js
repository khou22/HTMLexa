// Full sample website schema
// Hard coded for testing purposes
export default {
    defaults: {
        title: 'Shop Acme - Fall 2017',
        defaultColors: {
            primary: '#5092DF',
            lighter: '#90B9FD',
            darker: '#495D7E',
        },
    },
    components: [
        {
            type: 'banner',
            id: 'banner-1',
            content: 'FALL 2017',
            column: 0,
            description: {
                textColor: 'white',
                size: 0,
                backgroundColor: 'white',
                font: {
                    weight: 1,
                    oblique: false,
                    underline: false,
                },

                link: 'https://orig00.deviantart.net/bc57/f/2015/134/8/8/dark_autumn_by_nelleke-d8tbosc.png',
            },
        },
        {
            type: 'Header',
            id: 'Header-1',
            content: 'Shop our latest collection for Fall 2017',
            column: 0,
            description: {
                textColor: 'default',
                size: 0,
                backgroundColor: 'white',
                font: {
                    weight: 0,
                    oblique: false,
                    underline: false,
                },
            },
        },
        {
            type: 'Image',
            id: 'Image-3',
            content: 'https://i.pinimg.com/originals/27/e0/3d/27e03d0713f447c6a150660e1516354c.jpg',
            column: 0,
            description: {
                textColor: 'default',
                size: 1,
                backgroundColor: 'white',
                font: {
                    weight: 0,
                    oblique: false,
                    underline: false,
                },
            },
        },
        {
            type: 'Header',
            id: 'Header-2',
            content: 'About',
            column: 0,
            description: {
                textColor: 'default',
                size: 0,
                backgroundColor: 'white',
                font: {
                    weight: 0,
                    oblique: false,
                    underline: false,
                },
            },
        },
        {
            type: 'Paragraph',
            id: 'Paragraph-1',
            content: 'Our new collection features work from popular minimalist designer Jill Sanders.',
            column: 0,
            description: {
                textColor: 'default',
                size: 0,
                backgroundColor: 'white',
                font: {
                    weight: 0,
                    oblique: false,
                    underline: false,
                },
            },
        },
        {
            type: 'Button',
            id: 'Button-1',
            content: 'More',
            column: 0,
            description: {
                textColor: 'default',
                size: 0,
                backgroundColor: 'white',
                font: {
                    weight: 0,
                    oblique: false,
                    underline: false,
                },

                // Specific to Button
                link: 'www.amazon.com',
            },
        },
        {
            type: 'Image',
            id: 'Image-2',
            content: 'http://andesigns.us/wp-content/uploads/2016/08/minimal-white-chair.jpg',
            column: 0,
            description: {
                textColor: 'default',
                size: 0,
                backgroundColor: 'white',
                font: {
                    weight: 0,
                    oblique: false,
                    underline: false,
                },
            },
        },
        {
            type: 'Header',
            id: 'Header-3',
            content: 'Product',
            column: 0,
            description: {
                textColor: 'default',
                size: 0,
                backgroundColor: 'white',
                font: {
                    weight: 0,
                    oblique: false,
                    underline: false,
                },
            },
        },
        {
            type: 'Subheader',
            id: 'Subheader-2',
            content: 'COLLABORATION WITH JILL SANDERS',
            column: 0,
            description: {
                textColor: 'default',
                size: 0,
                backgroundColor: 'white',
                font: {
                    weight: 0,
                    oblique: false,
                    underline: false,
                },
            },
        },
        {
            type: 'Paragraph',
            id: 'Paragraph-2',
            content: 'This season’s collection focuses on the art of minimal furniture design. Our collection features work curated to show our users the best designs.',
            column: 0,
            description: {
                textColor: 'default',
                size: 0,
                backgroundColor: 'white',
                font: {
                    weight: 0,
                    oblique: false,
                    underline: false,
                },
            },
        },
    ],
};
