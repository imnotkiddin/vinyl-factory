import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";

export const CartWidget = () => {
  const { totalCantidad } = useContext(CartContext);

  return (
    <div className="cartIcon">
      <i className="fas fa-shopping-cart"></i>
      <span>{totalCantidad() !== 0 ? totalCantidad() : <></>}</span>
    </div>
  );
};
