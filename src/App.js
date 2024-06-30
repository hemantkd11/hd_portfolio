// import logo from "./logo.svg";
import "./style.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Nav/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing_Page from "./Components/Home/LandingPage";
import Project from "./Components/Projects/Project";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/home" element={<Landing_Page />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
