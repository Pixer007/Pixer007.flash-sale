const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    user_authentication_token: { type: String, required: true, unique: true },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
