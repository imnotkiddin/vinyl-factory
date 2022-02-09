import React from "react";
import { CardGroup, Container } from "react-bootstrap";
import { Item } from "../Item/Item";

export const ItemList = ({ productosMap }) => {
  return (
    <Container>
      <h2>DISCOS</h2>
      <CardGroup>
        {productosMap.map((prod) => (
          <div key={prod.id}>
            <Item prod={prod} />
          </div>
        ))}
      </CardGroup>
    </Container>
  );
};
