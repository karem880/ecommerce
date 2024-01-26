import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cursor from "./components/Curser";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";


function App() {
  return (
    <Router>
      <Cursor />
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </Router>
  );
}

export default App;
