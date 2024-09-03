const axios = require('axios');

// Configuration
const saleId = '66d54ba96302c31cda48fef3'; // Replace with your sale ID
const userId = '66d54a246302c31cda48feed'; // Replace with your user ID
const numberOfRequests = 100; // Number of concurrent requests
const purchaseQuantity = 1; // Quantity to purchase

// Function to make a purchase
async function makePurchase() {
    try {
        const response = await axios.post(`http://localhost:5000/sales/${saleId}/purchase`, {
            userId: userId,
            quantity: purchaseQuantity
        });
        console.log('Purchase successful:', response.data);
    } catch (error) {
        console.log('Purchase failed:', error.response ? error.response.data : error.message);
    }
}

// Simulate concurrent requests
async function simulateConcurrentPurchases() {
    const promises = [];
    for (let i = 0; i < numberOfRequests; i++) {
        promises.push(makePurchase());
    }
    await Promise.all(promises);
    console.log('All requests completed.');
}

simulateConcurrentPurchases();
