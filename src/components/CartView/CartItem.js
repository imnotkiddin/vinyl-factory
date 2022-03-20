import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CartItem = ({ nombre, precio, cantidad, id }) => {
  const { removerDelCarrito } = useContext(CartContext);
  return (
    <div className="card" style={{ width: 300 }}>
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
      <p>Cantidad: {cantidad}</p>
      <button
        className="btn btn-danger"
        onClick={() => {
          removerDelCarrito(id);
        }}
      >
        <i className="fas fa-trash" />
      </button>
    </div>
  );
};
