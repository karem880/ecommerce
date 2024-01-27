import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Cursor from "./components/Curser";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import Sidebar from './components/Sidebar/SideBar'
import Dashboard from "./pages/Dashboard";

function NotFound() {
  return <h1>Page Not Found!</h1>;
}

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

  return (
    <Router>
      <ToastContainer position="top-right" />
      <Cursor />
      <NavBar />
      <Routes>
      {/* <Route
          path="/*"
          element={
            <Sidebar>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </Sidebar>
          }
        /> */}


        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        
        {/* Sidebar for specific routes */}
    

      </Routes>
    </Router>
  );
}

export default App;
