import React from "react";
import { Card, Image } from "semantic-ui-react";

const MinesweeperCard = () => (
  
  <Card raised href="/" centered style={{ width: 350 }}>
    <img src="https://i.imgur.com/V0XIXJ1.png" alt="Haiku" />
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