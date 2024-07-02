import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment Successful!');
  };

  const banks = ["Axis Bank", "HDFC Bank", "ICICI Bank", "SBI Bank"];

  return (
    <div style={{ 
      backgroundImage: 'url("https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table.jpg")', // Replace with your image URL
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div className="relative z-10 bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <h1 className="text-sm font-bold text-black">Payment Options</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-20">
              <h1 className="mt-3 font-normal text-red-600">UPI</h1>
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  checked={paymentMethod === 'upi'}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                Pay via App
                {paymentMethod === 'upi' && (
                  <div className="mt-2 ml-4">
                    <input
                      type="radio"
                      name="upiMethod"
                      value="gpay"
                      className="mr-2"
                    />
                    GPay
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-row gap-20">
              <h1 className="mt-3 font-normal text-red-600">Credit/Debit Card</h1>
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                Card
                {paymentMethod === 'card' && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number"
                      className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <input
                      type="text"
                      name="nameOnCard"
                      placeholder="Name on Card"
                      className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <input
                      type="text"
                      name="validThru"
                      placeholder="Valid Thru (MM/YY)"
                      className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-row gap-20">
              <h1 className="mt-3 font-normal text-red-600">Net Banking</h1>
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="netbanking"
                  checked={paymentMethod === 'netbanking'}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                Net Banking
                {paymentMethod === 'netbanking' && (
                  <div className="mt-2 ml-4">
                    {banks.map((bank, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <input
                          type="radio"
                          name="bank"
                          value={bank}
                          className="mr-2"
                        />
                        {bank}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-row gap-20">
              <h1 className="mt-3 font-normal text-red-600">Payment on Delivery</h1>
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                Cash on Delivery
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold">Price Details</h2>
            <div className="mt-2">
              <div className="flex justify-between">
                <span>Total Price:</span>
                <span>₹1234</span> {/* Replace with actual total price */}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className='border border-red-700 bg-red-500 hover:bg-red-400 cursor-pointer text-white w-full py-2'
            >
              Pay Now
            </button>
          </div>
        </form>
        <div className="mt-4">
          <Link to="/buy">
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
              Back to Buy Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
