import React from "react";

import { Link } from "react-router-dom";

export const Item = ({ prod }) => {
  const onAdd = (cantidad) => {
    console.log("Se ha agregado " + cantidad);
  };

  return (
    <div className="card cardItem my-2 h-100" key={prod.id}>
      <div className="card-body">
        <img src={prod.imagen} alt={prod.nombre} />
        <h5 className="card-title">{prod.nombre}</h5>
        <p className="card-text">{prod.descripcion}</p>
        <p className="card-text">${prod.precio}</p>
        <p className="card-text text-muted">Decada {prod.category}</p>
        <Link to={`/detail/${prod.id}`} className="btn btn-success">
          Ver Mas
        </Link>
      </div>
    </div>
  );
};
