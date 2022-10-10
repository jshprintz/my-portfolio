import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Card } from "semantic-ui-react";
import HaikuCard from "../../components/HaikuCard/HaikuCard";
import MinesweeperCard from "../../components/MinesweeperCard/MinesweeperCard";
import "./PortfolioPage.css";

function PortfolioPage() {
  return (
    <>
      <NavBar />
      <div className="cards">
        <h1>This is the portfolio page</h1>
        <Card.Group itemsPerRow={2} stackable centered>
          <HaikuCard />
          <MinesweeperCard />
        </Card.Group>
      </div>
    </>
  );
}

export default PortfolioPage;
