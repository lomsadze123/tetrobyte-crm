const InputField = ({
  label,
  name,
  type,
  placeholder,
  readOnly,
  defaultValue,
}: InputFieldTypes) => (
  <div>
    <label htmlFor={name} className="block mb-2 text-sm font-semibold">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      className="w-full border rounded px-3 py-2"
      placeholder={placeholder}
      readOnly={readOnly}
      defaultValue={defaultValue}
    />
  </div>
);
export default InputField;
