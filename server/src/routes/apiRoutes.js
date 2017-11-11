import { getSchema, updateSchema, sampleSchema, emptyScreen } from '../controllers';

export default (app) => {
    app.get('/api/components', getSchema);
    app.get('/api/sample', sampleSchema);
    app.get('/api/empty', emptyScreen);
};
