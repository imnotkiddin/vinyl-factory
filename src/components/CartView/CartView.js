import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "./CartItem";

export const CartView = () => {
  const { carrito, vaciarCarrito, totalCompra } = useContext(CartContext);
  return (
    <div className="container my-5">
      {carrito.length > 0 ? (
        <>
          <h2>Cart View</h2>
          <hr />
          <section>
            {carrito.map((prod) => (
              <CartItem key={prod.id} {...prod} />
            ))}
          </section>
          <br />
          <p>Total ${totalCompra()}</p>
          <div>
            <button className="btn btn-danger" onClick={vaciarCarrito}>
              Vaciar Carrito
            </button>
            <Link to="/checkout" className="btn btn-success">
              Terminar mi compra
            </Link>
          </div>
        </>
      ) : (
        <>
          <h2>No agregaste ningun producto</h2>
          <Link to="/" className="btn btn-primary">
            Volver
          </Link>
        </>
      )}
    </div>
  );
};
