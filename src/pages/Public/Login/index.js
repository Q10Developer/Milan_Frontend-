import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import InputField from "../../../components/InputField";
import PasswordField from "../../../components/PasswordField";
import useAuthActions from "../../../states/actions/auth.actions";

const schema = yup
  .object({
    username: yup
      .mixed()
      .test(
        "username",
        "Please enter a valid email or mobile",
        function (value, context) {
          if (value === "") return false;
          if (
            yup.string().length(10).matches(/^\d+$/).isValidSync(value) ||
            yup.string().email().isValidSync(value)
          ) {
            return true;
          }
          return false;
        }
      )
      .required(),
    password: yup.string().min(8).max(30).required(),
  })
  .required();

const Login = () => {
  const authActions = useAuthActions();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    authActions.login(data).then(console.log).catch(console.log);
  };

  return (
    <>
      <h4>Login</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Email or mobile"
          placeholder="Email or mobile"
          name="username"
          control={control}
        />
        <PasswordField
          label="Password"
          placeholder="Password"
          name="password"
          control={control}
        />
        <div className="form-group">
          <p className="small text-right">
            <Link to="/">Forgot password?</Link>
          </p>
        </div>
        <div className="form-group">
          <button type="submit" className="btn-fill btn btn-info">
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
