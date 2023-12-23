/* eslint-disable react/prop-types */
import { MdShare } from "react-icons/md";
import animate from '../../../assets/image/Animation.gif'
import { Link } from "react-router-dom";
const TaskDatas = ({ item }) => {
    const { image, taskName, _id, type } = item || {};
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