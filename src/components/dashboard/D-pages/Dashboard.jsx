import useUserTask from "../../hooks/useUserTask";
import Loading from "../../shared/Loading";
import pluseImage from '../../../assets/image/Plus_symbol.png'
import { Link } from "react-router-dom";
import Footer from "../../../pages/footer/Footer";
import TaskDataDef from "../TaskDataDef";
import { useDrop } from "react-dnd";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    // const axiosSecure = useAxiosSecure();
    // console.log(taskCom);/
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'user_task',
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    // console.log(isOver);
    const addItemToSection = async (id) => {
        try {

            // const dtasks = tasks?.map(prev => {
            //     if (prev.id === id) {
            //         console.log(prev);
            //         return prev;
            //     }
            // })
            // setTasks(dtasks);
            setTasks(prev => {
                const dTask = prev?.map(t => {
                    if (t.id === id) {
                        return { ...t, status: 'ok' };
                    }
                })
                console.log(dTask);
                return dTask;
            })

        }
        catch (error) {
            toast.error(error.message)
        }
        // console.log('droped', id);
    }

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem('tasks')))
    }, [])





    // console.log(user_task);
    // if (isLoading) {
    //     return <Loading />
    // }
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-7">Task Management Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-5 gap-5 w-full h-auto">
                <div className="w-full h-full py-8 shadow-xl">
                    <h1 className="text-xl font-bold text-center mb-3">Create New Tasts</h1>
                    <hr className="border-2 rounded-full w-1/2 mx-auto border-blue-800 mb-8" />
                    <Link to="/dashboard/create-task">
                        <figure className="w-full h-72 border border-blue-800 shadow-xl hover:shadow-sm">
                            <img src={pluseImage} className="w-full h-full hover:scale-110 transition-all ease-in-out" alt="" />
                        </figure>
                    </Link>
                </div>
                <div className="w-full h-full text-center py-8 shadow-xl">
                    <h1 className="text-xl font-bold mb-3">Previous Tasks</h1>
                    <hr className="border-2 rounded-full w-1/2 mx-auto border-blue-800 mb-8" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-3">
                        {
                            tasks?.length > 0 && tasks?.map((task, idx) => <TaskDataDef key={idx} task={task} />
                            )
                        }
                    </div>
                    {
                        tasks?.length <= 0 && <div className="flex items-center justify-center text-2xl font-bold w-full h-[30vh]">
                            <h1>Task Not Found....!</h1>
                        </div>
                    }
                </div>
                <div className="w-full h-full text-center py-8 shadow-xl">
                    <h1 className="text-xl font-bold mb-3">Complete Tasts</h1>
                    <hr className="border-2 rounded-full w-1/2 mx-auto border-blue-800 mb-8 " />
                    <div ref={drop} className={`h-full w-full rounded-lg ${isOver ? 'bg-slate-200' : ''}`}>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-3">
                            {/* {
                                tasks.length > 0 && tasks?.map(task => <div key={task?.id} className=" cursor-grab border w-full h-auto relative group border-[#7d5fff] hover:border hover:border-white rounded-lg hover:rounded-lg overflow-hidden">
                                    <figure className="w-full h-72">
                                        <img src={task?.image} className="w-full h-full hover:scale-95 hover:rounded-lg transition-all ease-in-out" alt="photo" />
                                    </figure>
                                </div>)
                            } */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;