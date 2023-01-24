import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import InputField from "../../../components/InputField";
import PasswordField from "../../../components/PasswordField";
import useAuthActions from "../../../states/actions/auth.actions";
import { Button } from "react-bootstrap";
import DropdownField from "../../../components/DropdownField";

const schema = yup
  .object({
    name: yup.string().max(100).required(),
    emailId: yup.string().email().required(),
    mobileNumber: yup.string().length(10).matches(/^\d+$/).required(),
    password: yup.string().min(8).max(30).required(),
    role: yup.string().required(),
    status: yup.string().required(),
  })
  .required();

const CreateUser = () => {
    const authActions = useAuthActions();
    const navigate = useNavigate();

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
        authActions.registerUser(data).then(console.log).catch(console.log);        
    };
    
    const roleOptions = [
      {
        title: "Admin",
        value: "admin",
      },
      {
        title: "User",
        value: "user",
      },
    ];

    const statusOptions = [
      {
        title: "Active",
        value: "active",
      },
      {
        title: "InActive",
        value: "Inactive",
      },
    ];

  return (
    <>
      <div className="d-flex justify-content-between m-3">
        <h5></h5>
        <Button onClick={() => navigate("/users")} variant="primary">
          <i className="fa-solid fa-arrow-left"></i> Back
        </Button>
      </div>
      <div className="m-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group form-row">
            <InputField
              label="Name"
              placeholder="Name"
              name="name"
              control={control}
              type="text"
              classProps={"col"}
            />
          </div>
          <div className="form-group form-row">
            <InputField
              label="Email"
              placeholder="Email"
              name="emailId"
              control={control}
              type="email"
              classProps={"col"}
            />
            <InputField
              label="Mobile"
              placeholder="Mobile"
              name="mobileNumber"
              control={control}
              type="text"
              classProps={"col"}
            />
          </div>
          <div className="form-group form-row">
            <PasswordField
              label="Password"
              placeholder="Password"
              name="password"
              control={control}
              classProps={"col"}
            />
          </div>
          <div className="form-group form-row">
            <DropdownField
              label="Role"
              placeholder="Role"
              name="role"
              control={control}
              options={roleOptions}
              classProps={"col"}
            />
            <DropdownField
              label="Status"
              placeholder="status"
              name="status"
              control={control}
              options={statusOptions}
              classProps={"col"}
            />
          </div>
          <div className="d-flex justify-content-center m-3">
            <button type="submit" className="btn-fill btn btn-info my-3">
              Add User
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
