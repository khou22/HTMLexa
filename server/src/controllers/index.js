const path = require('path'); // File path resolution
const util = require('util'); // Printing nested objects

// The current data schema
import schema from '../data/schema';

// Development data schemas
import sampleSchemaData from '../data/sampleSchema';
import emptySchemaData from '../data/emptySiteSchema';

// Helper functions
import {
    writeFile,
} from './helpers.js';

export const getSchema = (req, res) => {
    res.status(200).send(schema);
};

// For hardcoded scheme
export const sampleSchema = (req, res) => {
    res. status(200).send(sampleSchemaData);
};

// For hardcoded scheme
export const emptyScreen = (req, res) => {
    res. status(200).send(emptySchemaData);
};

export const updateSchema = async (req, res) => {
    const data = {
        ...schema,
        ...req.body,
    };

    const filepath = path.resolve(__dirname, '../data/schemaTest.js');
    const contents = `export default ${util.inspect(data, false, null)}`;

    const response = await writeFile(filepath, contents);

    if (response.success) {
        // The file was saved properly
        res.status(200).send(response);
    } else {
        // File wasn't saved correctly
        res.status(500).send(response);
    }
};

