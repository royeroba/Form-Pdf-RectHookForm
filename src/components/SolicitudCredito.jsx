import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import LocationSelector from "./LocationSelector";

const referralOptions = ["Internet", "Referido", "Empresa"];
const creditPurposeOptions = ["Libre inversión", "Vivienda", "Estudio"];

const fields = [
  { label: "Entidad", name: "entidad", type: "text" },
  {
    label: "¿Cómo se enteró de nosotros?",
    name: "comoSeEntero",
    type: "select",
    options: referralOptions,
  },
  {
    label: "Destino del crédito",
    name: "destinoCredito",
    type: "select",
    options: creditPurposeOptions,
  },
  { label: "Fecha", name: "fecha", type: "date" },
];

const SolicitudCredito = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState({});
  const [selectedCity, setSelectedCity] = useState(null);

  const onSubmit = (data) => {
    setFormData({ ...data, selectedCity: selectedCity });
    console.log(formData);
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-8 p-4 md:p-6 bg-white border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Solicitud de Crédito</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-4">
            <label className="block  text-black mb-1">Ciudad:</label>

            <LocationSelector
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
            />
          </div>
          {fields.map((field) => (
            <InputField
              key={field.name}
              register={register}
              error={errors[field.name]}
              {...field}
            />
          ))}
        </div>
        <div className="col-span-full mt-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-200"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default SolicitudCredito;
