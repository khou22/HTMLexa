(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj81YjJhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCI/ZDBkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

eval("var _app = __webpack_require__(4);\n\nvar _app2 = _interopRequireDefault(_app);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\n// The express app we just created\n\nvar port = parseInt(process.env.PORT, 10) || 5555; // Application entry, setting up server\n\n_app2['default'].set('port', port);\n\n// 0.0.0.0 makes it available on your local network\n// type: `$ ifconfig` and it's the 192 (?) one\n// app.listen(port, '0.0.0.0');\n_app2['default'].listen(port);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zZXJ2ZXIvc3JjL2luZGV4LmpzPzg3MzciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQXBwbGljYXRpb24gZW50cnksIHNldHRpbmcgdXAgc2VydmVyXG5pbXBvcnQgYXBwIGZyb20gJy4vYXBwJzsgLy8gVGhlIGV4cHJlc3MgYXBwIHdlIGp1c3QgY3JlYXRlZFxuXG5jb25zdCBwb3J0ID0gcGFyc2VJbnQocHJvY2Vzcy5lbnYuUE9SVCwgMTApIHx8IDU1NTU7XG5hcHAuc2V0KCdwb3J0JywgcG9ydCk7XG5cbi8vIDAuMC4wLjAgbWFrZXMgaXQgYXZhaWxhYmxlIG9uIHlvdXIgbG9jYWwgbmV0d29ya1xuLy8gdHlwZTogYCQgaWZjb25maWdgIGFuZCBpdCdzIHRoZSAxOTIgKD8pIG9uZVxuLy8gYXBwLmxpc3Rlbihwb3J0LCAnMC4wLjAuMCcpO1xuYXBwLmxpc3Rlbihwb3J0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzZXJ2ZXIvc3JjL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUNBOzs7OztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

eval("Object.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _routes = __webpack_require__(5);\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar express = __webpack_require__(8);\nvar logger = __webpack_require__(9);\nvar bodyParser = __webpack_require__(10);\nvar path = __webpack_require__(0);\n\n// Middleware: Ensure HTTPS not HTTP\nvar redirectToHTTPS = __webpack_require__(11).redirectToHTTPS;\n\nvar __dirname = process.env.PWD; // Could break on prod\n\nvar app = express(); // Setup express app\n\n// Allow cross origin requests with authorization (for API purposes)\napp.all('*', function (req, res, next) {\n    res.header('Access-Control-Allow-Origin', '*');\n    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');\n    res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token, AUTHORIZATION');\n\n    // Intercept OPTIONS method\n    if (req.method === 'OPTIONS') {\n        res.send(200);\n    } else {\n        next();\n    }\n});\n\n// Setup authentication and security\n// sessionAuth(app);\n\n// Don't redirect if the hostname is `localhost:port` or the route is `/insecure`\napp.use(redirectToHTTPS([/localhost:(\\d{4})/], [/\\/insecure/]));\n\n// Log requests to the console.\napp.use(logger('dev'));\n\n// Parse incoming requests data (https://github.com/expressjs/body-parser)\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({ extended: false }));\napp.use('/scripts', express['static'](path.join(__dirname, '../../client/dist')));\n\n// Require routes and simultaneously attach app\n(0, _routes2['default'])(app);\n\n// Catch all if the routes doesn't find a valid URL\napp.get('*', function (req, res) {\n    return res.status(200).send('Nothing here yet...');\n});\n\nexports['default'] = app;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zZXJ2ZXIvc3JjL2FwcC5qcz9kMGMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xuXG5jb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuY29uc3QgbG9nZ2VyID0gcmVxdWlyZSgnbW9yZ2FuJyk7XG5jb25zdCBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbi8vIE1pZGRsZXdhcmU6IEVuc3VyZSBIVFRQUyBub3QgSFRUUFxuY29uc3QgcmVkaXJlY3RUb0hUVFBTID0gcmVxdWlyZSgnZXhwcmVzcy1odHRwLXRvLWh0dHBzJykucmVkaXJlY3RUb0hUVFBTO1xuXG5jb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmVudi5QV0Q7IC8vIENvdWxkIGJyZWFrIG9uIHByb2RcblxuY29uc3QgYXBwID0gZXhwcmVzcygpOyAvLyBTZXR1cCBleHByZXNzIGFwcFxuXG4vLyBBbGxvdyBjcm9zcyBvcmlnaW4gcmVxdWVzdHMgd2l0aCBhdXRob3JpemF0aW9uIChmb3IgQVBJIHB1cnBvc2VzKVxuYXBwLmFsbCgnKicsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJyk7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdQVVQsIEdFVCwgUE9TVCwgREVMRVRFLCBPUFRJT05TJyk7XG4gICAgcmVzLmhlYWRlcihcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLFxuICAgICAgICAnYWNjZXB0LCBjb250ZW50LXR5cGUsIHgtcGFyc2UtYXBwbGljYXRpb24taWQsIHgtcGFyc2UtcmVzdC1hcGkta2V5LCB4LXBhcnNlLXNlc3Npb24tdG9rZW4sIEFVVEhPUklaQVRJT04nXG4gICAgKTtcblxuICAgIC8vIEludGVyY2VwdCBPUFRJT05TIG1ldGhvZFxuICAgIGlmIChyZXEubWV0aG9kID09PSAnT1BUSU9OUycpIHtcbiAgICAgICAgcmVzLnNlbmQoMjAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0KCk7XG4gICAgfVxufSk7XG5cbi8vIFNldHVwIGF1dGhlbnRpY2F0aW9uIGFuZCBzZWN1cml0eVxuLy8gc2Vzc2lvbkF1dGgoYXBwKTtcblxuLy8gRG9uJ3QgcmVkaXJlY3QgaWYgdGhlIGhvc3RuYW1lIGlzIGBsb2NhbGhvc3Q6cG9ydGAgb3IgdGhlIHJvdXRlIGlzIGAvaW5zZWN1cmVgXG5hcHAudXNlKHJlZGlyZWN0VG9IVFRQUyhbL2xvY2FsaG9zdDooXFxkezR9KS9dLCBbL1xcL2luc2VjdXJlL10pKTtcblxuLy8gTG9nIHJlcXVlc3RzIHRvIHRoZSBjb25zb2xlLlxuYXBwLnVzZShsb2dnZXIoJ2RldicpKTtcblxuLy8gUGFyc2UgaW5jb21pbmcgcmVxdWVzdHMgZGF0YSAoaHR0cHM6Ly9naXRodWIuY29tL2V4cHJlc3Nqcy9ib2R5LXBhcnNlcilcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xuYXBwLnVzZSgnL3NjcmlwdHMnLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vLi4vY2xpZW50L2Rpc3QnKSkpO1xuXG4vLyBSZXF1aXJlIHJvdXRlcyBhbmQgc2ltdWx0YW5lb3VzbHkgYXR0YWNoIGFwcFxucm91dGVzKGFwcCk7XG5cbi8vIENhdGNoIGFsbCBpZiB0aGUgcm91dGVzIGRvZXNuJ3QgZmluZCBhIHZhbGlkIFVSTFxuYXBwLmdldCgnKicsIChyZXEsIHJlcykgPT4gcmVzLnN0YXR1cygyMDApLnNlbmQoJ05vdGhpbmcgaGVyZSB5ZXQuLi4nKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzZXJ2ZXIvc3JjL2FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

eval("Object.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _path = __webpack_require__(0);\n\nvar path = _interopRequireWildcard(_path);\n\nvar _apiRoutes = __webpack_require__(6);\n\nvar _apiRoutes2 = _interopRequireDefault(_apiRoutes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }\n\n// Test\n\n// Requires an app as an input so can direct the user accordingly\nexports['default'] = function (app) {\n    /* ********************  Routes  ******************** */\n    (0, _apiRoutes2['default'])(app);\n\n    /* ********************  Client  ******************** */\n\n    // Serve the static client index.js build file\n    app.get('/scripts/index.js', function (req, res) {\n        var __dirname = process.env.PWD;\n        res.sendFile('index.js', { root: path.join(__dirname, './client/dist') });\n    });\n\n    app.get('/favicon.png', function (req, res) {\n        var __dirname = process.env.PWD;\n        res.sendFile('favicon.png', { root: path.join(__dirname, './client/dist') });\n    });\n\n    // Client app entry index.html file - react router\n    app.get('*', function (req, res) {\n        var __dirname = process.env.PWD;\n        res.sendFile('index.html', { root: path.join(__dirname, './client/dist') }); // Render client\n    });\n};\n\n// Functional controllers go here:\n// ...\n\n// Make modular so not all routes are here//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zZXJ2ZXIvc3JjL3JvdXRlcy9pbmRleC5qcz9iOGU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5cbi8vIEZ1bmN0aW9uYWwgY29udHJvbGxlcnMgZ28gaGVyZTpcbi8vIC4uLlxuXG4vLyBNYWtlIG1vZHVsYXIgc28gbm90IGFsbCByb3V0ZXMgYXJlIGhlcmVcbmltcG9ydCBhcGlSb3V0ZXMgZnJvbSAnLi9hcGlSb3V0ZXMnOyAvLyBUZXN0XG5cbi8vIFJlcXVpcmVzIGFuIGFwcCBhcyBhbiBpbnB1dCBzbyBjYW4gZGlyZWN0IHRoZSB1c2VyIGFjY29yZGluZ2x5XG5leHBvcnQgZGVmYXVsdCAoYXBwKSA9PiB7XG4gICAgLyogKioqKioqKioqKioqKioqKioqKiogIFJvdXRlcyAgKioqKioqKioqKioqKioqKioqKiogKi9cbiAgICBhcGlSb3V0ZXMoYXBwKTtcblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqICBDbGllbnQgICoqKioqKioqKioqKioqKioqKioqICovXG5cbiAgICAvLyBTZXJ2ZSB0aGUgc3RhdGljIGNsaWVudCBpbmRleC5qcyBidWlsZCBmaWxlXG4gICAgYXBwLmdldCgnL3NjcmlwdHMvaW5kZXguanMnLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5lbnYuUFdEO1xuICAgICAgICByZXMuc2VuZEZpbGUoJ2luZGV4LmpzJywgeyByb290OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jbGllbnQvZGlzdCcpIH0pO1xuICAgIH0pO1xuXG4gICAgYXBwLmdldCgnL2Zhdmljb24ucG5nJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuZW52LlBXRDtcbiAgICAgICAgcmVzLnNlbmRGaWxlKCdmYXZpY29uLnBuZycsIHsgcm9vdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY2xpZW50L2Rpc3QnKSB9KTtcbiAgICB9KTtcblxuICAgIC8vIENsaWVudCBhcHAgZW50cnkgaW5kZXguaHRtbCBmaWxlIC0gcmVhY3Qgcm91dGVyXG4gICAgYXBwLmdldCgnKicsIChyZXEsIHJlcykgPT4ge1xuICAgICAgICBjb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmVudi5QV0Q7XG4gICAgICAgIHJlcy5zZW5kRmlsZSgnaW5kZXguaHRtbCcsIHsgcm9vdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY2xpZW50L2Rpc3QnKSB9KTsgLy8gUmVuZGVyIGNsaWVudFxuICAgIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzZXJ2ZXIvc3JjL3JvdXRlcy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBS0E7QUFDQTs7Ozs7OztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlCQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

eval("Object.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _controllers = __webpack_require__(7);\n\nexports['default'] = function (app) {\n    app.get('/api/components', _controllers.getSchema);\n    app.get('/api/sample', _controllers.sampleSchema);\n    app.post('/api/update', _controllers.updateSchema);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zZXJ2ZXIvc3JjL3JvdXRlcy9hcGlSb3V0ZXMuanM/MDRkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTY2hlbWEsIHVwZGF0ZVNjaGVtYSwgc2FtcGxlU2NoZW1hIH0gZnJvbSAnLi4vY29udHJvbGxlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwKSA9PiB7XG4gICAgYXBwLmdldCgnL2FwaS9jb21wb25lbnRzJywgZ2V0U2NoZW1hKTtcbiAgICBhcHAuZ2V0KCcvYXBpL3NhbXBsZScsIHNhbXBsZVNjaGVtYSk7XG4gICAgYXBwLnBvc3QoJy9hcGkvdXBkYXRlJywgdXBkYXRlU2NoZW1hKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc2VydmVyL3NyYy9yb3V0ZXMvYXBpUm91dGVzLmpzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {Object.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.updateSchema = exports.sampleSchema = exports.getSchema = undefined;\n\nvar _schema = __webpack_require__(12);\n\nvar _schema2 = _interopRequireDefault(_schema);\n\nvar _sampleSchema = __webpack_require__(16);\n\nvar _sampleSchema2 = _interopRequireDefault(_sampleSchema);\n\nvar _helpers = __webpack_require__(15);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar path = __webpack_require__(0); // File path resolution\nvar util = __webpack_require__(14); // Printing nested objects\n\n// The current data schema\n// For development purposes\n\n// Helper functions\nvar getSchema = exports.getSchema = function getSchema(req, res) {\n    res.status(200).send(_schema2['default']);\n};\n\n// For hardcoded scheme\nvar sampleSchema = exports.sampleSchema = function sampleSchema(req, res) {\n    res.status(200).send(_sampleSchema2['default']);\n};\n\nvar updateSchema = exports.updateSchema = async function updateSchema(req, res) {\n    console.log(req.body);\n\n    var data = Object.assign({}, _schema2['default'], req.body);\n\n    var filepath = path.resolve(__dirname, '../data/schemaTest.js');\n    var contents = 'export default ' + String(util.inspect(data, false, null));\n\n    var response = await (0, _helpers.writeFile)(filepath, contents);\n\n    if (response.success) {\n        // The file was saved properly\n        res.status(200).send(response.contents);\n    } else {\n        // File wasn't saved correctly\n        res.status(500).send(response);\n    }\n};\n/* WEBPACK VAR INJECTION */}.call(exports, \"server/src/controllers\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zZXJ2ZXIvc3JjL2NvbnRyb2xsZXJzL2luZGV4LmpzP2Q0OGQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTsgLy8gRmlsZSBwYXRoIHJlc29sdXRpb25cbmNvbnN0IHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7IC8vIFByaW50aW5nIG5lc3RlZCBvYmplY3RzXG5cbi8vIFRoZSBjdXJyZW50IGRhdGEgc2NoZW1hXG5pbXBvcnQgc2NoZW1hIGZyb20gJy4uL2RhdGEvc2NoZW1hJztcbmltcG9ydCBzYW1wbGVTY2hlbWFEYXRhIGZyb20gJy4uL2RhdGEvc2FtcGxlU2NoZW1hJzsgLy8gRm9yIGRldmVsb3BtZW50IHB1cnBvc2VzXG5cbi8vIEhlbHBlciBmdW5jdGlvbnNcbmltcG9ydCB7XG4gICAgd3JpdGVGaWxlLFxufSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5leHBvcnQgY29uc3QgZ2V0U2NoZW1hID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoc2NoZW1hKTtcbn07XG5cbi8vIEZvciBoYXJkY29kZWQgc2NoZW1lXG5leHBvcnQgY29uc3Qgc2FtcGxlU2NoZW1hID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLiBzdGF0dXMoMjAwKS5zZW5kKHNhbXBsZVNjaGVtYURhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNjaGVtYSA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIC4uLnNjaGVtYSxcbiAgICAgICAgLi4ucmVxLmJvZHksXG4gICAgfTtcblxuICAgIGNvbnN0IGZpbGVwYXRoID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL2RhdGEvc2NoZW1hVGVzdC5qcycpO1xuICAgIGNvbnN0IGNvbnRlbnRzID0gYGV4cG9ydCBkZWZhdWx0ICR7dXRpbC5pbnNwZWN0KGRhdGEsIGZhbHNlLCBudWxsKX1gO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB3cml0ZUZpbGUoZmlsZXBhdGgsIGNvbnRlbnRzKTtcblxuICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgIC8vIFRoZSBmaWxlIHdhcyBzYXZlZCBwcm9wZXJseVxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChyZXNwb25zZS5jb250ZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRmlsZSB3YXNuJ3Qgc2F2ZWQgY29ycmVjdGx5XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHJlc3BvbnNlKTtcbiAgICB9XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc2VydmVyL3NyYy9jb250cm9sbGVycy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7QUFUQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj9kMmQyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiPzE5ZWYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9yZ2FuXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiPzQ2NTciXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-to-https\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLWh0dHAtdG8taHR0cHNcIj9hZmE0Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3MtaHR0cC10by1odHRwc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3MtaHR0cC10by1odHRwc1wiXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

eval("Object.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports['default'] = {\n    defaults: {\n        primaryColor: '#3286A8'\n    },\n    components: [{\n        type: 'navigation-bar',\n        options: {}\n    }]\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc2VydmVyL3NyYy9kYXRhL3NjaGVtYS5qcz8xMzE0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0czoge1xuICAgICAgICBwcmltYXJ5Q29sb3I6ICcjMzI4NkE4JyxcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ25hdmlnYXRpb24tYmFyJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICBdLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzZXJ2ZXIvc3JjL2RhdGEvc2NoZW1hLmpzIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUZBO0FBTEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiPzJlMDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmc1wiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dGlsXCI/NzBjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidXRpbFwiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

eval("Object.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.writeFile = undefined;\n\nvar _fs = __webpack_require__(13);\n\nvar fs = _interopRequireWildcard(_fs);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }\n\n// For writing to file system\n\n// Wrap the file saving with an async promise\nvar writeFile = exports.writeFile = async function writeFile(filepath, contents) {\n    return new Promise(function (resolve, reject) {\n        // Update the file\n        fs.writeFile(filepath, contents, function (err) {\n            if (err) {\n                return reject({\n                    success: false,\n                    error: err\n                });\n            }\n\n            resolve({\n                success: true,\n                filepath: filepath,\n                contents: contents\n            });\n        });\n    });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc2VydmVyL3NyYy9jb250cm9sbGVycy9oZWxwZXJzLmpzP2NiOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnOyAvLyBGb3Igd3JpdGluZyB0byBmaWxlIHN5c3RlbVxuXG4vLyBXcmFwIHRoZSBmaWxlIHNhdmluZyB3aXRoIGFuIGFzeW5jIHByb21pc2VcbmV4cG9ydCBjb25zdCB3cml0ZUZpbGUgPSBhc3luYyAoZmlsZXBhdGgsIGNvbnRlbnRzKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBmaWxlXG4gICAgICAgIGZzLndyaXRlRmlsZShmaWxlcGF0aCwgY29udGVudHMsIChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgZmlsZXBhdGgsXG4gICAgICAgICAgICAgICAgY29udGVudHMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNlcnZlci9zcmMvY29udHJvbGxlcnMvaGVscGVycy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBREE7QUFDQTs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

eval("Object.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n// Hard coded for testing purposes\nexports['default'] = {\n    defaults: {\n        primaryColor: '#3286A8'\n    },\n    components: [{\n        type: 'title',\n        id: 'title-1',\n        content: 'I am a title',\n        description: {\n            textColor: 'default',\n            size: 0,\n            backgroundColor: 'white',\n            font: {\n                weight: 0,\n                oblique: false,\n                underline: false\n            }\n        }\n    }, {\n        type: 'paragraph',\n        id: 'paragraph-1',\n        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere id magna sit amet sodales. Aenean in elit vel nisi luctus placerat. Curabitur non consequat massa. Donec turpis eros, molestie quis egestas sodales, pharetra sed massa. Etiam facilisis ac nisl eget imperdiet. Curabitur tristique aliquet nulla, blandit lacinia massa pulvinar eget. Praesent nunc lorem, tincidunt eget quam eu, consectetur interdum sem. Aenean mollis ultrices neque. Mauris interdum vel arcu at molestie. Fusce rhoncus ut nibh eu congue. Pellentesque cursus dolor est. Fusce pulvinar nulla ut ante mattis auctor. Fusce pretium tortor diam, eu tincidunt tortor interdum vel. Ut fringilla eu nunc a consequat. Ut facilisis imperdiet fermentum.',\n        description: {\n            textColor: 'default',\n            size: 0,\n            backgroundColor: 'white',\n            font: {\n                weight: 0,\n                oblique: false,\n                underline: false\n            }\n        }\n    }]\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc2VydmVyL3NyYy9kYXRhL3NhbXBsZVNjaGVtYS5qcz9jYmZjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEhhcmQgY29kZWQgZm9yIHRlc3RpbmcgcHVycG9zZXNcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0czoge1xuICAgICAgICBwcmltYXJ5Q29sb3I6ICcjMzI4NkE4JyxcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3RpdGxlJyxcbiAgICAgICAgICAgIGlkOiAndGl0bGUtMScsXG4gICAgICAgICAgICBjb250ZW50OiAnSSBhbSBhIHRpdGxlJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICAgICAgdGV4dENvbG9yOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgc2l6ZTogMCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgZm9udDoge1xuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIG9ibGlxdWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGFyYWdyYXBoJyxcbiAgICAgICAgICAgIGlkOiAncGFyYWdyYXBoLTEnLFxuICAgICAgICAgICAgY29udGVudDogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE51bGxhIHBvc3VlcmUgaWQgbWFnbmEgc2l0IGFtZXQgc29kYWxlcy4gQWVuZWFuIGluIGVsaXQgdmVsIG5pc2kgbHVjdHVzIHBsYWNlcmF0LiBDdXJhYml0dXIgbm9uIGNvbnNlcXVhdCBtYXNzYS4gRG9uZWMgdHVycGlzIGVyb3MsIG1vbGVzdGllIHF1aXMgZWdlc3RhcyBzb2RhbGVzLCBwaGFyZXRyYSBzZWQgbWFzc2EuIEV0aWFtIGZhY2lsaXNpcyBhYyBuaXNsIGVnZXQgaW1wZXJkaWV0LiBDdXJhYml0dXIgdHJpc3RpcXVlIGFsaXF1ZXQgbnVsbGEsIGJsYW5kaXQgbGFjaW5pYSBtYXNzYSBwdWx2aW5hciBlZ2V0LiBQcmFlc2VudCBudW5jIGxvcmVtLCB0aW5jaWR1bnQgZWdldCBxdWFtIGV1LCBjb25zZWN0ZXR1ciBpbnRlcmR1bSBzZW0uIEFlbmVhbiBtb2xsaXMgdWx0cmljZXMgbmVxdWUuIE1hdXJpcyBpbnRlcmR1bSB2ZWwgYXJjdSBhdCBtb2xlc3RpZS4gRnVzY2UgcmhvbmN1cyB1dCBuaWJoIGV1IGNvbmd1ZS4gUGVsbGVudGVzcXVlIGN1cnN1cyBkb2xvciBlc3QuIEZ1c2NlIHB1bHZpbmFyIG51bGxhIHV0IGFudGUgbWF0dGlzIGF1Y3Rvci4gRnVzY2UgcHJldGl1bSB0b3J0b3IgZGlhbSwgZXUgdGluY2lkdW50IHRvcnRvciBpbnRlcmR1bSB2ZWwuIFV0IGZyaW5naWxsYSBldSBudW5jIGEgY29uc2VxdWF0LiBVdCBmYWNpbGlzaXMgaW1wZXJkaWV0IGZlcm1lbnR1bS4nLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgICAgICBzaXplOiAwLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBmb250OiB7XG4gICAgICAgICAgICAgICAgICAgIHdlaWdodDogMCxcbiAgICAgICAgICAgICAgICAgICAgb2JsaXF1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHVuZGVybGluZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc2VydmVyL3NyYy9kYXRhL3NhbXBsZVNjaGVtYS5qcyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSkE7QUFKQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFKQTtBQUpBO0FBcEJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n");

/***/ })
/******/ ])));