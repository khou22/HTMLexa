import schema from '../data/schema';

export const getSchema = (req, res) => {
    res.status(200).send(schema);
};


export const updateSchema = (req, res) => {
    console.log(req.body);
    res.status(200).send('Success');
};
