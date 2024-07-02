import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Topdiv from './Topdiv';

export default function Beverage() {
  const [beverages, setBeverages] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchBeverages = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getallbeverages');
        setBeverages(response.data);
      } catch (error) {
        console.error('Error fetching beverages:', error);
      }
    };

    fetchBeverages();
  }, []);

  const handleIncrement = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/increasequantity/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setBeverages((prevBeverages) =>
          prevBeverages.map((beverage) =>
            beverage.id === id ? { ...beverage, quantity: beverage.quantity + 1 } : beverage
          )
        );
      } else {
        console.error('Failed to increase quantity');
      }
    } catch (error) {
      console.error('Error increasing quantity:', error);
    }
  };

  const handleDecrement = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/decreasequantity/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setBeverages((prevBeverages) =>
          prevBeverages.map((beverage) =>
            beverage.id === id && beverage.quantity > 1 ? { ...beverage, quantity: beverage.quantity - 1 } : beverage
          )
        );
      } else {
        console.error('Failed to decrease quantity');
      }
    } catch (error) {
      console.error('Error decreasing quantity:', error);
    }
  };

  const addToCart = async (id) => {
    try {
      const selectedBeverage = beverages.find((beverage) => beverage.id === id);
      if (selectedBeverage) {
        const response = await fetch('http://localhost:4000/addcart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(selectedBeverage),
        });
        if (!response.ok) {
          throw new Error('Failed to add item to cart');
        }
        const data = await response.json();
        console.log('Item added to cart:', data);
        setCartItems([...cartItems, selectedBeverage]);
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };


  return (
    <div>
      <Topdiv />
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold my-4">Beverage</h1>
      <div className="self-start ml-4">
        <Link to="/">
          <button className="text-blue-500 hover:text-blue-700">
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
      <div className="flex flex-wrap justify-center gap-6">
        {beverages.map((beverage) => (
          <div key={beverage.id} className="border p-4 rounded-lg w-60">
            <img src={beverage.image} alt={beverage.name} className="w-full h-56 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-2">{beverage.name}</h2>
            <p className="text-gray-700">{beverage.description}</p>
            <p className="mt-2">Price: {beverage.price}</p>
            {/* <p className="mt-2">Quantity: {beverage.quantity}</p>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => handleDecrement(beverage.id)}
                className="bg-gray-300 px-2 rounded-l"
              >
                -
              </button>
              <span className="px-4">{beverage.quantity}</span>
              <button
                onClick={() => handleIncrement(beverage.id)}
                className="bg-gray-300 px-2 rounded-r"
              >
                +
              </button>
            </div> */}
            <div className="text-blue-500 hover:text-blue-700 font-bold mt-4">
              <Link to="/carts">
                <button
                  onClick={() => addToCart(beverage.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 mr-4"
                >
                  ADD TO CART
                </button>
              </Link>
              
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
