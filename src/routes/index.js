import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/Private/Dashboard";
import Login from "../pages/Public/Login";

const routes = [
  {
    path: "/",
    element: <Login />,
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
