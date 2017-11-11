import routes from './routes';

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

// Middleware: Ensure HTTPS not HTTP
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;

const __dirname = process.env.PWD; // Could break on prod

const app = express(); // Setup express app

// Allow cross origin requests with authorization (for API purposes)
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header(
        'Access-Control-Allow-Headers',
        'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token, AUTHORIZATION'
    );

    // Intercept OPTIONS method
    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

// Setup authentication and security
// sessionAuth(app);

// Don't redirect if the hostname is `localhost:port` or the route is `/insecure`
app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/]));

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/scripts', express.static(path.join(__dirname, '../../client/dist')));

// Require routes and simultaneously attach app
routes(app);

// Catch all if the routes doesn't find a valid URL
app.get('*', (req, res) => res.status(200).send('Nothing here yet...'));

export default app;
