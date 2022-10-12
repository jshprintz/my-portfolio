import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import PortfolioPage from "../PortfolioPage/PortfolioPage";
import HaikuPage from "../HaikuPage/HaikuPage";

function App() {
  return (
    <div className="background">
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/about"
        element={<AboutPage />}
      />
      <Route
        path="/portfolio"
        element={<PortfolioPage />}
      />
      <Route
        path="/haiku"
        element={<HaikuPage />}
      />
    </Routes>
    </div>
  );
}

export default App;
