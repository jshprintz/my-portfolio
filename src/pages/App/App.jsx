import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import PortfolioPage from "../PortfolioPage/PortfolioPage";

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
    </Routes>
    </div>
  );
}

export default App;
