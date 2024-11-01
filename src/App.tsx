import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Movies from "./pages/Movies";

import "./App.css";
import Navbar from "./components/Navbar";
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="">
      {/* Progress Bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,         // Scale horizontally with scroll progress
          transformOrigin: "0 0",          // Scale from the left
          height: "4px",                   // Adjust thickness of the progress bar
          backgroundColor: "#3498db",      // Progress bar color
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          borderRadius : 100,
          zIndex: 1000,                    // Keep on top of other elements
        }}
      />
      

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
