import schema from '../data/schema';

export const getSchema = (req, res) => {
    res.status(200).send(schema);
};
