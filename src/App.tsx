import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      nombre: "",
    },
    validate: (values) => {
      const errors: { nombre?: string } = {};
      if (!values.nombre) {
        errors.nombre = "El nombre es obligatorio";
      }
      return errors;
    },
    onSubmit: (values) => {
      alert(`Hola ${values.nombre}`);
    },
  });

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          name="nombre"
          value={formik.values.nombre}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Escribe tu nombre"
        />
        {formik.touched.nombre && formik.errors.nombre && (
          <p>{formik.errors.nombre}</p>
        )}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;