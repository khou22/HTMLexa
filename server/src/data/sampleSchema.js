// Full sample website schema
// Hard coded for testing purposes
export default {
    defaults: {
        title: 'My Website',
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
            content: 'Hello, World.',
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
                link: 'https://www.princeton.edu/sites/default/files/images/2017/06/20060425_NassauHall_JJ_IMG_5973.jpg',
            },
        },
        {
            type: 'title',
            id: 'title-1',
            content: 'I am a title',
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
            type: 'paragraph',
            id: 'paragraph-1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere id magna sit amet sodales. Aenean in elit vel nisi luctus placerat. Curabitur non consequat massa. Donec turpis eros, molestie quis egestas sodales, pharetra sed massa. Etiam facilisis ac nisl eget imperdiet. Curabitur tristique aliquet nulla, blandit lacinia massa pulvinar eget. Praesent nunc lorem, tincidunt eget quam eu, consectetur interdum sem. Aenean mollis ultrices neque. Mauris interdum vel arcu at molestie. Fusce rhoncus ut nibh eu congue. Pellentesque cursus dolor est. Fusce pulvinar nulla ut ante mattis auctor. Fusce pretium tortor diam, eu tincidunt tortor interdum vel. Ut fringilla eu nunc a consequat. Ut facilisis imperdiet fermentum.',
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
            type: 'paragraph',
            id: 'paragraph-2',
            content: 'Lorem ipsum dolor sit amet. (Heavy font)',
            column: 1,
            description: {
                textColor: '#3286A8',
                size: 0,
                backgroundColor: '#EEE',
                font: {
                    weight: 1,
                    oblique: false,
                    underline: false,
                },
            },
        },
        {
            type: 'paragraph',
            id: 'paragraph-3',
            content: 'Lorem ipsum dolor sit amet.',
            column: 2,
            description: {
                textColor: 'default',
                size: 0,
                backgroundColor: 'white',
                font: {
                    weight: -1,
                    oblique: true,
                    underline: true,
                },
            },
        },
        {
            type: 'image',
            id: 'image-1',
            content: 'https://www.princeton.edu/sites/default/files/images/2017/06/20060425_NassauHall_JJ_IMG_5973.jpg',
            column: 1,
            description: {
                textColor: 'default',
                size: -1,
                backgroundColor: 'white',
                font: {
                    weight: 0,
                    oblique: false,
                    underline: false,
                },
            },
        },
        {
            type: 'image',
            id: 'image-2',
            content: 'https://www.princeton.edu/sites/default/files/images/2017/06/20060425_NassauHall_JJ_IMG_5973.jpg',
            column: 2,
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
            type: 'image',
            id: 'image-3',
            content: 'https://www.princeton.edu/sites/default/files/images/2017/06/20060425_NassauHall_JJ_IMG_5973.jpg',
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
            type: 'button',
            id: 'button-1',
            content: 'Button',
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
                link: 'https://www.princeton.edu/sites/default/files/images/2017/06/20060425_NassauHall_JJ_IMG_5973.jpg',
            },
        },
    ],
};
