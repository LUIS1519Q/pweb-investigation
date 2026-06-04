import { useForm } from "react-hook-form";

interface FormData {
  nombre: string;
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert(`Hola ${data.nombre}`);
  };

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("nombre", { required: "El nombre es obligatorio" })}
          placeholder="Escribe tu nombre"
        />
        {errors.nombre && <p>{errors.nombre.message}</p>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;