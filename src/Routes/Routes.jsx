import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Login_Register/Register/Register";
import Login from "../Pages/Login_Register/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layouts/Dashboard";
import WelcomeHome from "../Pages/Dashboard/WelcomeHome/WelcomeHome";
import UserHome from "../Pages/Dashboard/User/UserHome/UserHome";
// import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/registration",
                element: <Register></Register>,
                
            },
            {
                path: "/login",
                element: <Login></Login>,
                
            }


        ]
    },

    {
        path: "/dashboard",
        errorElement: <ErrorPage></ErrorPage>,
        element: (
            <PrivateRoute>
                <Dashboard></Dashboard>
            </PrivateRoute>
        ),
        children: [
            {
                path: "/dashboard",
                element: <WelcomeHome></WelcomeHome>
            },
            // {
            //     path: "manageUsers", // Update the path to be relative
            //     element:<ManageUsers></ManageUsers>
            //   },

              {
                path: "userHome",
                element: <UserHome></UserHome>
              }
        ]
    }
])


export default router;