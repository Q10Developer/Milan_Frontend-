import AdminLayout from "../layouts/AdminLayout";
import AuthenticationLayout from "../layouts/AuthenticationLayout";
import Dashboard from "../pages/Private/Dashboard";
import Login from "../pages/Public/Login";
import Signup from "../pages/Public/Signup";

const routes = [
  {
    path: "/",
    element: <AuthenticationLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
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
    ],
  },
];

export default routes;
