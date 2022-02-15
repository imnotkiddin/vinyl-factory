import "./App.css";
import React from "react";
import { ItemListContainer } from "./components/ItemListConteiner/ItemListContainer";

import { PokeApi } from "./components/PokeApi/PokeApi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Item } from "./components/Item/Item";
import { CartWidget } from "./components/NavBar/CartWidget";
import { NavBar2 } from "./components/NavBar/NavBar2";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar2 />
        <Routes>
          <Route path="/vinyl-factory" element={<ItemListContainer />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:catId" element={<ItemListContainer />} />
          <Route path="/pokeapi" element={<PokeApi />} />
          <Route path="/cart" element={<CartWidget />} />
        </Routes>

        {/* <PokeApi />
        <ItemListContainer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
