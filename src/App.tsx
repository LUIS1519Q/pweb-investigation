import { useRef } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const enfocar = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <h1>Hola Mundo</h1>
      <input ref={inputRef} type="text" placeholder="Escribe aquí..." />
      <button onClick={enfocar}>Enfocar input</button>
    </div>
  );
}

export default App;