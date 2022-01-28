import React from "react";
import "./ItemListContainer.css";
export const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h2 className="itemListContainer">{greeting}</h2>
      <hr />
    </div>
  );
};
