import { useForm } from "react-hook-form";
import InputField from "./InputField";
import LocationSelector from "./LocationSelector";

const selectOptions = {
  tipoIdentificacion: ["CC", "CE", "PPT"],
  lugarExpedicion: ["Barranquilla", "Bogotá"],
  ciudadResidencia: ["Barranquilla", "Bogotá"],
  nivelEscolaridad: [
    "Bachiller",
    "Tecnico",
    "Tecnologo",
    "Universitario",
    "Postgrado",
  ],
  cabezaHogar: ["Si", "No"],
  tipoVivienda: ["Propia", "Arriendo", "Familiar"],
  tieneVehiculo: ["Si", "No"],
  tipoVehiculo: ["Auto", "Moto", "N/A"],
  estadoCivil: [
    "Soltero",
    "Union Libre",
    "Casado",
    "Separado",
    "Divorciado",
    "Viudo",
  ],
};

const fields = [
  { label: "Nombre y Apellidos", name: "nombreApellidos", type: "text" },
  {
    label: "Tipo de Identificación",
    name: "tipoIdentificacion",
    type: "select",
    options: selectOptions.tipoIdentificacion,
  },
  { label: "No. Identificación", name: "numeroIdentificacion", type: "number" },
  { label: "Fecha de Nacimiento", name: "fechaNacimiento", type: "date" },
  {
    label: "Lugar de Nacimiento",
    name: "lugarNacimiento",
    type: "custom",
    component: <LocationSelector />,
  },
  {
    label: "Lugar de Expedición",
    name: "lugarExpedicion",
    type: "select",
    options: selectOptions.lugarExpedicion,
  },
  { label: "Fecha de Expedición", name: "fechaExpedicion", type: "date" },
  { label: "Género", name: "genero", type: "radio", options: ["M", "F"] },
  { label: "Dirección de Residencia", name: "direccion", type: "text" },
  { label: "Barrio", name: "barrio", type: "text" },
  {
    label: "Estrato",
    name: "estrato",
    type: "select",
    options: ["1", "2", "3", "4", "5", "6"],
  },
  {
    label: "Ciudad de Residencia",
    name: "ciudadResidencia",
    type: "select",
    options: selectOptions.ciudadResidencia,
  },
  { label: "Teléfono de Residencia", name: "telefonoResidencia", type: "tel" },
  { label: "Celular", name: "celular", type: "tel" },
  { label: "Email", name: "email", type: "email" },
  {
    label: "Nivel de Escolaridad",
    name: "nivelEscolaridad",
    type: "select",
    options: selectOptions.nivelEscolaridad,
  },
  {
    label: "Cabeza de Hogar",
    name: "cabezaHogar",
    type: "select",
    options: selectOptions.cabezaHogar,
  },
  { label: "Personas a Cargo", name: "personasCargo", type: "number" },
  {
    label: "Tipo de Vivienda",
    name: "tipoVivienda",
    type: "select",
    options: selectOptions.tipoVivienda,
  },
  {
    label: "Tiene Vehiculo",
    name: "tieneVehiculo",
    type: "select",
    options: selectOptions.tieneVehiculo,
  },
  {
    label: "Tipo Vehiculo",
    name: "tipoVehiculo",
    type: "select",
    options: selectOptions.tipoVehiculo,
  },
  { label: "Placa Vehiculo", name: "placaVehiculo", type: "text" },
  {
    label: "Estado Civil",
    name: "estadoCivil",
    type: "select",
    options: selectOptions.estadoCivil,
  },
];

const InformacionDeudor = () => {
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
      <h1 className="text-xl font-semibold mb-4">Información Deudor</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5"
      >
        {fields.map((field) => (
          <InputField
            key={field.name}
            register={register}
            error={errors[field.name]}
            {...field}
          />
        ))}

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

export default InformacionDeudor;
