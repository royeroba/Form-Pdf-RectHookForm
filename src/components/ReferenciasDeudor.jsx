import React from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField";

const referencesFields = [
  { label: "Nombre y Apellidos", name: "nombreApellidos", type: "text" },
  { label: "Dirección", name: "direccion", type: "text" },
  { label: "Barrio", name: "barrio", type: "text" },
  { label: "Teléfono", name: "telefono", type: "tel" },
  { label: "Celular", name: "celular", type: "tel" },
  { label: "Email", name: "email", type: "email" },
  { label: "Parentesco", name: "parentesco", type: "text" },
];

const ReferenciasDeudor = () => {
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
      <h2 className="text-xl font-semibold mb-4">Referencias de Deudor</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        {referencesFields.map((field) => (
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

export default ReferenciasDeudor;
