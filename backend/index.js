const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const cors = require("cors"); 

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to database
connectDB();

// API Routes
app.use('/api/users', userRoutes);  // User routes
app.use('/api/admins', adminRoutes); // Admin routes

// Root endpoint
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.yellow.bold);
});
