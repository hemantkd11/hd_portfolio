// import logo from "./logo.svg";
import "./style.css";
import Navbar from "./Components/Nav/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Landing_Page from "./Components/Home/LandingPage";
import Project from "./Components/Projects/Project";
import AboutPage from "./Components/About/About";
import ContactPage from "./Components/Contact/contact";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/getintouch" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
