import { getSchema } from '../controllers';

export default (app) => {
    app.get('/api/components', getSchema);
};
