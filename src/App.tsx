import { createContext, useContext } from "react";

const SaludoContext = createContext("Hola Mundo");

function Mensaje() {
  const saludo = useContext(SaludoContext);
  return <h1>{saludo}</h1>;
}

function App() {
  return (
    <SaludoContext.Provider value="Hola desde el contexto">
      <Mensaje />
    </SaludoContext.Provider>
  );
}

export default App;