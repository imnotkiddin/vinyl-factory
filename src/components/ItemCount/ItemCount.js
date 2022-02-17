import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./ItemCount.css";

export const ItemCount = ({ max, setCantidad, cantidad, onAdd }) => {
  const handleRestar = () => {
    cantidad > 0 && setCantidad(cantidad - 1);
  };
  const handleSumar = () => {
    cantidad < max && setCantidad(cantidad + 1);
  };

  // const sumarClick = () => {
  //   if (stock > clicks) {
  //     setClicks(clicks + 1);
  //   } else {
  //     console.log("No hay stock");
  //   }
  // };

  // const restarClick = () => {
  //   if (clicks > 1) {
  //     setClicks(clicks - 1);
  //   } else {
  //     console.log("No se puede disminuir mas");
  //   }
  // };

  // const compra = () => {
  //   console.log("Se han comprado " + clicks + " unidades");
  // };

  return (
    <div className="clickContainer">
      <div onClick={handleRestar}>
        <Button className="my-1">-</Button>
      </div>
      <div>{cantidad}</div>
      <div onClick={handleSumar}>
        <Button className="my-1">+</Button>
      </div>
      <br />
      <Button
        variant="danger"
        size="lg"
        onClick={() => onAdd(cantidad)}
        className="my-2"
      >
        Agregar al carrito
      </Button>
    </div>
  );
};
