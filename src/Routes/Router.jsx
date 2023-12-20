import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout />
    }
])
export default Router;