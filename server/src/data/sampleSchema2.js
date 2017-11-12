// Full sample website schema
// Hard coded for testing purposes
export default {
    defaults: {
        title: 'Bangkok',
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
            content: 'Welcome',
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

                link: 'https://ak3.picdn.net/shutterstock/videos/28594933/thumb/11.jpg',
            },
        },
        {
            type: 'Header',
            id: 'Header-1',
            content: 'Introduction',
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
            id: 'Image-1',
            content: 'https://assets.bonappetit.com/photos/57acf653f1c801a1038bc965/master/w_1200,c_limit/citrus-and-chile-braised-short-ribs.jpg',
            column: 1,
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
            type: 'Image',
            id: 'Image-2',
            content: 'https://assets.bonappetit.com/photos/595e829aabf8343fc65d8fa5/master/w_1200,c_limit/Basically%2520Big%2520Cutting%2520Board%2520Horizontal.jpg',
            column: 2,
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
            type: 'Paragraph',
            id: 'Paragraph-1',
            content: 'Hi! My name is Michele and I enjoy travelling around the world. I find myself in Asia half of the year and I take my camera with me everywhere I go! This page is dedicated to showcasing these travels and sharing my experiences!',
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
            id: 'Header-2',
            content: 'To learn more about my trips to other countries in Asia click more',
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
                textColor: '#B0805F',
                size: 0,
                backgroundColor: 'white',
                font: {
                    weight: 0,
                    oblique: false,
                    underline: false,
                },

                // Specific to Button
                link: 'https://www.amazon.com',
            },
        },
        {
            type: 'Header',
            id: 'Header-3',
            content: 'Arriving in Bangkok',
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
            content: 'After travelling for 9 hours, I finally landed in Suvarnabhumi Airport. Also known as Bangkok International Airport. Upon arrival I was greeted with a driver who took me to my hotel located near the Patpong Night Market',
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
            content: 'If travelling to Bangkok I highly recommend taking a boat tour to travel down the river. Brightly colored houses line the river and the locals are always happy to see tourists. Boat transportation allowed easy access to other tourist attractions such as the Temples of Ayutthaya.',
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
            type: 'Image',
            id: 'Image-3',
            content: 'https://assets.rappler.com/A9A3A5DD90BD42FBA42EA7D57A5F5D98/img/63ABFAC25E9A44DAA942318560B92A3D/aniano-adasa-ancestral-house-dapitan-city.jpg',
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
            id: 'Header-2',
            content: 'Bangkok is known for its intricate temples and lively night life',
            column: 0,
            description: {
                textColor: 'default',
                size: 0,
                backgroundColor: 'white',
                font: {
                    weight: 1,
                    oblique: false,
                    underline: false,
                },
            },
        },
        {
            type: 'Image',
            id: 'Image-4',
            content: 'http://www.ursulasweeklywanders.com/wp-content/uploads/2011/10/01-Beneath-Bangkok_0605-Edit.jpg',
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
            type: 'Paragraph',
            id: 'Paragraph-3',
            content: 'Overall, I loved my trip to Bangkok and would highly recommend the trip to anyone. It is suggested to visit Bangkok between November and March to avoid the monsoons. The landscape during this period is beautiful, and the temperature is plesant.',
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
    ],
};
