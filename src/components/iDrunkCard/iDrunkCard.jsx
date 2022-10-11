import React from "react";
import { Card } from "semantic-ui-react";

const iDrunkCard = () => (
  <Card raised href="/" centered style={{ width: 350 }}>
    <img src="https://i.imgur.com/GvM9REv.png" alt="iDrunk" />
    <Card.Content>
      <Card.Header>iDrunk</Card.Header>
      <Card.Meta>Created 2022</Card.Meta>
      <Card.Description>
        Social media application built using Django, Python, AWS, and
        PostgreSQL. (Group Project)
      </Card.Description>
    </Card.Content>
  </Card>
);

export default iDrunkCard;
