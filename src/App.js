import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  const saludo = "¡Bienvenido a Travelfy!";
  return (
    <>
      <Navbar />
      <ItemListContainer saludo={saludo} />
    </>
  );
}

export default App;
