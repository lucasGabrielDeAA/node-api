const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.all);
routes.post('/products', ProductController.save);

module.exports = routes;
