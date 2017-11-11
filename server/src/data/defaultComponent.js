const defaultComponent = {
    type: '', // Required
    id: '', // Required (structure: `${type}-${some_number}`)
    content: '', // Inner HTML
    description: {
        textColor: 'default',
        size: 0, // -1, 0, or 1
        backgroundColor: 'white',
        font: {
            weight: 0, // -1, 0, or 1
            oblique: false,
            underline: false,
        },
    },
};

export default defaultComponent;
