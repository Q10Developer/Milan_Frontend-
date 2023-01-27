import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import DataTable from "react-data-table-component";
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import ActionButtons from '../../../components/ActionButtons';
import UserActions from '../../../states/actions/userActions';
import userListAtom from '../../../states/atoms/users';


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

  const users = useRecoilValue(userListAtom);
  const userActions = UserActions();

  const navigate = useNavigate();

  useEffect(() => {
    userActions.fetchUsers();
  },[])

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
      <Card>
        <Card.Body>
          <DataTable
            title="User List"
            columns={columns}
            pagination
            data={data}
          />
        </Card.Body>
      </Card>
    </>
  );
}

export default Users