const express = require('express');
const Sale = require('../models/Sale');
const Product = require('../models/Product');
const Transaction = require('../models/Transaction');  // Import the Transaction model

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { product, start_time, end_time } = req.body;

        if (!product || !start_time) {
            return res.status(400).json({ error: 'Product and start_time are required' });
        }

        const newSale = new Sale({
            product,
            start_time,
            end_time
        });

        const savedSale = await newSale.save();
        res.status(201).json(savedSale);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/:id/purchase', async (req, res) => {
    try {
        const saleId = req.params.id;
        const userId = req.body.userId;
        const quantity = req.body.quantity || 1;

        const sale = await Sale.findById(saleId).populate('product');
        if (!sale) return res.status(404).json({ error: 'Sale not found' });

        const product = sale.product;
        if (product.available_stock < quantity) {
            return res.status(400).json({ error: 'Not enough stock available' });
        }

        // Atomically decrement the stock
        const updatedProduct = await Product.findOneAndUpdate(
            { _id: product._id, available_stock: { $gte: quantity } },
            { $inc: { available_stock: -quantity } },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(400).json({ error: 'Unable to update stock, please try again' });
        }

        // Create a transaction
        const transaction = new Transaction({
            user: userId,
            product: product._id,  // Corrected from 'sale' to 'product'
            quantity: quantity,
            timestamp: new Date(),  // Corrected from 'transaction_time' to 'timestamp'
        });

        const savedTransaction = await transaction.save();

        res.status(201).json(savedTransaction);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
