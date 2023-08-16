import React from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField";

const financialFields = [
  { label: "Total de Ingresos", name: "totalIngresos", type: "number" },
  { label: "Otros Ingresos", name: "otrosIngresos", type: "number" },
  { label: "Total de Egresos", name: "totalEgresos", type: "number" },
  { label: "Activos", name: "activos", type: "number" },
  { label: "Pasivos", name: "pasivos", type: "number" },
  { label: "Patrimonio", name: "patrimonio", type: "number" },
];

const InformacionFinanciera = () => {
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
      <h2 className="text-xl font-semibold mb-4">Información Financiera</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-5"
      >
        {financialFields.map((field) => (
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

export default InformacionFinanciera;
