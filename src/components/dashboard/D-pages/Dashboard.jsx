import useUserTask from "../../hooks/useUserTask";
import Loading from "../../shared/Loading";
import pluseImage from '../../../assets/image/Plus_symbol.png'
import { Link } from "react-router-dom";
import Footer from "../../../pages/footer/Footer";

const Dashboard = () => {
    const [user_task, refetch, isLoading] = useUserTask();
    refetch();
    // console.log(user_task);
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-7">Task Management Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-5 gap-5 w-full h-auto">
                <div className="w-full h-auto py-8 shadow-xl">
                    <h1 className="text-xl font-bold text-center mb-3">Create New Tasts</h1>
                    <hr className="border-2 rounded-full w-1/2 mx-auto border-blue-800 mb-8" />
                    <Link to="/dashboard/create-task">
                        <figure className="w-full h-72 border border-blue-800 shadow-xl hover:shadow-sm">
                            <img src={pluseImage} className="w-full h-full hover:scale-110 transition-all ease-in-out" alt="" />
                        </figure>
                    </Link>
                </div>
                <div className="w-full h-auto text-center py-8 shadow-xl">
                    <h1 className="text-xl font-bold mb-3">Previous Tasks</h1>
                    <hr className="border-2 rounded-full w-1/2 mx-auto border-blue-800 mb-8" />
                    <div className="grid grid-cols-2 gap-5 p-3">

                        {
                            user_task?.map(task =>
                                <div key={task?._id} className=" cursor-pointer border w-full h-auto relative group border-[#7d5fff] hover:border-none group rounded-lg hover:rounded-lg overflow-hidden">
                                    <figure className="w-full h-72">
                                        <img src={task?.image} className="w-full h-full hover:scale-95 transition-all ease-in-out" alt="" />
                                    </figure>
                                    <div className='bg-gradient-to-b from-blue-800 to-blue-950 z-10 pb-6 absolute w-full h-auto inset-y-0 flex items-center hover:opacity-90 justify-center flex-col transform lg:block translate-y-full group-hover:translate-y-0 dark:text-white dark:bg-zinc-800 transition duration-500 ease-in-out inset-0 overflow-x-hidden opacity-0 group-hover:opacity-100  rounded-lg'>
                                        <h1 className="absolute text-xl font-bold text-center top-20 text-white">Drug to Paste Complete Tasks</h1>

                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="w-full h-auto text-center py-8 shadow-xl">
                    <h1 className="text-xl font-bold mb-3">Complete Tasts</h1>
                    <hr className="border-2 rounded-full w-1/2 mx-auto border-blue-800 mb-8 " />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laudantium similique temporibus deserunt quia vitae provident recusandae sunt officiis optio, nemo harum doloremque saepe cumque in rerum praesentium fugit? Consequuntur.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;