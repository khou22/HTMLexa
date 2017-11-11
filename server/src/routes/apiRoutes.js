import { test } from '../controllers';

export default (app) => {
    app.get('/api/test', test);
};
