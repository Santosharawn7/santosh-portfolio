import React from "react";
import Contact from "./Components/Contact";
import AboutUs from "./Components/AboutUs";
import { Routes, Route } from "react-router-dom";  // Only keep Routes and Route
import Home from "./Components/Home";
import Projects from "./Components/Projects";

function App() {
  return (
    <div>
      <header className="sticky top-0 z-50">
        {/* Your navigation or header content */}
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
