const User = require('../models/User');
const Room = require('../models/Room');
const Booking = require('../models/Booking');

const getDashboardMetrics = async (req, res) => {
  try {
    // Count documents for totals
    const totalUsers = await User.countDocuments();
    const totalRooms = await Room.countDocuments();
    const totalBookings = await Booking.countDocuments();

    // Fetch recently added rooms and users
    const recentlyAddedRooms = await Room.find().sort({ createdAt: -1 }).limit(5); // Last 5 rooms
    const recentlyAddedUsers = await User.find().sort({ createdAt: -1 }).limit(5); // Last 5 users

    // Send the metrics as response
    res.status(200).json({
      totalUsers,
      totalRooms,
      totalBookings,
      recentlyAddedRooms,
      recentlyAddedUsers,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dashboard data', error });
  }
};


//? create room
const createRoom = async (req, res) => {
  const { name, description, price, maxGuests, images, amenities } = req.body;

  try {
    const room = await Room.create({ name, description, price, maxGuests, images, amenities });

    res.status(201).json({ message: 'Room created successfully', room });
  } catch (error) {
    res.status(500).json({ message: 'Error creating room', error });
  }
};

//? update room

const updateRoom = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const room = await Room.findByIdAndUpdate(id, updates, { new: true });
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    res.status(200).json({ message: 'Room updated successfully', room });
  } catch (error) {
    res.status(500).json({ message: 'Error updating room', error });
  }
};


//? get room by id 
const getRoomByid = async (req, res) => {
  const { id } = req.params;

  try {
      const room = await Room.findById(id);
      if (!room) {
          return res.status(404).json({ message: "Room not found" });
      }
      res.status(200).json(room);
  } catch (error) {
      res.status(500).json({ message: "Error fetching room details", error });
  }
}

//? delete room

const deleteRoom = async (req, res) => {
  const { id } = req.params;

  try {
    const room = await Room.findByIdAndDelete(id);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    res.status(200).json({ message: 'Room deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting room', error });
  }
};

//? get all users

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

// const getAllBookings = async (req, res) => {
//   try {
//     const Bookings = await Booking.find();
//     res.status(200).json(Bookings);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching bookings', error });
//   }
// };

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('room', 'name') // Populates room name
      .populate('user', 'username'); // Populates user name

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
};


//? get all rooms
const getAllRooms = async (req, res) => {
  try {
    const { page = 1, limit = 10, sortBy = 'createdAt', order = 'desc' } = req.query;

    // Pagination options
    const skip = (page - 1) * limit;

    // Fetch rooms with pagination and sorting
    const rooms = await Room.find()
      .sort({ [sortBy]: order === 'asc' ? 1 : -1 }) // Sorting (ascending or descending)
      .skip(parseInt(skip))
      .limit(parseInt(limit));

    // Count total rooms
    const totalRooms = await Room.countDocuments();

    res.status(200).json({
      totalRooms,
      page: parseInt(page),
      totalPages: Math.ceil(totalRooms / limit),
      rooms,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching rooms', error });
  }
};



//? delete users
const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};

module.exports = {
  getDashboardMetrics,
  createRoom,
  updateRoom,
  deleteRoom,
  getAllUsers,
  getAllRooms,
  deleteUser,
  getAllBookings,
  getRoomByid
}