import React, { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { pedirDatos } from "../pedirDatos";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(false);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "productos");
    const docRef = doc(productosRef, itemId);
    getDoc(docRef)
      .then((doc) => {
        setItem({
          id: doc.id,
          ...doc.data(),
        });
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
