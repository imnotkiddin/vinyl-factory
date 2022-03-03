import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { Container } from "react-bootstrap";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

export const ItemListContainer = () => {
  const [loading, setLoading] = useState(false);

  const [productosMap, setProductosMap] = useState([]);

  const { catId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "productos");

    const q = catId
      ? query(productosRef, where("category", "==", catId), orderBy("name"))
      : productosRef;

    getDocs(q)
      .then((collection) => {
        const items = collection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductosMap(items);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [catId]);

  return (
    <Container className="my-2">
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <ItemList productosMap={productosMap} />
      )}
    </Container>
  );
};
