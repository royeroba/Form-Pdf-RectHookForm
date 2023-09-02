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
      {/* Sección de Deudor */}
      <div className="mb-6 bg-white border rounded-lg shadow-md p-4 sm:flex flex-wrap">
        <h2 className="text-lg font-semibold mb-2 w-full">
          Informacion Deudor
        </h2>{" "}
        <div className="mb-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6">
          <label
            htmlFor="nombres"
            className="block text-sm font-medium text-gray-700"
          >
            Nombres:
          </label>
          <Controller
            name="nombres"
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
        <div className="mb-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6">
          <label
            htmlFor="apellidos"
            className="block text-sm font-medium text-gray-700"
          >
            Apellidos:
          </label>
          <Controller
            name="apellidos"
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
        <div className="mb-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6">
          <label
            htmlFor="tipoIdentificacion"
            className="block text-sm font-medium text-gray-700"
          >
            Tipo de Identificación:
          </label>
          <Controller
            name="tipoIdentificacion"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select
                {...field}
                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300"
              >
                <option value="CC">CC</option>
                <option value="CE">CE</option>
                <option value="PPT">PPT</option>
              </select>
            )}
          />
        </div>
        <div className="mb-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6">
          <label
            htmlFor="identificacion"
            className="block text-sm font-medium text-gray-700"
          >
            Identificación:
          </label>
          <Controller
            name="identificacion"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="number"
                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300"
              />
            )}
          />
        </div>
        <div className="mb-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6">
          <label
            htmlFor="fechaNacimiento"
            className="block text-sm font-medium text-gray-700"
          >
            Fecha de Nacimiento:
          </label>
          <Controller
            name="fechaNacimiento"
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
        <div className="mb-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6">
          <label
            htmlFor="lugarNacimiento"
            className="block text-sm font-medium text-gray-700"
          >
            Lugar de Nacimiento:
          </label>
          <Controller
            name="lugarNacimiento"
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
        <div className="mb-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6">
          <label
            htmlFor="fechaExpedicion"
            className="block text-sm font-medium text-gray-700"
          >
            Fecha de Expedición:
          </label>
          <Controller
            name="fechaExpedicion"
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
        <div className="mb-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6">
          <label
            htmlFor="lugarExpedicion"
            className="block text-sm font-medium text-gray-700"
          >
            Lugar de Expedición:
          </label>
          <Controller
            name="lugarExpedicion"
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
        <div className="mb-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6">
          <label className="block text-sm font-medium text-gray-700">
            Género:
          </label>
          <div className="flex mt-1">
            <div className="mr-2">
              <label htmlFor="generoM" className="inline-flex items-center">
                <input
                  type="radio"
                  id="generoM"
                  value="M"
                  name="genero"
                  className="form-radio"
                />
                <span className="ml-2">M</span>
              </label>
            </div>
            <div>
              <label htmlFor="generoF" className="inline-flex items-center">
                <input
                  type="radio"
                  id="generoF"
                  value="F"
                  name="genero"
                  className="form-radio"
                />
                <span className="ml-2">F</span>
              </label>
            </div>
          </div>
        </div>
        <div className="mb-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6">
          <label
            htmlFor="direccion"
            className="block text-sm font-medium text-gray-700"
          >
            Dirección:
          </label>
          <Controller
            name="direccion"
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
        <div className="mb-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6">
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
        <div className="mb-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6">
          <label
            htmlFor="telefonoFijo"
            className="block text-sm font-medium text-gray-700"
          >
            Teléfono Fijo:
          </label>
          <Controller
            name="telefonoFijo"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="tel"
                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300"
              />
            )}
          />
        </div>
        <div className="mb-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6">
          <label
            htmlFor="telefonoCelular"
            className="block text-sm font-medium text-gray-700"
          >
            Teléfono Celular:
          </label>
          <Controller
            name="telefonoCelular"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="tel"
                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300"
              />
            )}
          />
        </div>
        <div className="mb-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="email"
                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300"
              />
            )}
          />
        </div>
        <div className="mb-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6">
          <label
            htmlFor="estadoCivil"
            className="block text-sm font-medium text-gray-700"
          >
            Estado Civil:
          </label>
          <Controller
            name="estadoCivil"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select
                {...field}
                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300"
              >
                <option value="soltero">Soltero</option>
                <option value="casado">Casado</option>
                <option value="unionLibre">Unión Libre</option>
                <option value="divorciado">Divorciado</option>
                <option value="viudo">Viudo</option>
              </select>
            )}
          />
        </div>
        <div className="mb-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6">
          <label
            htmlFor="tipoVivienda"
            className="block text-sm font-medium text-gray-700"
          >
            Tipo de Vivienda:
          </label>
          <Controller
            name="tipoVivienda"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select
                {...field}
                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300"
              >
                <option value="propia">Propia</option>
                <option value="arrendada">Arrendada</option>
                <option value="familiar">Familiar</option>
              </select>
            )}
          />
        </div>
        <div className="mb-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6">
          <label
            htmlFor="personasACargo"
            className="block text-sm font-medium text-gray-700"
          >
            Personas a Cargo:
          </label>
          <Controller
            name="personasACargo"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="number"
                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300"
              />
            )}
          />
        </div>
      </div>

      {/* Otras secciones similares aquí */}

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-4"
      >
        Enviar Solicitud
      </button>
    </form>
  );
};

export default FormContent;
