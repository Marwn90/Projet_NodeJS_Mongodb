const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://Martin_Register:0000@cluster0.ge3qp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => {
    console.log('Connecter a la base de données');
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'pug');

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);


const port = 3000;
app.listen(port, () => console.log('Server lancé sur le port ${port}.'));