import React from "react";

export const ItemDetail = ({
  id,
  nombre,
  precio,
  descripcion,
  imagen,
  category,
}) => {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>${precio}</p>
      <p>{descripcion}</p>
      <img src={imagen} alt={nombre} />
      <p>Decada {category}</p>
    </div>
  );
};
