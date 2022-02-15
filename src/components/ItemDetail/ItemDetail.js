import React from "react";
import { useNavigate } from "react-router-dom";

export const ItemDetail = ({
  id,
  nombre,
  precio,
  descripcion,
  imagen,
  category,
}) => {
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate(-1);
  };

  //   const handleVolverInicio = () => {
  //     navigate("/");
  //     };

  return (
    <div>
      <h2>{nombre}</h2>
      <p>${precio}</p>
      <p>{descripcion}</p>
      <img src={imagen} alt={nombre} />
      <p>Decada {category}</p>
      <button onClick={handleVolver} className="btn btn-primary">
        Volver
      </button>
    </div>
  );
};
