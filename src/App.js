import "./styles.css";
import SaludoSimple from "./Components/SaludoSimple";
import SaludoInteractivo from "./Components/SaludoInteractivo";

export default function App() {
  return (
    <div className="App">
      <h1>Curso de React</h1>
      <h2>Ejercicio Clase 4</h2>
      <SaludoSimple />
      <h2> Saludo Interactivo: </h2>
      <SaludoInteractivo />
    </div>
  );
}
