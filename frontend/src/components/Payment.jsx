import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState("");
  const [roomUrl, setRoomUrl] = useState("/single-room"); // Example, this would be dynamically set

  return (
    <div id="mypayment" className="min-h-screen bg-gray-50 p-8 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Billing Information</h1>

        {/* Full Name */}
        <div className="mb-6">
          <label htmlFor="fullName" className="block text-lg font-medium text-gray-800">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="John Doe"
            className="mt-2 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Address */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-lg font-medium text-gray-800">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@mail.com"
            className="mt-2 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Billing Address */}
        <div className="mb-6">
          <label htmlFor="address" className="block text-lg font-medium text-gray-800">
            Billing Address
          </label>
          <input
            type="text"
            id="address"
            placeholder="123 Main St"
            className="mt-2 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-6">
          <label htmlFor="phone" className="block text-lg font-medium text-gray-800">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="(123) 456-7890"
            className="mt-2 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Special Requests */}
        <div className="mb-6">
          <label htmlFor="specialRequests" className="block text-lg font-medium text-gray-800">
            Special Requests
          </label>
          <textarea
            id="specialRequests"
            placeholder="Enter your special requests"
            rows="4"
            className="mt-2 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Checkboxes */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="terms"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-3 text-lg text-gray-800">
              I agree to the terms and conditions
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="pregnant"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="pregnant" className="ml-3 text-lg text-gray-800">
              Pregnant?
            </label>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Method</h2>
          <div className="grid grid-cols-2 gap-6">
            {["Banking Transfer (+3%)", "Paypal", "Paypal Credit Card (+3%)", "Stripe (+3%)"].map(
              (method) => (
                <button
                  key={method}
                  className={`w-full p-4 border rounded-lg text-lg font-semibold text-center ${
                    selectedPayment === method
                      ? "bg-blue-500 text-white border-blue-500"
                      : "border-gray-300 text-gray-700"
                  } transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  onClick={() => setSelectedPayment(method)}
                >
                  {method}
                </button>
              )
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
         
            <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg text-lg font-medium transition duration-300 hover:bg-gray-300">
              Back
            </button>
       
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-medium transition duration-300 hover:bg-blue-600">
            Confirm Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
