require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
//Servir contenido estático --> express.static('rutaLocal') 
app.use( express.static('public') );

//Creación local de página 'Hola Mundo' simple
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Adrián',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Adrián',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Adrián',
        titulo: 'Curso de Node'
    });
});

//ERRROR
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
});