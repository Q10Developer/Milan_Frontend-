import { useController } from "react-hook-form";

const DropdownField = ({ control, name, label,options, ...props }) => {
  const { field, fieldState } = useController({
    name,
    control,
  });

  return (
    <div className="form-group">
      <label htmlFor={field.name}>{label}</label>
      <select
        className="form-control"
        id={field.name}
        onChange={field.onChange}
        onBlur={field.onBlur}
        name={field.name}
        ref={field.ref}
      >
        <option value={""}>select</option>
        {options.map((item, i) => (
          <option key={i} value={item.value}>{item.title}</option>
        ))}
      </select>
      {fieldState.error ? (
        <div className="invalid-feedback d-block">
          {fieldState.error?.message}
        </div>
      ) : null}
    </div>
  );
};

export default DropdownField;
