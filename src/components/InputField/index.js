import { useController } from "react-hook-form";

const InputField = ({ control, name, label, ...props }) => {
  const { field, fieldState } = useController({
    name,
    control,
  });

  return (
    <div className="form-group">
      <label htmlFor={field.name}>{label}</label>
      <input
        id={field.name}
        {...props}
        type="text"
        className="form-control"
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        name={field.name}
        ref={field.ref}
      />
      {fieldState.error ? (
        <div className="invalid-feedback d-block">
          {fieldState.error?.message}
        </div>
      ) : null}
    </div>
  );
};

export default InputField;
