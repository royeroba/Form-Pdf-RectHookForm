import { useForm } from "react-hook-form";
import InputField from "./InputField";

const selectOptions = {
  ciudad: ["Barranquilla", "Bogotá"],
};

const laboralFields = [
  { label: "Nombre de la Empresa", name: "nombreEmpresa", type: "text" },
  { label: "Fecha de Ingreso", name: "fechaIngreso", type: "date" },
  { label: "Total Devengado", name: "totalDevengado", type: "number" },
  { label: "Total Descuentos", name: "totalDescuentos", type: "number" },
  {
    label: "Neto a Pagar (con Descuentos)",
    name: "netoPagarDescuentos",
    type: "number",
  },
  { label: "Dirección de la Empresa", name: "direccionEmpresa", type: "text" },
  { label: "Teléfono de la Empresa", name: "telefonoEmpresa", type: "tel" },
  {
    label: "Ciudad",
    name: "ciudad",
    type: "select",
    options: selectOptions.ciudad,
  },
  { label: "Ocupación", name: "ocupacion", type: "text" },
  { label: "Grado/Cargo", name: "gradoCargo", type: "text" },
];

const InformacionLaboralDeudor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-8 p-4 md:p-6 bg-white border rounded-lg shadow-md">
      <h1 className="text-xl font-semibold mb-4">
        Formulario Información Laboral Deudor
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5"
      >
        {laboralFields.map((field) => (
          <InputField
            key={field.name}
            register={register}
            error={errors[field.name]}
            {...field}
          />
        ))}
        {/* Botón Enviar */}
        <div className="col-span-full">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-200"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default InformacionLaboralDeudor;
