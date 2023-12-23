import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useFavorite = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: favorite = [], refetch, isLoading } = useQuery({
        queryKey: ! ['user', user],
        queryFn: async () => {
            if (user) {
                const res = await axiosSecure.get(`/favorites/${user?.email}`);
                return res.data
            }
        }
    })
    return [favorite, refetch, isLoading]
};

export default useFavorite;