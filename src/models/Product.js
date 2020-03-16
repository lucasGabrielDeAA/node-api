const {Schema, model} = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Product = Schema({
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
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
});

//Adding paginate plugin
Product.plugin(mongoosePaginate);

module.exports = model('Product', Product);
