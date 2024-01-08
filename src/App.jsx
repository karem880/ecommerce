import { Route, Routes } from "react-router-dom";
import Cursor from "./commponent/curser/Curser";
import Home from "./pages/Home";
import Admins from "./pages/Admins";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PaidVedio from "./pages/PaidVedio";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <Cursor />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/admins" element={<Admins />} />
          <Route path="/PaidVedio" element={<PaidVedio />} />
          {/* Add more nested routes if needed */}
        
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
