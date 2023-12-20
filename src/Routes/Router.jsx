import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import ErrorPage from "../pages/error/ErrorPage";

const Router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <Mainlayout />
    }
])
export default Router;