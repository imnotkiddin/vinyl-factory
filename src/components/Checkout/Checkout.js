import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { validarDatos } from "./validarDatos";
import { db } from "../../firebase/config";
import {
  Timestamp,
  collection,
  getDocs,
  query,
  where,
  documentId,
  writeBatch,
  addDoc,
} from "firebase/firestore";
import Swal from "sweetalert2";
export const Checkout = () => {
  const { carrito, totalCompra, vaciarCarrito } = useContext(CartContext);

  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    email: "",
    emailConfirm: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validarDatos(values)) {
      return;
    }

    const orden = {
      buyer: {
        ...values,
      },
      items: carrito,
      total: totalCompra(),
      date: Timestamp.fromDate(new Date()),
    };
    const batch = writeBatch(db);
    const orderRef = collection(db, "orders");
    const productosRef = collection(db, "productos");
    const q = query(
      productosRef,
      where(
        documentId(),
        "in",
        carrito.map((el) => el.id)
      )
    );
    const outOfStock = [];
    const productos = await getDocs(q);

    productos.docs.forEach((doc) => {
      const itemToUpdate = carrito.find((prod) => prod.id === doc.id);
      if (doc.data().stock >= itemToUpdate.cantidad) {
        batch.update(doc.ref, {
          stock: doc.data().stock - itemToUpdate.cantidad,
        });
      } else {
        outOfStock.push(itemToUpdate);
      }
    });

    if (outOfStock.length === 0) {
      addDoc(orderRef, orden).then((res) => {
        batch.commit();
        Swal.fire({
          title: "Orden realizada",
          text: `Gracias por su compra, su orden ha sido registrada con el código ${res.id}`,
          icon: "success",
          confirmButtonText: "OK",
        });
        vaciarCarrito();
      });
    } else {
      Swal.fire({
        title: "No hay suficiente stock",
        text: outOfStock.map(((el) => el.nombre).join(", ")),
        icon: "error",
      });
    }
  };

  return (
    <>
      {carrito.lenght === 0 ? (
        <Navigate to="/" />
      ) : (
        <div className="container my-2">
          <h2>Checkout</h2>
          <hr />
          <p>Total ${totalCompra()}</p>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleInputChange}
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={values.nombre}
              className="form-control my-2"
              type="text"
              placeholder="nombre"
            />
            {values.nombre.length < 2 && (
              <p className="text-muted">Nombre invalido</p>
            )}

            <input
              onChange={handleInputChange}
              type="text"
              name="apellido"
              value={values.apellido}
              className="form-control my-2"
              type="text"
              placeholder="apellido"
            />
            {values.apellido.length < 2 && (
              <p className="text-muted">Apellido invalido</p>
            )}

            <input
              onChange={handleInputChange}
              type="text"
              name="email"
              value={values.email}
              className="form-control my-2"
              placeholder="email"
            />
            {values.email.length < 7 && (
              <p className="text-muted">Email invalido</p>
            )}

            <input
              onChange={handleInputChange}
              type="text"
              name="emailConfirm"
              value={values.emailConfirm}
              className="form-control my-2"
              placeholder="Confirmar email"
            />
            {values.emailConfirm !== values.email && (
              <p className="text-muted">Los emails no coinciden</p>
            )}

            <button type="submit" className="btn btn-success">
              Enviar
            </button>
          </form>
        </div>
      )}
    </>
  );
};
