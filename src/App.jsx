import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./pages/Verify";
import Reset from "./pages/Reset";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home />
        <ToastContainer id="toast" />
      </div>
    ),
  },
  {
    path: "/verify/:key",
    element: (
      <div>
        <Verify />
        <ToastContainer id="toast" />
      </div>
    ),
  },
  {
    path: "/reset/:key",
    element: (
      <div>
        <Reset />
        <ToastContainer id="toast" />
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
