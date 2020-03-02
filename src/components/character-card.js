import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function CharacterCard(props) {
  const {
    name,
    image,
    species,
    origin,
    location,
    gender,
    status
  } = props.character;

  return (
    <Card className="character-card">
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <img width="100%" src={image} alt={name} />
        <section className="info">
          <label>
            Species:
            <span>{species}</span>
          </label>
          <label>
            Origin:
            <span>{origin.name}</span>
          </label>
          <label>
            Location:
            <span>{location.name}</span>
          </label>
          <label>
            Gender:
            <span>{gender}</span>
          </label>
          <label>
            Status:
            <span>{status}</span>
          </label>
        </section>
      </CardBody>
    </Card>
  );
}

export default CharacterCard;
