import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import "./App.css";
function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="Footer">
        <p>© 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;