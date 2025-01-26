import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import SocialMedia from './components/Social';
import Navbar from './components/Header';
import Contentsection from './components/Contentsection';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Login from './components/Login';
import Adminlogin from './components/Adminlogin';
import Admindashboard from './components/Admindashboard';
import HotelList from './components/HotelList';
import RoomList from './components/RoomList';
import Adminbookinglist from './components/AdminbookingList';
import PaymentList from './components/PaymentList';
import ReviewList from './components/ReviewList';
import KingRoom from './components/RoomDescription/KingRoom';
import GardenViewRoom from './components/RoomDescription/GardenViewRoom';
import HighEndRoom from './components/RoomDescription/HighEndRoom';
import SingleRoom from './components/RoomDescription/SingleRoom';
import QueenRoom from './components/RoomDescription/QueenRoom';
import SuiteRoom from './components/RoomDescription/SuiteRoom';
import AdminRoomList from './components/Adminroomlist';
import MyBooking from './components/mybookings';
import Payment from './components/Payment';
import Signup from './components/Signup';
import RoomDetail from './components/RoomDetail';
import AdminUsers from './components/AdminUsers';
import CreateRoom from './components/CreateRoom';
import BookingsPage from './components/BookingPage';
import EditRoom from './components/EditRoom';

const App = () => {
   return (
      <Router>
         <div className="relative w-full h-full ">
            <Routes>
               <Route path="/" element={
                  <>
                     <Navbar></Navbar>
                     <Facilities></Facilities>
                     <Testimonials></Testimonials>
                     <SocialMedia></SocialMedia>
                     <Footer></Footer>
                  </>
               } />
               <Route path="/" element={<Navbar />} />
               <Route path="/Login" element={<Login />} />
               <Route path="/Signup" element={<Signup />} />
               <Route path="/about" element={<Contentsection />} />
               <Route path="/gallery" element={<Gallery />} />
               <Route path="/Adminlogin" element={<Adminlogin />} /> {/* Add login route */}
               <Route path="/Admindashboard" element={<Admindashboard />} />
               <Route path="/hotels" element={<HotelList />} />
               <Route path="/roomslist" element={<AdminRoomList />} />
               {/* <Route path="/bookings" element={<Adminbookinglist />} /> */}
               <Route path="/payments" element={<PaymentList />} />
               <Route path="/reviews" element={<ReviewList />} />
               <Route path="/Roomlist" element={<RoomList />} />
               <Route path="/king" element={<KingRoom />} />
               <Route path="/garden-view" element={<GardenViewRoom />} />
               <Route path="/high-end" element={<HighEndRoom />} />
               <Route path="/single" element={<SingleRoom />} />
               <Route path="/queen" element={<QueenRoom />} />
               <Route path="/suite" element={<SuiteRoom />} />
               <Route path="/mybooking" element={<MyBooking />} />
               <Route path="/mypayment" element={<Payment />} />
               <Route path='/users' element={<AdminUsers/>} />
               <Route path="/rooms/:id" element={<RoomDetail/>} />
               <Route path='/create-room' element={<CreateRoom/>} />
               <Route path='/bookings' element={<BookingsPage/>} />
               <Route path='/edit-room/:id' element={<EditRoom/>} />

               {/* <Route path="/" element={<Navbar />} /> */}


            </Routes>
         </div>

      </Router>);
};
export default App