import React from "react";
import { useForm, Controller } from "react-hook-form";

const FormContent = () => {
  const { control, handleSubmit, formState } = useForm();
  const { isDirty, isSubmitting } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-6 lg:p-8">
      <h2 className="text-2xl font-bold mb-4">Solicitud de Crédito</h2>

      {/* Sección de Solicitud */}
      <div className="mb-6 bg-white border rounded-lg shadow-md p-4 sm:flex sm:flex-row flex-col">
        <div className="mb-4 sm:w-1/2 sm:mr-2">
          <label
            htmlFor="ciudad"
            className="block text-sm font-medium text-gray-700"
          >
            Ciudad:
          </label>
          <Controller
            name="ciudad"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300"
              />
            )}
          />
        </div>

        <div className="mb-4 sm:w-1/2 sm:ml-2">
          <label
            htmlFor="fecha"
            className="block text-sm font-medium text-gray-700"
          >
            Fecha:
          </label>
          <Controller
            name="fecha"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="date"
                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300"
              />
            )}
          />
        </div>

        <div className="mb-4 sm:w-1/2 sm:mr-2">
          <label
            htmlFor="destinoCredito"
            className="block text-sm font-medium text-gray-700"
          >
            Destino Crédito:
          </label>
          <Controller
            name="destinoCredito"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select
                {...field}
                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300"
              >
                <option value="libre-inversion">Libre Inversión</option>
                <option value="estudio">Estudio</option>
                <option value="vivienda">Vivienda</option>
              </select>
            )}
          />
        </div>
      </div>

      {/* Otras secciones similares aquí */}

      <button
        type="submit"
        className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-4 ${
          isSubmitting || !isDirty ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isSubmitting || !isDirty}
      >
        {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
      </button>
    </form>
  );
};

export default FormContent;
