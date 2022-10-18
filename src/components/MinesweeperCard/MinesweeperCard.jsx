import React from "react";
import { Card } from "semantic-ui-react";
import LazyLoad from "react-lazy-load";

const MinesweeperCard = () => (
  
  <Card raised href="/minesweeper" centered style={{ width: 350 }}>
    <LazyLoad width={350} offset={10}>
    <img className="card-image" src="https://i.imgur.com/V0XIXJ1.png" alt="Minesweeper"/>
    </LazyLoad>
    <Card.Content>
      <Card.Header>Mega Minesweeper</Card.Header>
      <Card.Meta>Created 2022</Card.Meta>
      <Card.Description>
        A browser-based game made with only HTML, CSS, and JavaScript
      </Card.Description>
    </Card.Content>
  </Card>
);

export default MinesweeperCard;