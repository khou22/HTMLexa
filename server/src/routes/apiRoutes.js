import { getSchema, updateSchema, sampleSchema } from '../controllers';

export default (app) => {
    app.get('/api/components', getSchema);
    app.get('/api/sample', sampleSchema);
    app.post('/api/update', updateSchema);
};
