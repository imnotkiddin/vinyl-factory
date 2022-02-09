import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export const Item = ({ prod }) => {
  const onAdd = (cantidad) => {
    console.log("Se ha agregado " + cantidad);
  };

  return (
    <div className="card cardItem" key={prod.id}>
      <div className="card-body">
        <img src={prod.imagen} alt={prod.nombre} />
        <h5 className="card-title">{prod.nombre}</h5>
        <p className="card-text">{prod.descripcion}</p>
        <p className="card-text">{prod.precio}</p>
        <button className="btn btn-primary">Comprar</button>
      </div>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </div>
  );
};
