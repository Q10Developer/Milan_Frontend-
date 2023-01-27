import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import InputField from "../../../components/InputField";
import useAuthActions from "../../../states/actions/auth.actions";
import { Button } from "react-bootstrap";
import DropdownField from "../../../components/DropdownField";
import AddressComponent from "../../../components/AddressComponent";

const schema = yup
  .object({
    title: yup.string().required(),
    firstName: yup.string().max(100).required('First Name is required !'),
    emailId: yup.string().email().required(),
    mobileNumber: yup.string().length(10).matches(/^\d+$/).required(),
    middleName: yup.string().required(),
    lastName: yup.string().required(),
    companyName: yup.string().required(),
    website: yup.string().required(),
    phone: yup.string().required(),
    gst_registration_type: yup.string().required(),
    address: yup.string().required(),
    city : yup.string().required(),
    state : yup.string().required(),
    country : yup.string().required(),
    pin : yup.string().required()
  })
  .required();

const CreateClient = () => {
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

  const titleOptions = [
    {
      title: "Mr",
      value: "Mr",
    },
    {
      title: "Ms",
      value: "Ms",
    },
    {
      title: "Mrs",
      value: "Mrs",
    },
  ];

  const gstRegistrationTypes = [
    {
      title: "Gst registered regular",
      value: "Gst registered regular",
    },
    {
      title: "GST registered composition",
      value: "GST registered composition",
    },
    {
      title: "GST Unregistered",
      value: "GST Unregistered",
    },
    {
      title: "GST Consumer",
      value: "GST Consumer",
    },
    {
      title: "GST Overseas",
      value: "GST Overseas",
    },
    {
      title: "GST SEZ",
      value: "GST SEZ",
    },
    {
      title: "GST Deemed Export",
      value: "GST Deemed Export",
    },
    {
      title: "GST In",
      value: "GST In",
    },
  ];

  return (
    <>
      <div className="d-flex justify-content-between m-3">
        <h5>{ '' }</h5>
        <Button onClick={() => navigate("/clients")} variant="primary">
          <i className="fa-solid fa-arrow-left"></i> Back
        </Button>
      </div>
      <div className="m-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group form-row">
            <DropdownField
              label="Title"
              placeholder="Title"
              name="title"
              control={control}
              options={titleOptions}
              classProps="col-md-12"
            />
          </div>
          <div className="form-group form-row">
            <InputField
              label="First Name"
              placeholder="First Name"
              name="firstName"
              control={control}
              type="text"
              classProps="col"
            />
            <InputField
              label="Middle Name"
              placeholder="Middle Name"
              name="middleName"
              control={control}
              type="text"
              classProps="col"
            />
            <InputField
              label="Last Name"
              placeholder="Last Name"
              name="lastName"
              control={control}
              type="text"
              classProps="col"
            />
          </div>
          <div className="form-group form-row">
            <InputField
              label="Company Name"
              placeholder="Company Name"
              name="companyName"
              control={control}
              type="text"
              classProps="col-md-12"
            />
          </div>
          <div className="form-group form-row">
            <InputField
              label="Email"
              placeholder="Email"
              name="emailId"
              control={control}
              type="email"
              classProps="col"
            />
            <InputField
              label="Website"
              placeholder="Website"
              name="website"
              control={control}
              type="url"
              classProps="col"
            />
          </div>
          <div className="form-group form-row">
            <InputField
              label="Mobile"
              placeholder="Mobile"
              name="mobileNumber"
              control={control}
              type="text"
              classProps="col"
            />
            <InputField
              label="Phone"
              placeholder="Phone"
              name="phone"
              control={control}
              classProps="col"
            />
          </div>
          <div className="form-group form-row">
            <DropdownField
              label="GST Registration Type"
              placeholder="GST Registration Type"
              name="gst_registration_type"
              control={control}
              options={gstRegistrationTypes}
              classProps="col"
            />
          </div>
          <AddressComponent title="Billing Address" control={control} />
          <div className="form-group form-row ml-3">
            <div className="col">
              <input
                type={"checkbox"}
                id="address_match"
                name="address_match"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="address_match">
                  {" Billing Address is same as shipping Address"}
              </label>
            </div>
          </div>
          <AddressComponent title="Shipping Address" control={control} />
          <div className="d-flex justify-content-center m-3">
            <button type="submit" className="btn-fill btn btn-info my-3">
              Add Client
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateClient;
