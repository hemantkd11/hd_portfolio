// import logo from "./logo.svg";
import "./style.css";
import Navbar from "./Components/Nav/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing_Page from "./Components/Home/LandingPage";
import Project from "./Components/Projects/Project";
import AboutPage from "./Components/About/About";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="hd_portfolio/" element={<Landing_Page />} />
          <Route path="hd_portfolio/projects/" element={<Project />} />
          <Route path="hd_portfolio/about/" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
