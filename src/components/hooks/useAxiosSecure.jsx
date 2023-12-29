import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logoutUser } = useAuth();
    useEffect(() => {
        axiosSecure?.interceptors?.response?.use(res => {
            // console.log(res);
            return res;
        }, error => {
            // console.log(error);
            if (error?.response?.status === 401 || error?.response?.status === 403) {
                return navigate('/dashboard')
                // toast.error('cannot find your token! log out the user');
                // logoutUser()
                //     .then(() => {
                //         toast.error('cannot find your token! log out the user');
                        // return navigate('/login')
                    // })
                    // .catch(error => console.error(error))
            }
        })
    }, [navigate, logoutUser])
    return axiosSecure;
};

export default useAxiosSecure;