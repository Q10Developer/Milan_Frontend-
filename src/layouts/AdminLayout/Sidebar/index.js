import { useMemo } from "react";
import { Nav } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";

const MenuItem = ({ path, icon, title }) => {
  const location = useLocation();

  const activeRoute = useMemo(() => {
    return location.pathname.indexOf(path) > -1 ? "active" : "";
  }, [location, path]);

  return (
    <li className={activeRoute}>
      <NavLink className="nav-link" to={path}>
        <i className={icon} />
        <p>{title}</p>
      </NavLink>
    </li>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-background" />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-center">
          <Link to="/" className="simple-text logo-mini mx-1">
            <div className="logo-img">
              <img src="/assets/images/logo.png" alt="MTSS" />
            </div>
          </Link>
        </div>
        <Nav>
          <MenuItem path="/dashboard" icon="fa-solid fa-gauge-high" title="Dashboard" />
          <MenuItem path="/users" icon="fa-solid fa-user" title="Users" />
          <MenuItem path="/clients" icon="fa-solid fa-list" title="Clients" />
          <MenuItem path="/vehicle-and-tyre" icon="fa-sharp fa-solid fa-truck" title="Vehicle & Tyre"/>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
