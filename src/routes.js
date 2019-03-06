const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.all);
routes.get('/products/:id', ProductController.getByID);
routes.post('/products', ProductController.save);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.remove);

module.exports = routes;
