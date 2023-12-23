/* eslint-disable react/prop-types */
import { MdOutlineFavorite, MdShare } from "react-icons/md";
import animate from '../../../assets/image/Animation.gif'
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../../components/hooks/useAuth";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
const TaskDatas = ({ item }) => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { _id, taskName, image, category, type, } = item || {};

    const handleFavorite = async () => {
        if (!user) {
            return toast.error('Please Login first, then add to favorite!')
        }
        const favoriteData = {
            taskName,
            image,
            category,
            type,
            data: new Date(),
            fa_Owner: user?.email,
            fa_Owner_Email: user?.displayName
        }
        try{
           await axiosSecure.post('/favorite', favoriteData)
            .then(res => {
                if(res.data.insertedId){
                    toast.success("Added To Your Favorite!")
                    console.log('database data added', res.data);
                }
            })
        }
        catch (error) {
            toast.error(error.message)
        }
      
        // console.log(favoriteData);
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <Link to={`/task-details/${_id}`}>
                <figure className="w-full h-80 rounded-xl">
                    <img src={image} alt="task-photo" className="w-full h-full hover:scale-110 transition-all ease-in-out cursor-pointer rounded-xl" />
                </figure>
            </Link>
            <div className="flex items-center justify-between p-3">
                <div className="flex flex-col">
                    <h1 className="text-xl font-bold">{taskName}</h1>
                    <p className="font-medium m-0 p-0">Type: <span className="font-normal">{type}</span></p>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <span onClick={handleFavorite} className="text-blue-800 transition ease-in capitalize text-[18px] font-semibold cursor-pointer"><span><MdOutlineFavorite className="w-6 h-6" /></span></span>
                    <span><MdShare className="w-8 h-8 cursor-pointer" /></span>
                    <Link to={`/task-details/${_id}`}>
                        <button className="btn hover:text-green-500 text-white text-[18px]">
                            <img src={animate} className="w-full h-full" alt="animate" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TaskDatas;