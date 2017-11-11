const defaultComponent = {
    type: '', // Required
    id: '', // Required (structure: `${type}-${some_number}`)
    content: '', // Inner HTML
    description: {
        textColor: 'default',
        size: 'normal',
        backgroundColor: 'white',
        font: {
            weight: 'normal',
            oblique: true,
            underline: true,
        },
    },
};

export default defaultComponent;
