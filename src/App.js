import "./App.css";
import React from "react";
import { ItemListContainer } from "./components/ItemListConteiner/ItemListContainer";
import Navbar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
