const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other']
    },
    dateOfBirth: {
        type: Date,
    },
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
    }],
    bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User', userSchema);
