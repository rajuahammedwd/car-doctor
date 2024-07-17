import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

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
        element: <div>About</div>,
      },
      {
        path: "/signIn",
        element:<SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element:<SignUp></SignUp>,
      },
    ],
  },
]);
export default router;
