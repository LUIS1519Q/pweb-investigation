function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-blue-600">
          Hola Mundo
        </h1>
        <p className="text-gray-500 mt-2">
          Mi primera tarjeta con Tailwind
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mt-4">
          Click aquí
        </button>
      </div>
    </div>
  );
}

export default App;