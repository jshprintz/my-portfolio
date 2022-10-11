import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Card } from "semantic-ui-react";
import HaikuCard from "../../components/HaikuCard/HaikuCard";
import MinesweeperCard from "../../components/MinesweeperCard/MinesweeperCard";
import BowlingCard from "../../components/BowlingCard/BowlingCard";
import DrunkCard from "../../components/iDrunkCard/iDrunkCard";
import "./PortfolioPage.css";

function PortfolioPage() {
  return (
    <>
      <NavBar />
      <div className="cards">
        <br />
        <h2>My Portfolio</h2>
        <br />
        <Card.Group itemsPerRow={2} stackable centered>
          <HaikuCard />
          <MinesweeperCard />
          <BowlingCard />
          <DrunkCard />
        </Card.Group>
      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default PortfolioPage;
