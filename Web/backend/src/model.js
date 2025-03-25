const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Email must be unique
    password: { type: String, required: true }, // Ensure password is provided
    address: { type: String, default: null }, // Default null if no booking
    PhoneNumber: { type: Number, default: null },
    date: { type: Date, default: null },  // Store date as Date object
    time: { type: String, default: null }, // Store time as a string (alternative)
    foodName: { type: String, default: null },
    numberOfGuest: { type: String, default: null },
    foodSize: { type: String, default: null }

});

const User = mongoose.model('User', userSchema);

module.exports = User;
