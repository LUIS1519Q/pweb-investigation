import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  nombre: z.string().nonempty("El nombre es obligatorio"),
});

type FormData = z.infer<typeof schema>;

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    alert(`Hola ${data.nombre}`);
  };

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("nombre")}
          placeholder="Escribe tu nombre"
        />
        {errors.nombre && <p>{errors.nombre.message}</p>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;