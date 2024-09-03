const mongoose = require('mongoose');
const faker = require('@faker-js/faker');
const User = require('./models/User');

// Function to create a single user
async function createUser() {
    const name = faker.name.fullName();  // Use faker.name.fullName() instead
    const email = faker.internet.email();
    const userAuthenticationToken = faker.string.uuid();

    const user = new User({
        name: name,
        email: email,
        user_authentication_token: userAuthenticationToken,
    });

    await user.save();
    console.log(`User ${name} created`);
}

// Function to create multiple users
async function createUsers(count) {
    for (let i = 0; i < count; i++) {
        await createUser();
    }
    console.log(`${count} users created successfully.`);
}

// Connect to MongoDB and create users
mongoose.connect('mongodb://localhost:27017/flipzon', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(async () => {
        console.log('MongoDB connected successfully');
        await createUsers(10);  // Adjust the number of users to create here
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });
