import { getSchema, updateSchema, sampleSchema, sampleSchema2, emptyScreen } from '../controllers';

export default (app) => {
    app.get('/api/components', getSchema);
    app.get('/api/sample', sampleSchema);
    app.get('/api/sample-one', sampleSchema2);
    app.get('/api/empty', emptyScreen);
};
