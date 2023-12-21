import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import LoginPage from './../pages/login/LoginPage';
import Home from "../pages/Home/Home";
import Mainlayout from './../layouts/Mainlayout';
import RegisterPage from "../pages/register/RegisterPage";

const Router = createBrowserRouter([
    {
        path: '/',
        errorElement:<ErrorPage />,
        element: <Mainlayout />,
        children:[
            {
                path:'/',
                element: <Home />
            },
           
            {
                path:'login',
                element: <LoginPage />
            },
          
        ]
    },
    {
        path:'/register',
        element: <RegisterPage />
    },
    {
        path:'/dashboard',
        element: <DashboardLayout />
    }
])
export default Router;