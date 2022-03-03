import React from "react";
import { CardGroup, Container } from "react-bootstrap";
import { Item } from "../Item/Item";

export const ItemList = ({ productosMap }) => {
  return (
    <Container className="container ">
      <h2>DISCOS</h2>
      <CardGroup className="container my-2 row row-cols-1 row-cols-md-4 g-4">
        {productosMap.map((prod) => (
          <div key={prod.id}>
            <Item prod={prod} />
          </div>
        ))}
      </CardGroup>
    </Container>
  );
};
