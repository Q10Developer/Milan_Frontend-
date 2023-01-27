import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Card } from "react-bootstrap";
import DropdownField from "../../../components/DropdownField";
import * as OptionValues from "./OptionValues";

const schema = yup
  .object({
    type: yup.string().required('Required Field !'),
    maker : yup.string().required('Required Field !'),
    numberOfTyres : yup.string().required('Required Field !'),
    vehicleUsage : yup.string().required('Required Field !'),
    tyreSize : yup.string().required('Required Field !'),
    tyreLocation : yup.string().required('Required Field !'),
    loadIndex : yup.string().required('Required Field !'),
    speedIndex : yup.string().required('Required Field !'),
    tyreWidth : yup.string().required('Required Field !')
  })
  .required();

const CreateVehicle = () => {

  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      type: ""
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="d-flex justify-content-between m-3">
        <h5>{""}</h5>
        <Button onClick={() => navigate("/vehicle-and-tyre")} variant="primary">
          <i className="fa-solid fa-arrow-left"></i> Back
        </Button>
      </div>
      <Card>
        <Card.Body>
          <div className="m-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group form-row">
                <DropdownField
                  label="Vehicle Type"
                  placeholder="Type"
                  name="type"
                  control={control}
                  options={OptionValues.vehicleTypeOptions}
                  classProps="col-md-12"
                />
              </div>
              <div className="form-group form-row">
                <DropdownField
                  label="Vehicle Maker"
                  name="maker"
                  control={control}
                  options={OptionValues.vehicleMakerOptions}
                  classProps="col-md-12"
                />
              </div>
              <div className="form-group form-row">
                <DropdownField
                  label="Number Of Tyres"
                  name="numberOfTyres"
                  control={control}
                  options={OptionValues.numberOfTyreOptions}
                  classProps="col-md-12"
                />
              </div>
              <div className="form-group form-row">
                <DropdownField
                  label="Vehicle Usage"
                  name="vehicleUsage"
                  control={control}
                  options={OptionValues.vehicleUsageOptions}
                  classProps="col-md-6"
                />
                <DropdownField
                  label="Tyre Size"
                  name="tyreSize"
                  control={control}
                  options={OptionValues.tyreSizeOptions}
                  classProps="col-md-6"
                />
              </div>
              <div className="form-group form-row">
                <DropdownField
                  label="Tyre Location"
                  name="tyreLocation"
                  control={control}
                  options={OptionValues.tyreLocationOptions}
                  classProps="col-md-12"
                />
              </div>
              <div className="form-group form-row">
                <DropdownField
                  label="Load Index "
                  name="loadIndex"
                  control={control}
                  options={[]}
                  classProps="col-md-12"
                />
              </div>
              <div className="form-group form-row">
                <DropdownField
                  label="Speed Index "
                  name="speedIndex"
                  control={control}
                  options={[]}
                  classProps="col-md-12"
                />
              </div>
              <div className="form-group form-row">
                <DropdownField
                  label="Tyre Width "
                  name="tyreWidth"
                  control={control}
                  options={[]}
                  classProps="col-md-12"
                />
              </div>
              <div className="d-flex justify-content-center m-3">
                <button type="submit" className="btn-fill btn btn-info my-3">
                  Add Vehicle
                </button>
              </div>
            </form>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CreateVehicle;
