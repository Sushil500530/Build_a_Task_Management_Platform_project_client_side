import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import LoginPage from './../pages/login/LoginPage';
import Home from "../pages/Home/Home";
import Mainlayout from './../layouts/Mainlayout';
import RegisterPage from "../pages/register/RegisterPage";
import ForPeople from "../pages/for/ForPeople";
import Dashboard from "../components/dashboard/D-pages/Dashboard";
import CreateTask from "../components/dashboard/create task/CreateTask";
import Profile from "../components/dashboard/profile/Profile";

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
        element: <DashboardLayout />,
        children:[
            {
               index:true,
                element:<Dashboard />
            },
            {
                path:'for-people',
                element:<ForPeople />
            },
            {
                path:'create-task',
                element:<CreateTask />
            },
            {
                path:'profile',
                element:<Profile />
            },
        ]
    }
])
export default Router;