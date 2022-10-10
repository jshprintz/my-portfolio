import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Card } from 'semantic-ui-react'
import HaikuCard from '../../components/HaikuCard/HaikuCard'

function PortfolioPage() {
  return (
    <>
      <NavBar />
      <h1>This is the portfolio page</h1>
      <Card.Group itemsPerRow={2} stackable >
        <HaikuCard />
      </Card.Group>

    </>
  );
}

export default PortfolioPage;