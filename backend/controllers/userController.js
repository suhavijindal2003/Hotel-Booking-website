const Booking = require('../models/Booking');
const User = require('../models/User');
const Room = require('../models/Room');
const Review = require('../models/Review');


//? get user profile
const getProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Get the user ID from the authenticated token

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        name: user.name,
        gender: user.gender,
        dateOfBirth: user.dateOfBirth,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


// Update User Profile (name, gender, dateOfBirth)
const updateProfile = async (req, res) => {
  try {
    const { name, gender, dateOfBirth } = req.body;
    const userId = req.user.id; // Get the user ID from the authenticated token

    // Find and update the user
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, gender, dateOfBirth },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'Profile updated successfully',
      user: {
        id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        name: updatedUser.name,
        gender: updatedUser.gender,
        dateOfBirth: updatedUser.dateOfBirth,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

//? rooms routes
const searchRooms = async (req, res) => {
  const { checkIn, checkOut, adults, children } = req.body;

  try {
    // Find all rooms that are available
    const rooms = await Room.find({ isAvailable: true });

    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching rooms', error });
  }
};

//? room details

const getRoomDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const room = await Room.findById(id);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching room details', error });
  }
};

//? confirm booking

const createBooking = async (req, res) => {
  const { roomId, checkIn, checkOut, adults, children, billingInfo, totalPrice } = req.body;
  const userId = req.user.id; // Assume req.user contains authenticated user data

  try {
    // Check if the room is available
    const room = await Room.findById(roomId);

    // console.log('Room:', room); 
    if (!room || !room.isAvailable) {
      return res.status(400).json({ message: 'Room not available' });
    }

    // Create a booking
    const booking = await Booking.create({
      user: userId,
      room: roomId,
      checkIn,
      checkOut,
      adults,
      children,
      billingInfo,
      totalPrice,
    });

    // Mark the room as unavailable
    // room.isAvailable = false;
    await room.save();

    res.status(201).json({ message: 'Booking confirmed', booking });
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking', error });
  }
};



//? Add a review for a room
const addReview = async (req, res) => {
  try {
    const { roomId } = req.params;
    const { rating, comment } = req.body;
    const userId = req.user.id; // Assume the authenticated user's ID is available in `req.user`
    // Check if the room exists
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    
    // console.log(room);
    // Create a new review
    const review = new Review({
      user: userId,
      room: roomId,
      rating,
      comment,
    });

    await review.save();

    // Add the review to the room's reviews array
    // room.reviews.push(review._id);
    await room.save();

    res.status(201).json({ message: 'Review added successfully', review });
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).json({ message: 'Error adding review', error });
  }
};

//? Get all reviews for a specific room
const getReviews = async (req, res) => {
  try {
    const { roomId } = req.params;

    // Fetch all reviews for the given room
    const reviews = await Review.find({ room: roomId })
      .populate('user', 'username') // Include the reviewer's username
      .sort({ createdAt: -1 }); // Sort by newest first

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
};


module.exports = {
  getProfile,
  updateProfile,
  searchRooms,
  getRoomDetails,
  createBooking,
  addReview, getReviews
};
