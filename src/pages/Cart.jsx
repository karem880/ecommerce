import React, { useEffect, useState } from 'react';
import { AiTwotoneDelete } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ setCartLength }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);

      const updatedCart = parsedCart.map(item => ({ ...item, quantity: item.quantity || 1 }));

      setCart(updatedCart);
      setCartLength(updatedCart.length);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  }, [setCartLength]);

  const calculateTotal = (item) => {
    return item.price * item.quantity;
  };

  const calculateOverallTotal = () => {
    return cart.reduce((total, item) => total + calculateTotal(item), 0);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cart.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDeleteItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    console.log('Updated Cart:', updatedCart);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Deleted successfully");
    setCartLength(updatedCart.length);
  };

  return (
    <div className="bg-gray-900 h-screen py-8">
      {cart.length > 0 ? (
        <div className="container mx-auto px-4">
          <h1 className="text-2xl text-yellow-500 font-semibold mb-4">Shopping Cart</h1>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">Product</th>
                      <th className="text-left font-semibold">Price</th>
                      <th className="text-left font-semibold">Quantity</th>
                      <th className="text-left font-semibold">Total</th>
                      <th className="text-left font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td className="py-4">
                          <div className="flex items-center">
                            <NavLink to={`/product/${item.id}`}>
                              <img className="h-16 w-16 mr-4" src={item.image} alt={item.title} />
                            </NavLink>
                            <span className="font-semibold">{item.title}</span>
                          </div>
                        </td>
                        <td className="py-4">${item.price.toFixed(2)}</td>
                        <td className="py-4">
                          <div className="flex items-center">
                            <button
                              className="border rounded-md py-2 px-4 mr-2"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>
                            <span className="text-center w-8">{item.quantity}</span>
                            <button
                              className="border rounded-md py-2 px-4 ml-2"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4">${calculateTotal(item).toFixed(2)}</td>
                        <td className="py-4">
                          <button
                            className='text-red-500 rounded-md flex items-center justify-center w-full h-full'
                            onClick={() => handleDeleteItem(item.id)}
                          >
                            <AiTwotoneDelete />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${calculateOverallTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Taxes</span>
                  <span>$1.99</span> {/* Placeholder value for Taxes */}
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>$0.00</span> {/* Placeholder value for Shipping */}
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">${calculateOverallTotal().toFixed(2)}</span>
                </div>
                <NavLink to={'/login'}>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                  Checkout
                </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='w-full flex items-center justify-center text-4xl text-white font-extrabold flex-col gap-20'>
          <h1>NO DATA YET</h1>
          <div className="🤚">
            <div className="👉" />
            <div className="👉" />
            <div className="👉" />
            <div className="👉" />
            <div className="🌴" />
            <div className="👍" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
