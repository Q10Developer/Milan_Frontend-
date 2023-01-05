import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import authAtom from "../../states/atoms/auth";

const AuthenticationLayout = () => {
  const auth = useRecoilValue(authAtom);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (auth) navigate('/dashboard');
  }, [auth, navigate]);

  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <div
          className="col-12 p-0 col-lg-8"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundImage: "url(/assets/images/banner.jpeg)",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "100vh", backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <img src="/assets/images/logo.png" alt="MTSS" width="200" />
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="px-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationLayout;