const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
    });

    const output = {
        name: 'Germán',
        age: 22,
        url: req.url,
    };

    res.write(JSON.stringify(output));

    res.end();
}).listen(8080);

console.log('Escuchando el puerto 8080');
