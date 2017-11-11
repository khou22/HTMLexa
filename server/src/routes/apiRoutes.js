import { getSchema, updateSchema } from '../controllers';

export default (app) => {
    app.get('/api/components', getSchema);
    app.get('/api/update', updateSchema);
};
