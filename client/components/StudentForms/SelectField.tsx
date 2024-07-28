const SelectField = ({
  label,
  name,
  options,
  disabled,
  defaultValue,
  isReadOnly,
}: SelectFieldTypes) => (
  <div>
    <label htmlFor={name} className="block mb-2 text-sm font-semibold">
      {label}
    </label>
    <select
      id={name}
      name={name}
      className="w-full border rounded px-3 py-2"
      disabled={disabled}
      defaultValue={defaultValue}
    >
      {isReadOnly ? (
        <option value={defaultValue}>{defaultValue || label}</option>
      ) : (
        <>
          <option value="">{label}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </>
      )}
    </select>
  </div>
);

export default SelectField;
