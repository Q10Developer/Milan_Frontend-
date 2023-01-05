import { useCallback } from "react";
import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import useAuthActions from "../../../states/actions/auth.actions";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const authActions = useAuthActions();
  
  const mobileSidebarToggle = useCallback((e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button
            variant="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
            onClick={mobileSidebarToggle}
          >
            <i className="fas fa-ellipsis-v"></i>
          </Button>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" navbar>
            <Dropdown as={Nav.Item} alignRight>
              <Dropdown.Toggle
                aria-expanded={false}
                aria-haspopup={true}
                as={Nav.Link}
                data-toggle="dropdown"
                id="navbarDropdownMenuLink"
                variant="default"
                className="m-0"
              >
                <i className="nc-icon nc-circle-09" style={{ fontSize: '30px' }}></i>
              </Dropdown.Toggle>
              <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
                <Dropdown.Item>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate('/dashboard/change-password')}>
                  Change Password
                </Dropdown.Item>
                <div className="divider"></div>
                <Dropdown.Item onClick={() => authActions.logout()}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;
