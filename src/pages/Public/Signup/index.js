import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import InputField from "../../../components/InputField";
import PasswordField from "../../../components/PasswordField";
import useAuthActions from "../../../states/actions/auth.actions";

const schema = yup
  .object({
    name: yup.string().max(100).required(),
    emailId: yup.string().email().required(),
    mobileNumber: yup.string().length(10).matches(/^\d+$/).required(),
    password: yup.string().min(8).max(30).required(),
    confirmPassword: yup
      .string()
      .min(8)
      .max(30)
      .required()
      .oneOf(
        [yup.ref("password")],
        "The confirm password and password must be same"
      ),
  })
  .required();

const Signup = () => {
  const authActions = useAuthActions();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      emailId: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    authActions.signup(data).then(console.log).catch(console.log);
  };

  return (
    <>
      <h4>Signup</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Name"
          placeholder="Name"
          name="name"
          control={control}
        />
        <InputField
          label="Email"
          placeholder="Email"
          name="emailId"
          control={control}
        />
        <InputField
          label="Mobile"
          placeholder="Mobile"
          name="mobileNumber"
          control={control}
        />
        <PasswordField
          label="Password"
          placeholder="Password"
          name="password"
          control={control}
        />
        <PasswordField
          label="Confirm Password"
          placeholder="Confirm Password"
          name="confirmPassword"
          control={control}
        />
        <div className="form-group">
          <button type="submit" className="btn-fill btn btn-info">
            Signup
          </button>
        </div>
      </form>
      <div className="form-group">
        <p className="small text-center">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </>
  );
};

export default Signup;
