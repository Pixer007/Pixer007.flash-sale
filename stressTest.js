const axios = require('axios');

const saleId = '66d54ba96302c31cda48fef3';  // Replace with your Sale ID
const userIds = [
    '66d54a246302c31cda48feed',  // Replace with actual User IDs
    '66d54b246302c31cda48feee',
    // Add more user IDs as needed
];

const numRequests = 100;  // Number of concurrent requests
const purchaseQuantity = 1;  // Quantity each user is trying to purchase

const makePurchase = async (userId) => {
    try {
        const response = await axios.post(`http://localhost:5000/sales/${saleId}/purchase`, {
            userId: userId,
            quantity: purchaseQuantity,
        });
        console.log(`User ${userId} purchase response:`, response.data);
    } catch (error) {
        console.error(`User ${userId} failed to purchase:`, error.response ? error.response.data : error.message);
    }
};

const runStressTest = async () => {
    const requests = [];
    for (let i = 0; i < numRequests; i++) {
        const userId = userIds[i % userIds.length];  // Cycle through the user IDs
        requests.push(makePurchase(userId));
    }
    await Promise.all(requests);
    console.log('Stress test completed');
};

runStressTest();
