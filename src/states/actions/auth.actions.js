import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

import api from "../../api";
import authAtom from "../atoms/auth";

const useAuthActions = () => {
  const [, setAuth] = useRecoilState(authAtom);

  const login = (data) => {
    const payload = {
      password: data.password,
    };

    if (/^\d{10}$/.test(data.username)) {
      payload.mobileNumber = data.username;
    } else {
      payload.email = data.username;
    }

    return api
      .post("/loginService/login", payload)
      .then(() => {
        localStorage.setItem("user", JSON.stringify(payload));
        setAuth(true);
        toast.success("Login Successful.");
      })
      .catch(() => {
        toast.error("Login Failed.");
      });
  };

  const logout = () => {
    localStorage.removeItem("user");
    setAuth(null);
    toast.success("Logout Successful.");
  };

  const registerUser = (data) => {
    return api
      .post("/registrationservice/registerUser", { ...data, usertype: 1 })
      .then(() => {
        toast.success("Registration Successful.");
      })
      .catch(() => {
        toast.error("Registration Failed.");
      });
  };

  const changePassword = (data) => {
    return api
      .post("/changePassword", { ...data, emailId: "abc@gmail.com" })
      .then(() => {
        toast.success("Password change Successful.");
      })
      .catch(() => {
        toast.error("Registration Failed.");
      });
  };

  return {
    login,
    logout,
    registerUser,
    changePassword,
  };
};

export default useAuthActions;
