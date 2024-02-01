import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Cursor from "./components/Curser";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import { ToastContainer,toast } from "react-toastify";
import Dashboard from "./pages/Dashboard";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  
  useEffect(() => {
    // Retrieve cart data from localStorage
    const storedCart = localStorage.getItem("cart");
  
    if (storedCart) {
      // Parse the stored cart data
      const parsedCart = JSON.parse(storedCart);
  
      // Update the cart state
      setCart(parsedCart);
  
      // Update the cart length state
      setCartLength(parsedCart.length);
    }
  }, []);


  const handleDeleteItem = (itemId) => {
    // Filter out the item with the specified ID
    const updatedCart = cart.filter((item) => item.id !== itemId);

    // Update the cart state
    setCart(updatedCart);

    // Update the localStorage with the updated cart
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("deleted succssefully")
    
  };
  
  const addToCart = (item) => {
    const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);
  
    if (!isItemInCart) {
      // Update state
      const newCart = [...cart, item];
      setCart(newCart);
  
      // Update localStorage
      localStorage.setItem('cart', JSON.stringify(newCart));
  
      // Update cart length state
      setCartLength(newCart.length);
  
      toast.success(`${item.title} added to the cart.`);
    } else {
      toast.error(`${item.title} is already in the cart.`);
    }
  };
  


  
  return (
    <Router>
      <NavBar CartLength={cartLength}/>

      <ToastContainer position="top-right" />
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart handleDeleteItem={handleDeleteItem} />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
