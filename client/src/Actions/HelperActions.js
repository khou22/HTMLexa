export const sizeToClass = (size) => {
    if (size < 0) return 'small';
    else if (size > 0) return 'big';
    return 'normal';
}

export const columnToClass = (column) => {
    if (column == 0) return 'column-full';
    else if (column == 1) return 'column-left';
    return 'column-right';
}

// Map a weight to a font-weight value (100...700)
export const weightToValue = (weight) => {
    if (weight < 0) return 100;
    else if (weight > 0) return 700;
    return 300;
}

// Convert the usual description styling into a style object
// Size goes into a class
export const buildStyle = (description) => {
    // Style object

    const style = {
        // Font Color
        'color': description.textColor != 'default' ? description.textColor : 'inherit',

        // Background Color
        'background-color': description.backgroundColor? description.backgroundColor : '',
    }

    if (description.font != null) {
        // If font weight exists
        if (description.font.weight) {
            style.fontWeight = weightToValue(description.font.weight);
        }

        if (description.font.oblique) {
            style.fontStyle = description.font.oblique ? 'italic' : 'inherit';
        }

        if (description.font.underline) {
            style.textDecoration = description.font.underline ? 'underline' : 'inherit';
        }
    }

    return style; // Return master styling
}
