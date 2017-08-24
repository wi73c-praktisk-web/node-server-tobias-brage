# Server med node

##server.js fil
```javascript
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const router = require('./controllers/routesController');

http.createServer(function (req, res) {
    router.init(req, res);
}).listen(port, hostname);
var name = 0;
console.log(`serveren kører på http://${hostname}:${port}/`);
```
##routeController.js fil
```javascript
const url = require('url');

module.exports = {
	init: function (req, res) {
		var pathname = url.parse(req.url, true).pathname;
		if (pathname === '/forside') {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.write('<h1>Forside</h1>');
			res.end();
		} else if (pathname === '/kontakt') {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.write('<h1>Kontakt</h1>');
			res.end();
			console.log('kontakt side');
		} else if (pathname === '/omos') {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.write('<h1>Om os</h1>');
			res.end();
			console.log('om os side');
		} else {
			res.statusCode = 404;
			res.end("ups...");
		}
	}
};
```