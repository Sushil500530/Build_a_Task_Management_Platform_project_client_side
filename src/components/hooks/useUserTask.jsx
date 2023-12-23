import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserTask = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: user_task = [], refetch, isLoading } = useQuery({
        queryKey: ['users', user],
        queryFn: async () => {
            if (user) {
                const res = await axiosSecure.get(`/taskData/${user?.email}`);
                return res.data
            }
        }
    })
    return [user_task, refetch, isLoading]
};

export default useUserTask;