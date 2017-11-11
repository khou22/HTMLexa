const path = require('path'); // File path resolution
const util = require('util'); // Printing nested objects

// The current data schema
import schema from '../data/schema';
import sampleSchemaData from '../data/sampleSchema'; // For development purposes

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

export const updateSchema = async (req, res) => {
    console.log(req.body);

    const data = {
        ...schema,
        ...req.body,
    };

    const filepath = path.resolve(__dirname, '../data/schemaTest.js');
    const contents = `export default ${util.inspect(data, false, null)}`;

    const response = await writeFile(filepath, contents);

    if (response.success) {
        // The file was saved properly
        res.status(200).send(response.contents);
    } else {
        // File wasn't saved correctly
        res.status(500).send(response);
    }
};

