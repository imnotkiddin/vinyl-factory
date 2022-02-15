import "./App.css";
import React from "react";
import { ItemListContainer } from "./components/ItemListConteiner/ItemListContainer";
import Navbar2 from "./components/NavBar/NavBar2";
import { PokeApi } from "./components/PokeApi/PokeApi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Item } from "./components/Item/Item";
import { CartWidget } from "./components/NavBar/CartWidget";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar2 />
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
