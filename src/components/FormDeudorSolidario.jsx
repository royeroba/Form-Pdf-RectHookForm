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
      {/* Sección de Deudor */}
      <div className="mb-6 bg-white border rounded-lg shadow-md p-4 sm:flex flex-wrap">
        <h2 className="text-lg font-semibold mb-2 w-full">
          Informacion Deudor Solidario
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
      <div className="mb-6 bg-white border rounded-lg shadow-md p-4 sm:flex flex-wrap">
        <h2 className="text-lg font-semibold mb-2 w-full">
          Información Laboral
        </h2>

        <div className="mb-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6">
          <label
            htmlFor="nombreEmpresa"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre de la Empresa:
          </label>
          <Controller
            name="nombreEmpresa"
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
            htmlFor="fechaIngreso"
            className="block text-sm font-medium text-gray-700"
          >
            Fecha de Ingreso:
          </label>
          <Controller
            name="fechaIngreso"
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
            htmlFor="cargo"
            className="block text-sm font-medium text-gray-700"
          >
            Cargo:
          </label>
          <Controller
            name="cargo"
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
            htmlFor="salarioTotal"
            className="block text-sm font-medium text-gray-700"
          >
            Salario Total:
          </label>
          <Controller
            name="salarioTotal"
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
            htmlFor="totalDescuentos"
            className="block text-sm font-medium text-gray-700"
          >
            Total Descuentos:
          </label>
          <Controller
            name="totalDescuentos"
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
            htmlFor="netoPagar"
            className="block text-sm font-medium text-gray-700"
          >
            Neto a Pagar:
          </label>
          <Controller
            name="netoPagar"
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
            htmlFor="direccionEmpresa"
            className="block text-sm font-medium text-gray-700"
          >
            Dirección de la Empresa:
          </label>
          <Controller
            name="direccionEmpresa"
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
            htmlFor="telefonoEmpresa"
            className="block text-sm font-medium text-gray-700"
          >
            Teléfono de la Empresa:
          </label>
          <Controller
            name="telefonoEmpresa"
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
            htmlFor="ciudadEmpresa"
            className="block text-sm font-medium text-gray-700"
          >
            Ciudad:
          </label>
          <Controller
            name="ciudadEmpresa"
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
      </div>
      {/* Otras secciones similares aquí */}
      <div className="mb-6 bg-white border rounded-lg shadow-md p-4 sm:flex flex-wrap">
        <h2 className="text-lg font-semibold mb-2 w-full">
          Información Financiera
        </h2>

        <div className="mb-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6">
          <label
            htmlFor="totalIngresos"
            className="block text-sm font-medium text-gray-700"
          >
            Total Ingresos:
          </label>
          <Controller
            name="totalIngresos"
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
            htmlFor="otrosIngresos"
            className="block text-sm font-medium text-gray-700"
          >
            Otros Ingresos:
          </label>
          <Controller
            name="otrosIngresos"
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
            htmlFor="totalEgresos"
            className="block text-sm font-medium text-gray-700"
          >
            Total Egresos:
          </label>
          <Controller
            name="totalEgresos"
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
            htmlFor="activos"
            className="block text-sm font-medium text-gray-700"
          >
            Activos:
          </label>
          <Controller
            name="activos"
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
            htmlFor="pasivos"
            className="block text-sm font-medium text-gray-700"
          >
            Pasivos:
          </label>
          <Controller
            name="pasivos"
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
            htmlFor="patrimonio"
            className="block text-sm font-medium text-gray-700"
          >
            Patrimonio:
          </label>
          <Controller
            name="patrimonio"
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
      <div className="mb-6 bg-white border rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-2">Referencias</h2>

        {/* Subtítulo Familiar */}
        <h3 className="text-md font-semibold mb-2">Familiar</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          <div className="mb-4">
            <label
              htmlFor="nombresFamiliar"
              className="block text-sm font-medium text-gray-700"
            >
              Nombres:
            </label>
            <Controller
              name="nombresFamiliar"
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

          <div className="mb-4">
            <label
              htmlFor="apellidoFamiliar"
              className="block text-sm font-medium text-gray-700"
            >
              Apellido:
            </label>
            <Controller
              name="apellidoFamiliar"
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

          <div className="mb-4">
            <label
              htmlFor="direccionFamiliar"
              className="block text-sm font-medium text-gray-700"
            >
              Dirección:
            </label>
            <Controller
              name="direccionFamiliar"
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

          <div className="mb-4">
            <label
              htmlFor="ciudadFamiliar"
              className="block text-sm font-medium text-gray-700"
            >
              Ciudad:
            </label>
            <Controller
              name="ciudadFamiliar"
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

          <div className="mb-4">
            <label
              htmlFor="telefonoFamiliar"
              className="block text-sm font-medium text-gray-700"
            >
              Teléfono:
            </label>
            <Controller
              name="telefonoFamiliar"
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

          <div className="mb-4">
            <label
              htmlFor="emailFamiliar"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <Controller
              name="emailFamiliar"
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

          <div className="mb-4">
            <label
              htmlFor="parentescoFamiliar"
              className="block text-sm font-medium text-gray-700"
            >
              Parentesco:
            </label>
            <Controller
              name="parentescoFamiliar"
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
        </div>

        {/* Subtítulo Personal */}
        <h3 className="text-md font-semibold mb-2">Personal</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          <div className="mb-4">
            <label
              htmlFor="nombresPersonal"
              className="block text-sm font-medium text-gray-700"
            >
              Nombres:
            </label>
            <Controller
              name="nombresPersonal"
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

          <div className="mb-4">
            <label
              htmlFor="apellidoPersonal"
              className="block text-sm font-medium text-gray-700"
            >
              Apellido:
            </label>
            <Controller
              name="apellidoPersonal"
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

          <div className="mb-4">
            <label
              htmlFor="direccionPersonal"
              className="block text-sm font-medium text-gray-700"
            >
              Dirección:
            </label>
            <Controller
              name="direccionPersonal"
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

          <div className="mb-4">
            <label
              htmlFor="ciudadPersonal"
              className="block text-sm font-medium text-gray-700"
            >
              Ciudad:
            </label>
            <Controller
              name="ciudadPersonal"
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

          <div className="mb-4">
            <label
              htmlFor="telefonoPersonal"
              className="block text-sm font-medium text-gray-700"
            >
              Teléfono:
            </label>
            <Controller
              name="telefonoPersonal"
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

          <div className="mb-4">
            <label
              htmlFor="emailPersonal"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <Controller
              name="emailPersonal"
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

          <div className="mb-4">
            <label
              htmlFor="parentescoPersonal"
              className="block text-sm font-medium text-gray-700"
            >
              Parentesco:
            </label>
            <Controller
              name="parentescoPersonal"
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
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-4"
      >
        Generar PDF
      </button>
    </form>
  );
};

export default FormContent;
