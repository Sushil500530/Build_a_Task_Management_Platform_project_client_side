import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useTaskAll = ( search) => {
    const axiosSecure = useAxiosSecure();
    const [taskDatas, setTaskDatas] = useState([]);
    useEffect(() => {
        axiosSecure(`/taskDatas?search=${search}`)
        .then(res => setTaskDatas(res.data))
    }, [search,axiosSecure]);
    return taskDatas;
}
export default useTaskAll;