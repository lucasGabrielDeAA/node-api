const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Product = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

//Adding paginate plugin
Product.plugin(mongoosePaginate);

module.exports = mongoose.model('Product', Product);
