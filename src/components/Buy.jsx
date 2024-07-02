import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry"
];

const Buy = () => {
  const [deliveryInfo, setDeliveryInfo] = useState({
    fullName: '',
    streetAddress: '',
    city: '',
    pincode: '',
    state: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({ ...deliveryInfo, [name]: value });
    setErrors({ ...errors, [name]: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const errors = {};
    if (!deliveryInfo.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
    if (!deliveryInfo.streetAddress.trim()) {
      errors.streetAddress = 'Street Address is required';
    }
    if (!deliveryInfo.city.trim()) {
      errors.city = 'City is required';
    }
    if (!deliveryInfo.pincode.trim()) {
      errors.pincode = 'Pincode is required';
    }
    if (!deliveryInfo.state.trim()) {
      errors.state = 'State is required';
    }
    if (!deliveryInfo.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone Number is required';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    try {
      await axios.post('http://localhost:4000/addbuy', deliveryInfo);
      alert('Form submitted successfully');
      // Reset form fields
      setDeliveryInfo({
        fullName: '',
        streetAddress: '',
        city: '',
        pincode: '',
        state: '',
        phoneNumber: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div style={{ 
      backgroundImage: 'url("https://www.ning.com/wp-content/uploads/2019/05/create-food-website.jpg")', 
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div className="relative z-10 bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <h1 className="text-sm font-bold text-black">Delivery Information</h1>
        <div className="self-start ml-4">
          <Link to="/carts">
            <button className="text-red-500 hover:text-red-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block align-middle mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
              Back
            </button>
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-20">
              <h1 className="mt-3 font-normal text-red-600">Full Name</h1>
              <input
                type="text"
                name="fullName"
                value={deliveryInfo.fullName}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 ml-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Full Name"
              />
              {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
            </div>
            <div className="flex flex-row gap-20">
              <h1 className="mt-3 font-normal text-red-600">Street Address</h1>
              <input
                type="text"
                name="streetAddress"
                value={deliveryInfo.streetAddress}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Street Address"
              />
              {errors.streetAddress && <p className="text-red-500">{errors.streetAddress}</p>}
            </div>
            <div className="flex flex-row gap-20">
              <h1 className="mt-3 font-normal text-red-600">City</h1>
              <input
                type="text"
                name="city"
                value={deliveryInfo.city}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="City"
              />
              {errors.city && <p className="text-red-500">{errors.city}</p>}
            </div>
            <div className="flex flex-row gap-20">
              <h1 className="mt-3 font-normal text-red-600">Pincode</h1>
              <input
                type="text"
                name="pincode"
                value={deliveryInfo.pincode}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Pincode"
              />
              {errors.pincode && <p className="text-red-500">{errors.pincode}</p>}
            </div>
            <div className="flex flex-row gap-20">
              <h1 className="mt-3 font-normal text-red-600">State</h1>
              <select
                name="state"
                value={deliveryInfo.state}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select State</option>
                {states.map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </select>
              {errors.state && <p className="text-red-500">{errors.state}</p>}
            </div>
            <div className="flex flex-row gap-20">
              <h1 className="mt-3 font-normal text-red-600">Phone Number</h1>
              <input
                type="tel"
                name="phoneNumber"
                value={deliveryInfo.phoneNumber}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Phone Number"
              />
              {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
            </div>
          </div>
          <div className="flex flex-row justify-between mt-4">
            <button
              type="submit"
              className='border border-red-700 bg-red-500 hover:bg-red-400 cursor-pointer text-white w-40'
            >
              Submit
            </button>
            <Link to="/paymentPage">
              <button className="text-red-500">
                <span className="underline">Continue to Payment</span>
              </button>
            </Link>
            <button
              onClick={() => setDeliveryInfo({
                fullName: '',
                streetAddress: '',
                city: '',
                pincode: '',
                state: '',
                phoneNumber: '',
              })}
              className='border border-red-700 bg-red-500 hover:bg-red-400 cursor-pointer text-white w-40 ml-28'
              type="button"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Buy;
