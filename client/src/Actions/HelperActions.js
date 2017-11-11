export const sizeToClass = (size) => {
    if (size < 0) return 'small';
    else if (size > 0) return 'big';

    return 'normal';
}
