const http = require('http');

http.createServer((req, res) =>{
    // res.writeHead(200, {'Content-Type': 'application/json'})
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(200, {'Content-Type': 'application/csv'})

    res.write('id, nombre\n');
    res.write('1, Fernando\n');
    res.write('2, María\n');
    res.write('3, Juan\n');
    res.end();

    const persona = {
        id: 1,
        nombre: 'Fernando'
    }

    res.write('Hola Mundo');
    res.end;
}).listen(8080);