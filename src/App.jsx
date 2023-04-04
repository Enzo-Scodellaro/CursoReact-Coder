import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import ItemList from "./components/ItemList/ItemList";

function App() {
  let saludo = "Hola Tutor como le va";
  return (
    <div className="App">
      <Navbar />
      <ItemList saludo={saludo} />
    </div>
  );
}

export default App;
