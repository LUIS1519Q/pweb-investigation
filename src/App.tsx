import { useState, useEffect } from "react";

function App() {
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    const hoy = new Date().toLocaleDateString();
    setFecha(hoy);
  }, []);

  return (
    <div>
      <h1>Hola Mundo</h1>
      <p>Hoy es: {fecha}</p>
    </div>
  );
}

export default App;