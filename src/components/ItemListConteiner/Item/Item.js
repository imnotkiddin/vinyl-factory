import React from "react";

export const ItemListContainer = ({ id, name, img, desc, price }) => {
  return (
    <div>
      <article className="card m-3" key={id} style={{ width: "18rem" }}>
        <img src={img} alt={name} />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">Precio: ${price}</p>
          <p className="card-text">{desc}</p>
          <button type="button" className="btn btn-primary">
            Agregar
          </button>
        </div>
      </article>
    </div>
  );
};
