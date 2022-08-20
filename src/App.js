import "./App.css";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  const saludo = "¡Bienvenido a Travelfy!";
  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} productos`);
  };
  return (
    <>
      <Navbar />
      <ItemListContainer saludo={saludo} />
      <ItemCount onAdd={onAdd} initial={1} stock={7} />
    </>
  );
}

export default App;
