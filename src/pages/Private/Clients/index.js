import React from "react";
import { Button, Table } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import ActionButtons from "../../../components/ActionButtons";

const columns = [
  {
    name: "Full Name",
    selector: (row) => row.fullName,
    sortable: true,
  },
  {
    name: "Company",
    selector: (row) => row.company,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
  {
    name: "Mobile",
    selector: (row) => row.mobile,
  },
  {
    name: "Website",
    selector: (row) => row.website,
  },
  {
    name: "Actions",
    selector: (row) => row.actinButtons,
  },
];

const data = [
  {
    id: 1,
    fullName: "Mr Beetlejuice",
    email: "mitesh@gmail.com",
    company : "TCS",
    website : "websiteUrl.com",
    mobile: 7567130895,
    actinButtons: <ActionButtons />,
  },
  {
    id: 1,
    fullName: "Mr Beetlejuice",
    email: "mitesh@gmail.com",
    company : "TCS",
    website : "websiteUrl.com",
    mobile: 7567130895,
    actinButtons: <ActionButtons />,
  },
  {
    id: 1,
    fullName: "Mr Beetlejuice",
    email: "mitesh@gmail.com",
    company : "TCS",
    website : "websiteUrl.com",
    mobile: 7567130895,
    actinButtons: <ActionButtons />,
  },
  {
    id: 1,
    fullName: "Mr Beetlejuice",
    email: "mitesh@gmail.com",
    company : "TCS",
    website : "websiteUrl.com",
    mobile: 7567130895,
    actinButtons: <ActionButtons />,
  },
];

const Clients = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex justify-content-between m-3">
        <h5></h5>
        <Button
          onClick={() => navigate("/clients/create-client")}
          variant="primary"
        >
          <i className="fa-solid fa-plus"></i> New Client
        </Button>
      </div>
      <DataTable title="Client List" columns={columns} pagination data={data} />
    </>
  );
};

export default Clients;
