'use strict'

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');

//conectar ao banco
mongoose.connect('mongodb://DeAngelis84:first821068@ds157383.mlab.com:57383/first_node',{ useNewUrlParser: true });

//Carregar Models
const Product = require('./models/product').default;
//Rotas
const indexRoute = require('./routes/indexRoute');
const productRute = require('./routes/productRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/',indexRoute);
app.use('/products',productRute);


module.exports = app;