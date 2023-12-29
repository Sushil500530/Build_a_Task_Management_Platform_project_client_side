import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useComplete = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: taskCom = [], refetch, isLoading } = useQuery({
        queryKey: !['user', user],
        queryFn: async () => {
            if (user) {
                const res = await axiosSecure.get(`/taskCom/${user?.email}`);
                return res.data
            }
        }
    })
    return [taskCom, refetch, isLoading]
};

export default useComplete;