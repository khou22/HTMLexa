const path = require('path'); // File path resolution
const util = require('util'); // Printing nested objects
const fetchUrl = require('fetch').fetchUrl; // For fetch requests

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
    const url = 'https://s3.amazonaws.com/htmlexa/schema.json';

    // source file is iso-8859-15 but it is converted to utf-8 automatically
    fetchUrl(url, (error, meta, body) => {
        // console.log(body.toString());
        const json = JSON.parse(body.toString()); // Parse into JSON
        if (json != null) { // JSON parsed
            res.status(200).send(json);
        } else { // JSON was unsuccessful
            res.status(500).send(body.toString()); // JSON failed, so send source
        }
    });
};

// For hardcoded scheme
export const sampleSchema = (req, res) => {
    res.status(200).send(sampleSchemaData);
};

// For hardcoded scheme
export const emptyScreen = (req, res) => {
    res.status(200).send(emptySchemaData);
};
