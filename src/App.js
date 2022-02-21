import "./App.css";
import React from "react";
import { ItemListContainer } from "./components/ItemListConteiner/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartView } from "./components/CartView/CartView";
import { NavBar2 } from "./components/NavBar/NavBar2";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar2 />
        <Routes>
          <Route path="/vinyl-factory" element={<ItemListContainer />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/productos/:catId" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
