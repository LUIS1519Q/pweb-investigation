import { create } from "zustand";

interface ContadorStore {
  contador: number;
  incrementar: () => void;
}

const useContadorStore = create<ContadorStore>((set) => ({
  contador: 0,
  incrementar: () => set((state) => ({ contador: state.contador + 1 })),
}));

function App() {
  const contador = useContadorStore((state) => state.contador);
  const incrementar = useContadorStore((state) => state.incrementar);

  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default App;