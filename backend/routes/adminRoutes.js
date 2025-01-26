const express = require('express');
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
} = require('../controllers/authController');

const { 
  getDashboardMetrics, 
  getAllUsers, 
  deleteUser,
  createRoom, 
  updateRoom, 
  deleteRoom, 
  getAllRooms,
  getAllBookings,
  getRoomByid  
} = require('../controllers/adminController');

const router = express.Router();

//! Auth routes
router.post('/register', registerAdmin); // Admin registration
router.post('/login', loginAdmin);       // Admin login
router.post('/logout', logoutAdmin);     // Admin logout

//! Dashboard metrics
router.get('/dashboard', isAuthenticated, isAdmin, getDashboardMetrics); //?

//! User management
router.get('/users', isAuthenticated, isAdmin, getAllUsers); //? Get all users
router.get('/bookings', isAuthenticated, isAdmin, getAllBookings); //? Get all users
router.delete('/users/:id', isAuthenticated, isAdmin, deleteUser); //? Delete user by ID

//! Room management
router.post('/rooms', isAuthenticated, isAdmin, createRoom); //? Create a room
router.put('/rooms/:id', isAuthenticated, isAdmin, updateRoom); //? Update a room
router.delete('/rooms/:id', isAuthenticated, isAdmin, deleteRoom); //? Delete a room
router.get('/rooms', isAuthenticated, isAdmin, getAllRooms); //? Get all rooms

router.get('/rooms/:id', isAuthenticated, isAdmin, getRoomByid )

module.exports = router;
