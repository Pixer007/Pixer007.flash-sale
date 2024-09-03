const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    start_time: { type: Date, required: true },
    end_time: { type: Date },
    status: { type: String, enum: ['Scheduled', 'Active', 'Ended'], default: 'Scheduled' },
}, { timestamps: true });

module.exports = mongoose.model('Sale', SaleSchema);
