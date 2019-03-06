const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async all(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({ }, { page, limit: 10 });

        return res.json(products);
    },

    async getByID(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async save(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    async remove(req, res) {
        try {
            await Product.findByIdAndRemove(req.params.id);

            return res.send('Product removed');
        } catch (error) {
            return res.send(`Could not remove the product with the specified id: ${req.params.id}`);
        }
    },
};
