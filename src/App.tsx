import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface Usuario {
  id: number;
  name: string;
}

const traerUsuario = async (): Promise<Usuario> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return res.json();
};

function Usuario() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["usuario"],
    queryFn: traerUsuario,
  });

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error al cargar</p>;

  return (
    <div>
      <h1>Hola {data?.name}</h1>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Usuario />
    </QueryClientProvider>
  );
}

export default App;