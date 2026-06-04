import { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState("");

  const validar = () => {
    if (nombre === "") {
      setError("El nombre es obligatorio");
      return;
    }
    setError("");
    alert(`Hola ${nombre}`);
  };

  return (
    <div>
      <h1>Formulario</h1>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe tu nombre"
      />
      {error && <p>{error}</p>}
      <button onClick={validar}>Enviar</button>
    </div>
  );
}

export default App;