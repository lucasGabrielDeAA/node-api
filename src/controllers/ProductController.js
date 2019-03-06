const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async all(req, res) {
        const products = await Product.find();

        return res.json(products);
    },

    async save(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },
};
