import { useController } from "react-hook-form";

const InputField = ({ control, name, label, type, classProps, ...props }) => {
  const { field, fieldState } = useController({
    name,
    control,
  });

  return (
    <div className={classProps}>
      <label htmlFor={field.name}>{label}</label>
      <input
        id={field.name}
        {...props}
        type = {type}
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
