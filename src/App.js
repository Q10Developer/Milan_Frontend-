import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ToastContainer } from 'react-toastify';

import routes from "./routes";

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
      <ToastContainer/>
    </RecoilRoot>
  );
};

export default App;
