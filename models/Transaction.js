const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Transaction', TransactionSchema);
