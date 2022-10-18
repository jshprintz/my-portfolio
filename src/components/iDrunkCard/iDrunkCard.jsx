import React from "react";
import { Card } from "semantic-ui-react";
import LazyLoad from "react-lazy-load";

const iDrunkCard = () => (
  <Card raised href="/iDrunk" centered style={{ width: 350 }}>
    <LazyLoad width={350} offset={100}>
    <img className="card-image" src="https://i.imgur.com/GvM9REv.png" alt="iDrunk" />
    </LazyLoad>
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
