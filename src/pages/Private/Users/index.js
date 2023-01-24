import React from 'react'
import { Button, Table } from 'react-bootstrap';
import DataTable from "react-data-table-component";
import { Link, useNavigate } from 'react-router-dom';
import ActionButtons from '../../../components/ActionButtons';


const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
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
    name: "Role",
    selector: (row) => row.role,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true
  },
  {
    name: "Actions",
    selector: (row) => row.actinButtons,
  }
];
  
const data = [
  {
    id: 1,
    name: "Beetlejuice",
    email: "mitesh@gmail.com",
    mobile: 7567130895,
    role: "Admin",
    status: "Active",
    actinButtons: <ActionButtons />,
  },
  {
    id: 1,
    name: "Beetlejuice",
    email: "mitesh@gmail.com",
    mobile: 7567130895,
    role: "Admin",
    status: "Active",
    actinButtons: <ActionButtons />,
  },
  {
    id: 1,
    name: "Beetlejuice",
    email: "mitesh@gmail.com",
    mobile: 7567130895,
    role: "Admin",
    status: "Active",
    actinButtons: <ActionButtons />,
  },
  {
    id: 1,
    name: "Beetlejuice",
    email: "mitesh@gmail.com",
    mobile: 7567130895,
    role: "Admin",
    status: "Active",
    actinButtons: <ActionButtons />,
  },
];

const Users = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex justify-content-between m-3">
        <h5></h5>
        <Button
          onClick={() => navigate("/users/create-user")}
          variant="primary"
        >
          <i className="fa-solid fa-plus"></i> New User
        </Button>
      </div>
      <DataTable
        title="User List"
        columns={columns}
        pagination
        data={data}
      />
    </>
  );
}

export default Users