import React from 'react'
import { Card } from 'react-bootstrap';
import InputField from '../InputField';

const AddressComponent = ({ title, control }) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="my-3 h1">{title}</Card.Title>
          <div className="form-group form-row">
            <InputField
              label="Address"
              placeholder=" Address Line"
              name="address"
              control={control}
              classProps="col"
            />
          </div>
          <div className="form-group form-row">
            <InputField
              label="City/Town"
              placeholder="City"
              name="city"
              control={control}
              classProps="col"
            />
            <InputField
              label="State"
              placeholder="State"
              name="state"
              control={control}
              classProps="col"
            />
          </div>
          <div className="form-group form-row">
            <InputField
              label="Country"
              placeholder="Country"
              name="country"
              control={control}
              classProps="col"
            />
            <InputField
              label="PIN "
              placeholder="PIN "
              name="pin"
              control={control}
              classProps="col"
            />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default AddressComponent;