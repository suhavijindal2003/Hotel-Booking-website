const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Admin = require('../models/Admin');

// Middleware to check if a user is authenticated
const isAuthenticated = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data to the request object
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

// Middleware to check if the authenticated user is a standard user
const isUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(403).json({ message: 'Access denied: Not a user' });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

// Middleware to check if the authenticated user is an admin
const isAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.findById(req.user.id);
    if (!admin) {
      return res.status(403).json({ message: 'Access denied: Not an admin' });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { isAuthenticated, isUser, isAdmin };
