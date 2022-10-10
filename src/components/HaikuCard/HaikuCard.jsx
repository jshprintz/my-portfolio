import React from "react";
import { Card, Image } from "semantic-ui-react";

const CardExampleCard = () => (
  
  <Card raised href="/" centered style={{ width: 350 }}>
    <Image src="https://i.imgur.com/2ILCi8H.png" wrapped ui={false} />
    <Card.Content>
      <Card.Header>Haiku For You</Card.Header>
      <Card.Meta>Created 2022</Card.Meta>
      <Card.Description>
        A full MERN stack social media application designed around haikus
      </Card.Description>
    </Card.Content>
  </Card>
);

export default CardExampleCard;
