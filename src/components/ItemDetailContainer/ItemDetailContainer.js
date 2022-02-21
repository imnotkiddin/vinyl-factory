import React, { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { pedirDatos } from "../pedirDatos";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(false);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    pedirDatos()
      .then((resp) => {
        setItem(resp.find((prod) => prod.id === Number(itemId)));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div className="container ">
      {loading ? <h2>Cargando...</h2> : <ItemDetail {...item} />}
    </div>
  );
};
