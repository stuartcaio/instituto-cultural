const express = require('express');
const session = require('express-session');
const fileupload = require('express-fileupload');
const cors = require('cors');
const path = require('path');
const app = express();
const Artigo = require('./models/Artigo');
const porta = 8080;

app.use(session({secret: 'oinfkwsjahdlonjqskldnjaklsnjdklaunhsdkljn'}));
app.use(express.urlencoded());
app.use(express.json());
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'temp')
}));
app.use(cors());

app.get('/artigosAPI', (req, res) => {
    Artigo.findAll().then((artigos) => {
        res.status(200).send(artigos);
        console.log(artigos);
    });
});

app.get('/artigoAPI/:id', (req, res) => {
    Artigo.findByPk(req.params.id).then((artigo) => {
        res.status(200).send(artigo);
    })
})

app.listen(porta, () => {
    console.log(`Rodando a porta ${porta}.`);
});