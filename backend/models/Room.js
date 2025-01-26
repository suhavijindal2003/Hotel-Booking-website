const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    name: { type: String,  },
    description: { type: String,  },
    price: { type: Number,  },
    maxGuests: { type: Number,  },
    images: [String], // Array of image URLs
    amenities: [String], // Array of amenities
    isAvailable: { type: Boolean, default: true },
});

module.exports = mongoose.model('Room', RoomSchema);
