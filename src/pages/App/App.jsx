import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import PortfolioPage from "../PortfolioPage/PortfolioPage";
import HaikuPage from "../HaikuPage/HaikuPage";
import MinesweeperPage from "../MinesweeperPage/MinesweeperPage";
import BLMPage from "../BLMPage/BLMPage";
import IDrunkPage from "../iDrunkPage/iDrunkPage";

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
      <Route
        path="/minesweeper"
        element={<MinesweeperPage />}
      />
      <Route
        path="/bowling"
        element={<BLMPage />}
      />
      <Route
        path="/iDrunk"
        element={<IDrunkPage />}
      />
      
    </Routes>
    </div>
  );
}

export default App;
