import { useEffect, useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import authAtom from "../../states/atoms/auth";
import AdminNavbar from "./AdminNavbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  const mainPanel = useRef(null);
  const location = useLocation();
  const auth = useRecoilValue(authAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) navigate('/');
  }, [auth, navigate]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);

  return (
    <div className="wrapper">
      <Sidebar/>
      <div className="main-panel" ref={mainPanel}>
        <AdminNavbar />
        <div className="content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
