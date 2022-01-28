import "./App.css";
import { ItemListContainer } from "./components/ItemListConteiner/ItemListContainer";
import Navbar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Aca van a ir los productos" />
    </div>
  );
}

export default App;
