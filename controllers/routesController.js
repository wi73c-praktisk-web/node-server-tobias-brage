const url = require('url');

module.exports = {
	init: function (req, res) {
		var pathname = url.parse(req.url, true).pathname;
		if (pathname === '/forside') {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.write('<a style="float:left;color:#555555;margin:0 20px 0 0;" href="/forside">Forside</a><a style="float:left;color:#555555;padding:0 20px 0 0;" href="/kontakt">Kontakt</a><a style="float:left;color:#555555;padding:0 20px 0 0;" href="/omos">Om os</a><br><h1>Forside</h1>');
			res.end();
		} else if (pathname === '/kontakt') {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.write('<a style="float:left;color:#555555;margin:0 20px 0 0;" href="/forside">Forside</a><a style="float:left;color:#555555;padding:0 20px 0 0;" href="/kontakt">Kontakt</a><a style="float:left;color:#555555;padding:0 20px 0 0;" href="/omos">Om os</a><br><h1>Kontakt</h1>');
			res.end();
			console.log('kontakt side');
		} else if (pathname === '/omos') {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.write('<a style="float:left;color:#555555;margin:0 20px 0 0;" href="/forside">Forside</a><a style="float:left;color:#555555;padding:0 20px 0 0;" href="/kontakt">Kontakt</a><a style="float:left;color:#555555;padding:0 20px 0 0;" href="/omos">Om os</a><br><h1>Om os</h1>');
			res.end();
			console.log('om os side');
		} else {
			res.statusCode = 404;
			res.end("ups...");
		}
	}
};