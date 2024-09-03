const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    total_stock: { type: Number, required: true },
    available_stock: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
