import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({
  id,
  nombre,
  precio,
  descripcion,
  imagen,
  category,
  stock,
}) => {
  const navigate = useNavigate();
  const [cantidad, setCantidad] = useState(0);
  const [agregado, setAgregado] = useState(false);
  const { agregarAlCarrito, isInCart } = useContext(CartContext);

  const handleVolver = () => {
    navigate(-1);
  };
  const handleAdd = () => {
    if (cantidad > 0) {
      agregarAlCarrito({
        id,
        nombre,
        precio,
        imagen,
        cantidad,
      });
      setAgregado(true);
    }
  };

  //   const handleVolverInicio = () => {
  //     navigate("/");
  //     };

  return (
    <div className="card" style={{ width: 400 }}>
      <img src={imagen} alt={nombre} />
      <div className="card-body">
        <h2 className="card-title">{nombre}</h2>
        <p className="card-text">{descripcion}</p>
        <p className="card-text">${precio}</p>
        <p className="card-text">Decada {category}</p>

        {!isInCart(id) ? (
          <ItemCount
            max={stock}
            initial={1}
            onAdd={handleAdd}
            setCantidad={setCantidad}
            cantidad={cantidad}
          />
        ) : (
          <Link to="/cart" className="btn btn-success my-5">
            Terminar Compra
          </Link>
        )}

        <Button onClick={handleVolver} className="btn btn-danger my-2">
          Volver
        </Button>
      </div>
    </div>
  );
};
