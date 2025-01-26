const express = require('express');
const { isAuthenticated, isUser } = require('../middleware/auth');
const {
  registerUser,
  loginUser,
  logoutUser,
} = require('../controllers/authController');
const {
  getProfile,
  updateProfile,
  searchRooms,
  getRoomDetails,
  createBooking,
  addReview,
  getReviews,
} = require('../controllers/userController');

const router = express.Router();

// Auth routes
router.post('/register', registerUser); // User registration
router.post('/login', loginUser);       // User login
router.post('/logout', logoutUser);     // User logout

// Profile routes
router.get('/profile', isAuthenticated, isUser, getProfile); // Get user profile
router.put('/profile', isAuthenticated, isUser, updateProfile); // Update user profile


// Room search and details routes
router.get('/rooms/search', searchRooms); // Search for rooms based on check-in, check-out, etc.
router.get('/rooms/:id', getRoomDetails); // Get detailed information about a room

// Booking routes
router.post('/rooms/:id/book', isAuthenticated, createBooking); // Create a booking for a room

// Review routes
router.post('/rooms/:roomId/reviews', isAuthenticated, addReview); // Add a review for a room
router.get('/rooms/:roomId/reviews', getReviews); // Get all reviews for a specific room

module.exports = router;
