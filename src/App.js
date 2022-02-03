import "./App.css";
import React from "react";
import { ItemCount } from "./components/ItemCount/ItemCount";
import { ItemListContainer } from "./components/ItemListConteiner/ItemListContainer";
import Navbar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Aca van a ir los productos" />
      <ItemCount />
    </div>
  );
}

export default App;
