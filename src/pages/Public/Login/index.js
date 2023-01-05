import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import InputField from "../../../components/InputField";
import PasswordField from "../../../components/PasswordField";
import api from "../../../api";

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
    password: yup.string().required(),
  })
  .required();

const Login = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    const payload = {
      password: data.password,
    };

    if (/^\d{10}$/.test(data.username)) {
      payload.mobileNumber = data.username;
    } else {
      payload.email = data.username;
    }

    api
      .post("/loginService/login", payload)
      .then(() => {
        console.log("Login Successful.");
      })
      .catch((error) => {
        console.log(error);
      });
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
      <div className="form-group">
        <p className="small text-center">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
