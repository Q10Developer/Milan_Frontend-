import { useCallback, useState } from "react";
import { useController } from "react-hook-form";

const PasswordField = ({ control, name, label,classProps, ...props }) => {
  const [type, setType] = useState("password");

  const { field, fieldState } = useController({
    name,
    control,
  });

  const onPasswordEyeClick = useCallback(() => {
    setType(type === "password" ? "text" : "password");
  }, [type]);

  return (
    <div className={classProps}>
      <label htmlFor={field.name}>{label}</label>
      <div className="input-group">
        <input
          id={field.name}
          type={type}
          {...props}
          className="form-control"
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          name={field.name}
          ref={field.ref}
          aria-describedby="password-show-hide"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="password-show-hide"
            onClick={onPasswordEyeClick}
          >
            {type === "password" ? (
              <i className="fa-solid fa-eye"></i>
            ) : (
              <i className="fa-solid fa-eye-slash"></i>
            )}
          </button>
        </div>
      </div>

      {fieldState.error ? (
        <div className="invalid-feedback d-block">
          {fieldState.error?.message}
        </div>
      ) : null}
    </div>
  );
};

export default PasswordField;
