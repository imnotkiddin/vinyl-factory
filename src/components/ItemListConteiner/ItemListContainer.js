import { React, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { pedirDatos } from "../pedirDatos";
import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [loading, setLoading] = useState(false);

  const [productosMap, setProductosMap] = useState([]);

  useEffect(() => {
    setLoading(true);
    pedirDatos()
      .then((resp) => {
        setProductosMap(resp);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container className="my-5">
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <ItemList productosMap={productosMap} />
      )}
    </Container>
  );
};
