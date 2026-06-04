import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

class ContadorStore {
  contador = 0;

  constructor() {
    makeAutoObservable(this);
  }

  incrementar() {
    this.contador += 1;
  }
}

const store = new ContadorStore();

const App = observer(() => {
  return (
    <div>
      <h1>{store.contador}</h1>
      <button onClick={() => store.incrementar()}>
        Incrementar
      </button>
    </div>
  );
});

export default App;