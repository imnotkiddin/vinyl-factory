import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./ItemCount.css";

export const ItemCount = ({ stock }) => {
  const [clicks, setClicks] = useState(1);

  const sumarClick = () => {
    if (stock > clicks) {
      setClicks(clicks + 1);
    } else {
      console.log("No hay stock");
    }
  };

  const restarClick = () => {
    if (clicks > 1) {
      setClicks(clicks - 1);
    } else {
      console.log("No se puede disminuir mas");
    }
  };

  const compra = () => {
    console.log("Se han comprado " + clicks + " unidades");
  };

  return (
    <div className="clickContainer">
      <div onClick={restarClick}>
        <button>-</button>
      </div>
      <div>{clicks}</div>
      <div onClick={sumarClick}>
        <button>+</button>
      </div>
      <Button variant="danger" size="lg" onClick={compra}>
        Comprar
      </Button>
    </div>
  );
};
