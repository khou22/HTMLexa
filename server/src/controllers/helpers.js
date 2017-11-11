import * as fs from 'fs'; // For writing to file system

// Wrap the file saving with an async promise
export const writeFile = async (filepath, contents) => {
    return new Promise((resolve, reject) => {
        // Update the file
        fs.writeFile(filepath, contents, (err) => {
            if (err) {
                return reject({
                    success: false,
                    error: err,
                });
            }

            resolve({
                success: true,
                filepath,
                contents,
            });
        });
    });
};
