import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import PortfolioPage from "../PortfolioPage/PortfolioPage";
import ContactPage from "../ContactPage/ContactPage";

function App() {
  return (
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
        path="/contact"
        element={<ContactPage />}
      />
    </Routes>
  );
}

export default App;
