import { React, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { pedirDatos } from "../pedirDatos";
import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [loading, setLoading] = useState(false);

  const [productosMap, setProductosMap] = useState([]);

  const { catId } = useParams();

  useEffect(() => {
    setLoading(true);
    pedirDatos()
      .then((resp) => {
        if (!catId) {
          setProductosMap(resp);
        } else {
          setProductosMap(resp.filter((prod) => prod.category === catId));
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [catId]);

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
