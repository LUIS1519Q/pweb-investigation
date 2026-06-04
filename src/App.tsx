import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Inicio() {
  return <h1>Página de Inicio</h1>;
}

function Acerca() {
  return <h1>Página Acerca de</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link>
        {" | "}
        <Link to="/acerca">Acerca</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca" element={<Acerca />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;