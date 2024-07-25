import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Error from "../Page/Error/Error";
import CheckOut from "../Page/CheckOut/CheckOut";
import About from "../Page/Home/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/signIn",
        element:<SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element:<SignUp></SignUp>,
      },
      {
        path: "/checkOut/:id",
        element: <CheckOut></CheckOut>,
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      }
    ],
    errorElement: <Error></Error>,
  },
]);
export default router;
