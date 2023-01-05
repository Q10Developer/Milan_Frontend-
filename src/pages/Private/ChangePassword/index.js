import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import PasswordField from "../../../components/PasswordField";
import api from "../../../api";

const schema = yup
  .object({
    oldPassword: yup.string().min(8).max(30).required(),
    newPassword: yup.string().min(8).max(30).required(),
    confirmNewPassword: yup
      .string()
      .min(8)
      .max(30)
      .required()
      .oneOf(
        [yup.ref("newPassword")],
        "The confirm password and password must be same"
      ),
  })
  .required();

const ChangePassword = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const onSubmit = (data) => {
    api
      .post("/changePassword", { ...data, emailId: "abc@gmail.com" })
      .then(() => {
        console.log("Password change Successful.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Change Password</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="row">
                <div className="col-12 col-md-6">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <PasswordField
                      label="Old Password"
                      placeholder="Old Password"
                      name="oldPassword"
                      control={control}
                    />
                    <PasswordField
                      label="New Password"
                      placeholder="New Password"
                      name="newPassword"
                      control={control}
                    />
                    <PasswordField
                      label="Confirm New Password"
                      placeholder="Confirm New Password"
                      name="confirmNewPassword"
                      control={control}
                    />
                    <div className="form-group">
                      <button type="submit" className="btn-fill btn btn-info">
                        Change Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
