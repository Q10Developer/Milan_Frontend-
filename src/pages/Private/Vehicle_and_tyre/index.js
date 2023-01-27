import React from 'react'
import { Button, Card } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import ActionButtons from '../../../components/ActionButtons';

const VehicleAndTyre = () => {

  const navigate = useNavigate();
  
  const columns = [
    {
      name: "Vehicle Type",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Vehicle Maker",
      selector: (row) => row.maker,
      center: true,
    },
    {
      name: "Number Of Tyres",
      selector: (row) => row.numberOfTyres,
      center: true,
    },
    {
      name: "Vehicle Usage",
      selector: (row) => row.vehicleUsage,
    },
    {
      name: "Tyre Size",
      selector: (row) => row.tyreSize,
    },
    {
      name: "Actions",
      selector: (row) => row.actinButtons
    },
  ];

  const data = [
    {
      type: "Freight – Heavy Truck / Rigid Truck / Trailor",
      maker: "TATA",
      numberOfTyres: 2,
      vehicleUsage: "Civil Offroad",
      tyreSize: "10.00R20",
      actinButtons: <ActionButtons />,
    },
    {
      type: "Freight – Heavy Truck / Rigid Truck / Trailor",
      maker: "TATA",
      numberOfTyres: 2,
      vehicleUsage: "Civil Offroad",
      tyreSize: "10.00R20",
      actinButtons: <ActionButtons />,
    },
  ];

  return (
    <>
      <div className="d-flex justify-content-between m-3">
        <h5></h5>
        <Button
          onClick={() => navigate("/vehicle-and-tyre/create-vehicle")}
          variant="primary"
        >
          <i className="fa-solid fa-plus"></i> New Vehicle
        </Button>
      </div>
      <Card>
        <Card.Body>
          <DataTable
            title="Vehicle List"
            columns={columns}
            pagination
            data={data}
          />
        </Card.Body>
      </Card>
    </>
  );
}

export default VehicleAndTyre;