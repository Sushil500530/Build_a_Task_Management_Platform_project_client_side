import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import LoginPage from './../pages/login/LoginPage';
import Home from "../pages/Home/Home";
import Mainlayout from './../layouts/Mainlayout';
import RegisterPage from "../pages/register/RegisterPage";
import ForPeople from "../components/dashboard/for/ForPeople";
import Dashboard from "../components/dashboard/D-pages/Dashboard";
import CreateTask from "../components/dashboard/create task/CreateTask";
import Profile from "../components/dashboard/profile/Profile";
import TaskDetails from "../pages/task/task-components/task-details/TaskDetails";
import Favorite from "../pages/favorite/Favorite";
import PrivetRoute from "../provider/PrivetRoute";

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
            {
                path:'favorite',
                element: <PrivetRoute><Favorite /></PrivetRoute>
            },
            {
                path:'task-details/:id',
                loader: ({params}) => fetch(`http://localhost:5000/task-all/${params.id}`),
                element: <PrivetRoute><TaskDetails /></PrivetRoute>
            },
          
        ]
    },
    {
        path:'/register',
        element: <RegisterPage />
    },
    {
        path:'/dashboard',
        element: <PrivetRoute><DashboardLayout /></PrivetRoute>,
        children:[
            {
               index:true,
                element:<Dashboard />
            },
            {
                path:'for-people',
                element:<PrivetRoute><ForPeople /></PrivetRoute>
            },
            {
                path:'create-task',
                element:<PrivetRoute><CreateTask /></PrivetRoute>
            },
            {
                path:'profile',
                element:<Profile />
            },
        ]
    }
])
export default Router;