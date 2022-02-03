import React, { useState } from "react";
import "./ItemCount.css";
import Bootstrap from "./node_modules/bootstrap/dist/js/bootstrap.bundle.min";

export const ItemCount = () => {
  const [clicks, setClicks] = useState(0);

  const sumarClick = () => {
    setClicks(clicks + 1);
  };

  const restarClick = () => {
    setClicks(clicks - 1);
  };

  return (
    <div className="clickContainer">
      <div onClick={restarClick}>
        <button className={clicks < 0 ? "disable" : "enable"}>-</button>
      </div>
      <div>{clicks}</div>
      <div onClick={sumarClick} className={clicks > 25 ? "disable" : "enable"}>
        <button>+</button>
      </div>
    </div>
  );
};
