import AdminLayout from "../layouts/AdminLayout";
import AuthenticationLayout from "../layouts/AuthenticationLayout";
import ChangePassword from "../pages/Private/ChangePassword";
import Clients from "../pages/Private/Clients";
import CreateClient from "../pages/Private/Clients/CreateClient";
import Dashboard from "../pages/Private/Dashboard";
import Users from "../pages/Private/Users";
import CreateUser from "../pages/Private/Users/CreateUser";
import VehicleAndTyre from "../pages/Private/Vehicle_and_tyre";
import CreateVehicle from "../pages/Private/Vehicle_and_tyre/CreateVehicle";
import Login from "../pages/Public/Login";

const routes = [
  {
    path: "/",
    element: <AuthenticationLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
    ],
  },
  {
    path: "/users",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Users />,
      },
      {
        path: "create-user",
        element: <CreateUser />,
      },
    ],
  },
  {
    path: "/clients",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Clients />,
      },
      {
        path: "create-client",
        element: <CreateClient />,
      },
    ],
  },
  {
    path: "/vehicle-and-tyre",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <VehicleAndTyre />,
      },
      {
        path: "create-vehicle",
        element: <CreateVehicle/>
      },
    ],
  },
];

export default routes;
