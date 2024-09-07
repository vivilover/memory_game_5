import { useState } from "react";
import Header from "./components/Header";
import PlayBoard from "./components/PlayBoard";
import Welcome from "./components/Welcome";
import Facil from "./components/Facil";
import Intermedia from "./components/Intermedia";
import Deficil from "./components/Deficil";

function App() {
  const [estado, setEstado] = useState("main");

  const onEstadoChange = (newEstado) => {
    setEstado(newEstado);
  };

  return (
    <>
      <Header />
      {estado === "main" ? (
        <Welcome handleStateChange={onEstadoChange} />
      ) : estado === "facil" ? (
        <Facil handleStateChange={onEstadoChange} />
      ) : estado === "intermedia" ? (
        <Intermedia handleStateChange={onEstadoChange} />
      ) : estado === "deficil" ? (
        <Deficil handleStateChange={onEstadoChange} />
      ) : (
        <div>Estado Wrong</div>
      )}
    </>
  );
}

export default App;
