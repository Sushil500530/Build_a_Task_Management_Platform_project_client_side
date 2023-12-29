import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import Container from "../../../../components/shared/Container";
import { MdOutlineFavorite } from "react-icons/md";
import { MdAddTask } from "react-icons/md";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import TaskSolved from "./TaskSolved";
import useTaskAll from "../../../../components/hooks/useTaskAll";
import TaskDatas from "../TaskDatas";
import Footer from "../../../footer/Footer";

const TaskDetails = () => {
    const data = useLoaderData();
    const { taskName, image, category, type, description, startDate, endDate, taskOwnerName, taskOwnerEmail, tastOwnerPhoto } = data || {};
    const taskDatas = useTaskAll('');
    // console.log(taskDatas);
    const addMyTask = () => {
        Swal.fire({
            title: "Are you sure Added?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Successfully!",
                    text: "Your file has been success.",
                    icon: "success"
                });
            }
        });
    }
    return (
        <Container>
            <div className=" dark:bg-zinc-800 dark:text-white py-5">
                <div className="flex flex-col md:flex-col lg:flex-row justify-around mt-7">
                    <div className="w-full h-[600px] lg:w-[50%] border">
                        <img className="h-full w-full rounded" src={image} alt="meal-photo" />
                    </div>
                    <div className="lg:h-auto space-y-3 flex flex-col p-5 justify-center items-center lg:items-start lg:justify-start lg:flex-col lg:w-[40%]">
                        <div className="space-y-3">
                            <h2 className="text-2xl font-semibold">Task Name: {taskName}</h2>
                            <p className="first-letter:text-7xl first-letter:text-blue-800 first-letter:font-bold">{description}</p>
                        </div>
                        <div className="border p-5 space-y-3">
                            <h1 className="font-bold text-[18px]">Task Technologies Category : <span className="font-medium capitalize">{category}</span></h1>
                            <h1 className="font-bold text-[18px]">Task Type : <span className="font-medium">{type}</span></h1>
                            <h1 className="font-bold text-[18px]">Task Start Date: <span className="font-medium">{startDate}</span></h1>
                            <h1 className="font-bold text-[18px]">Task End Date: <span className="font-medium">{endDate}</span></h1>
                            <div className="mt-5 space-y-2">
                                <h1 className="font-bold text-[18px]">Task Owner Name: <span className="font-medium">{taskOwnerName}</span></h1>
                                <h1 className="font-bold text-[18px]">Task Owner Email: <span className="font-medium">{taskOwnerEmail}</span></h1>
                                <div className="flex items-center justify-between">
                                    <h1 className="font-bold text-[18px]">Task Owner Photo:</h1>
                                    <div className="avatar">
                                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={tastOwnerPhoto} alt="owner-photo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <h3 className="text-xl font-semibold">Review :</h3>
                            <span>
                                <Rating
                                    style={{ maxWidth: 180, height: 27, color: '#f7bd16', }}
                                    value={5}
                                    readOnly
                                />
                            </span>
                        </div>
                        <div className="flex gap-5 mt-5">
                            <button onClick='{handleReturn}' className="btn bg-gradient-to-r from-blue-800 to-blue-950 text-white hover:text-green-500 transition ease-in capitalize text-[18px] font-semibold ">Read More</button>
                            <button onClick={() => toast.success("Added To Your Favorite!")} className="btn bg-gradient-to-r from-blue-800 to-blue-950 hover:text-green-500 transition ease-in capitalize text-[18px] text-white font-semibold "><span><MdOutlineFavorite className="w-6 h-6" /></span>Add Favorite</button>
                            <button onClick={addMyTask} className="btn bg-gradient-to-r from-blue-800 to-blue-950 hover:text-green-500 transition ease-in capitalize text-[18px] text-white font-semibold "><span><MdAddTask className="w-6 h-6" /></span>Add My Task</button>
                        </div>
                    </div>
                </div>
                <TaskSolved />
                <div className=" space-y-3 p-5">
                    <h1 className="text-2xl font-bold">About Task Management Platfrom</h1>
                    <hr className="border-black w-[28%] my-3 dark:border-white" />
                    <p>
                        By definition, task management tools are any digital platform that helps individuals and teams manage their tasks. These are more than just simple to-do-lists. Task management tools allow teams to collaborate digitally by organizing, prioritizing, and assigning tasks to each other.
                    </p>
                </div>
                <h1 className="text-2xl font-bold text-start my-12">Show More Task</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
                    {
                        taskDatas?.slice(0, 4)?.map((item) =>
                            <TaskDatas
                                key={item?._id}
                                item={item}
                            ></TaskDatas>
                        )
                    }
                </div>
            </div>
            <Footer />
        </Container>
    );
};

export default TaskDetails;