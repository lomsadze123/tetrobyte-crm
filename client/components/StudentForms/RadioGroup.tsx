const RadioGroup = ({ label, name, options, disabled }: RadioGroupTypes) => (
  <div>
    <label className="block mb-2 text-sm font-semibold">{label}</label>
    <div className="flex items-center">
      {options.map((option, index) => (
        <div key={index} className="mr-4">
          <input
            type="radio"
            name={name}
            value={option}
            className="mr-2"
            id={`${name}-${option}`}
            disabled={disabled}
          />
          <label htmlFor={`${name}-${option}`}>{option}</label>
        </div>
      ))}
    </div>
  </div>
);

export default RadioGroup;
