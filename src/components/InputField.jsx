const InputField = ({ label, name, type, options, register, error }) => {
  const inputProps = {
    ...register(name, { required: true }),
    className: "w-full p-2 border rounded",
  };

  return (
    <div className="col-span-5 sm:col-span-1 md:col-span-1">
      <label className="block mb-1">{label}:</label>
      {type === "select" && (
        <select {...inputProps} defaultValue="">
          <option value="" disabled>
            Seleccionar
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      {type === "radio" && (
        <fieldset>
          {options.map((option) => (
            <label key={option} className="inline-flex items-center mr-4">
              <input
                type="radio"
                value={option}
                {...inputProps}
                className="mr-1"
              />
              {option}
            </label>
          ))}
        </fieldset>
      )}
      {type === "text" && <input type="text" {...inputProps} />}
      {type === "tel" && <input type="tel" {...inputProps} />}
      {type === "email" && <input type="email" {...inputProps} />}
      {type === "checkbox" && <input type="checkbox" {...inputProps} />}
      {type === "number" && <input type="number" {...inputProps} />}
      {type === "date" && <input type="date" {...inputProps} />}

      {error && <p className="text-red-500">Este campo es requerido.</p>}
    </div>
  );
};

export default InputField;
