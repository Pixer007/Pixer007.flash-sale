const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const saleRoutes = require('./routes/saleRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const Product = require('./models/Product'); // Importing the Product model
const User = require('./models/User');  // Importing the User Model
const app = express();

// Middleware
app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/sales', saleRoutes);
app.use('/transactions', transactionRoutes);

// Test route
app.get('/', (req, res) => {
    res.send('Flipzon Flash Sale API');
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/flipzon', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});




