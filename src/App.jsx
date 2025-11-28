import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ourstory from "./screens/ourstory";
import About from "./screens/aboutus";
import Meditation from "./screens/meditation";
import Purpose from "./screens/purpose";
import Ourmission from "./screens/ourmission";
import Signup from "./screens/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ourstory />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/purpose" element={<Purpose />} />
        <Route path="/ourmission" element={<Ourmission />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
