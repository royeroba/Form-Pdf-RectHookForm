import React from "react";
import { useForm, Controller } from "react-hook-form";

const InputField = ({ label, name, control, type = "text", options }) => (
  <div className="mb-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}:
    </label>
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) =>
        type === "select" ? (
          <select
            {...field}
            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            {...field}
            type={type}
            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300"
          />
        )
      }
    />
  </div>
);

const FormContent = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-6 lg:p-8">
      <h2 className="text-2xl font-bold mb-4">Solicitud de Crédito</h2>

      {/* Sección de Solicitud */}
      <div className="mb-6 bg-white border rounded-lg shadow-md p-4 sm:flex sm:flex-row flex-col">
        <InputField
          label="Ciudad"
          name="ciudad"
          control={control}
          type="text"
        />
        <InputField label="Fecha" name="fecha" control={control} type="date" />
        <InputField
          label="Destino Crédito"
          name="destinoCredito"
          control={control}
          type="select"
          options={[
            { label: "Libre Inversión", value: "libre-inversion" },
            { label: "Estudio", value: "estudio" },
            { label: "Vivienda", value: "vivienda" },
          ]}
        />
      </div>

      {/* Sección de Deudor */}
      <div className="mb-6 bg-white border rounded-lg shadow-md p-4 sm:flex flex-wrap">
        <h2 className="text-lg font-semibold mb-2 w-full">
          Información Deudor
        </h2>
        <InputField label="Nombres" name="nombres" control={control} />
        <InputField label="Apellidos" name="apellidos" control={control} />
        <InputField
          label="Tipo de Identificación"
          name="tipoIdentificacion"
          control={control}
          type="select"
          options={[
            { label: "CC", value: "CC" },
            { label: "CE", value: "CE" },
            { label: "PPT", value: "PPT" },
          ]}
        />
        <InputField
          label="Identificación"
          name="identificacion"
          control={control}
          type="number"
        />
        <InputField
          label="Fecha de Nacimiento"
          name="fechaNacimiento"
          control={control}
          type="date"
        />
        <InputField
          label="Lugar de Nacimiento"
          name="lugarNacimiento"
          control={control}
        />
        <InputField
          label="Fecha de Expedición"
          name="fechaExpedicion"
          control={control}
          type="date"
        />
        <InputField
          label="Lugar de Expedición"
          name="lugarExpedicion"
          control={control}
        />
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
        <InputField
          label="Dirección"
          name="direccion"
          control={control}
          type="text"
        />
        <InputField label="Ciudad" name="ciudad" control={control} />
        <InputField
          label="Teléfono Fijo"
          name="telefonoFijo"
          control={control}
          type="tel"
        />
        <InputField
          label="Teléfono Celular"
          name="telefonoCelular"
          control={control}
          type="tel"
        />
        <InputField label="Email" name="email" control={control} type="email" />
        <InputField
          label="Estado Civil"
          name="estadoCivil"
          control={control}
          type="select"
          options={[
            { label: "Soltero", value: "soltero" },
            { label: "Casado", value: "casado" },
            { label: "Unión Libre", value: "unionLibre" },
            { label: "Divorciado", value: "divorciado" },
            { label: "Viudo", value: "viudo" },
          ]}
        />
        <InputField
          label="Tipo de Vivienda"
          name="tipoVivienda"
          control={control}
          type="select"
          options={[
            { label: "Propia", value: "propia" },
            { label: "Arrendada", value: "arrendada" },
            { label: "Familiar", value: "familiar" },
          ]}
        />
        <InputField
          label="Personas a Cargo"
          name="personasACargo"
          control={control}
          type="number"
        />
      </div>

      {/* Sección de Información Laboral */}
      <div className="mb-6 bg-white border rounded-lg shadow-md p-4 sm:flex flex-wrap">
        <h2 className="text-lg font-semibold mb-2 w-full">
          Información Laboral
        </h2>
        <InputField
          label="Nombre de la Empresa"
          name="nombreEmpresa"
          control={control}
        />
        <InputField
          label="Fecha de Ingreso"
          name="fechaIngreso"
          control={control}
          type="date"
        />
        <InputField label="Cargo" name="cargo" control={control} />
        <InputField
          label="Salario Total"
          name="salarioTotal"
          control={control}
          type="number"
        />
        <InputField
          label="Total Descuentos"
          name="totalDescuentos"
          control={control}
          type="number"
        />
        <InputField
          label="Neto a Pagar"
          name="netoPagar"
          control={control}
          type="number"
        />
        <InputField
          label="Dirección de la Empresa"
          name="direccionEmpresa"
          control={control}
        />
        <InputField
          label="Teléfono de la Empresa"
          name="telefonoEmpresa"
          control={control}
          type="tel"
        />
        <InputField label="Ciudad" name="ciudadEmpresa" control={control} />
      </div>

      {/* Sección de Información Financiera */}
      <div className="mb-6 bg-white border rounded-lg shadow-md p-4 sm:flex flex-wrap">
        <h2 className="text-lg font-semibold mb-2 w-full">
          Información Financiera
        </h2>
        <InputField
          label="Total Ingresos"
          name="totalIngresos"
          control={control}
          type="number"
        />
        <InputField
          label="Otros Ingresos"
          name="otrosIngresos"
          control={control}
          type="number"
        />
        <InputField
          label="Total Egresos"
          name="totalEgresos"
          control={control}
          type="number"
        />
        <InputField
          label="Activos"
          name="activos"
          control={control}
          type="number"
        />
        <InputField
          label="Pasivos"
          name="pasivos"
          control={control}
          type="number"
        />
        <InputField
          label="Patrimonio"
          name="patrimonio"
          control={control}
          type="number"
        />
      </div>

      {/* Sección de Referencias */}
      <div className="mb-6 bg-white border rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-2">Referencias</h2>

        {/* Subtítulo Familiar */}
        <h3 className="text-md font-semibold mb-2">Familiar</h3>
        <InputField
          label="Nombres Familiar"
          name="nombresFamiliar"
          control={control}
        />
        <InputField
          label="Apellido Familiar"
          name="apellidoFamiliar"
          control={control}
        />
        <InputField
          label="Dirección Familiar"
          name="direccionFamiliar"
          control={control}
        />
        <InputField
          label="Ciudad Familiar"
          name="ciudadFamiliar"
          control={control}
        />
        <InputField
          label="Teléfono Familiar"
          name="telefonoFamiliar"
          control={control}
          type="tel"
        />
        <InputField
          label="Email Familiar"
          name="emailFamiliar"
          control={control}
          type="email"
        />
        <InputField
          label="Parentesco Familiar"
          name="parentescoFamiliar"
          control={control}
        />

        {/* Subtítulo Personal */}
        <h3 className="text-md font-semibold mb-2 mt-4">Personal</h3>
        <InputField
          label="Nombres Personal"
          name="nombresPersonal"
          control={control}
        />
        <InputField
          label="Apellido Personal"
          name="apellidoPersonal"
          control={control}
        />
        <InputField
          label="Dirección Personal"
          name="direccionPersonal"
          control={control}
        />
        <InputField
          label="Ciudad Personal"
          name="ciudadPersonal"
          control={control}
        />
        <InputField
          label="Teléfono Personal"
          name="telefonoPersonal"
          control={control}
          type="tel"
        />
        <InputField
          label="Email Personal"
          name="emailPersonal"
          control={control}
          type="email"
        />
        <InputField
          label="Parentesco Personal"
          name="parentescoPersonal"
          control={control}
        />
      </div>

      {/* Botón de enviar */}
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
