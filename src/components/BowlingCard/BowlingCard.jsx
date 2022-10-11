import React from "react";
import { Card } from "semantic-ui-react";

const BowlingCard = () => (
  <Card raised href="/" centered style={{ width: 350 }}>
    <img src="https://i.imgur.com/E7GX4us.png" alt="Bowling League Manager" />
    <Card.Content>
      <Card.Header>Bowling League Manager</Card.Header>
      <Card.Meta>Created 2022</Card.Meta>
      <Card.Description>
        Google OAuth implemented CRUD application using Express, MongoDB, and
        EJS
      </Card.Description>
    </Card.Content>
  </Card>
);

export default BowlingCard;
