/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/shared/Loading";
import useAuth from "../components/hooks/useAuth";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Loading />
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={location?.pathname} replace ></Navigate>
};

export default PrivetRoute;