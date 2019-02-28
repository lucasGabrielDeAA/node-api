const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Initializing app
const app = express();

//Initializing DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true }
);

//Importing application's models
requireDir('./src/models/');

const Product = mongoose.model('Product');

//First route
app.get('/', (req, res) => {
    Product.create({
        title: 'Test',
        description: 'Product test',
        url: 'www.google.com',
    });

    return res.send('Hello developer');
});

app.listen(3001);
