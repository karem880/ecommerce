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
import Details from "./pages/Details";
import Fav from "./pages/Fav";
import { ContextProvider } from "./components/auth";

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
    const storedCart = localStorage.getItem("cart");
  
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
  
      setCart(parsedCart);
  
      setCartLength(parsedCart.length);
    }
  }, []);



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
  



  const [fav, setfav] = useState([]);
  const [favlength, setfavlength] = useState(0);
  
  useEffect(() => {
    const storedFav = localStorage.getItem("fav");
  
    if (storedFav) {
      const parsedFav = JSON.parse(storedFav);
  
      setfav(parsedFav);
      setfavlength(parsedFav.length);
    }
  }, []);
  

  const addToFav = (item) => {
    const isItemInFav = fav.some((favItem) => favItem.id === item.id);
  
    if (!isItemInFav) {
      // Update state
      const newFav = [...fav, item];
      setfav(newFav);
  
      // Update localStorage
      localStorage.setItem('fav', JSON.stringify(newFav));
  
      // Update fav length state
      setfavlength(newFav.length);
  
      toast.success(`${item.title} added to the fav.`);
    } else {
      toast.error(`${item.title} is already in the fav.`);
    }
  };
  
  


  
  return (
    <Router>
      <ContextProvider>
      <NavBar cartLength={cartLength} favlength={favlength} />

      <ToastContainer position="top-right" />
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart setCartLength={setCartLength} />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} addToFav={addToFav} />} />
        <Route path="/fav" element={<Fav setFavLength={setfavlength} addToCart={addToCart} addToFav={addToFav} />} />
        <Route path="/product/:id" element={<Details addToCart={addToCart} addToFav={addToFav} />} />
      </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;
