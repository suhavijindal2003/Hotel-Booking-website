const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User',  },
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room',  },
    checkIn: { type: Date,  },
    checkOut: { type: Date,  },
    adults: { type: Number,  },
    children: { type: Number,  },
    billingInfo: {
        name: { type: String,  },
        email: { type: String,  },
        phone: { type: String,  },
        address: { type: String,  },
    },
    totalPrice: { type: Number,  },
    status: { type: String, enum: ['Pending', 'Confirmed', 'Cancelled'], default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
