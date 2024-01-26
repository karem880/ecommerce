import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cursor from "./components/Curser";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";


function App() {
  return (
    <Router>
      <Cursor />
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
  );
}

export default App;
