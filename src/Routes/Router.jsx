import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import ErrorPage from "../pages/error/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";

const Router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <Mainlayout />
    },
    {
        path:'/dashboard',
        element: <DashboardLayout />
    }
])
export default Router;