import React from "react";
import { Card } from "semantic-ui-react";

const HaikuCard = () => (
  
  <Card raised href="/haiku" centered style={{ width: 350 }}>
    <img src="https://i.imgur.com/2ILCi8H.png" alt="Haiku For You"/>
    <Card.Content>
      <Card.Header>Haiku For You</Card.Header>
      <Card.Meta>Created 2022</Card.Meta>
      <Card.Description>
        A full MERN stack social media application designed around haikus
      </Card.Description>
    </Card.Content>
  </Card>
);

export default HaikuCard;
