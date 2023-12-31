import { useState } from "react";
import Footer from "../../../pages/footer/Footer";
import { FaSpinner } from 'react-icons/fa';
import { MdCreate } from "react-icons/md";
import toast from "react-hot-toast";
import { imageUpload } from "../../../api/imageUpload";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from 'uuid';



const CreateTask = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(false);
    const taskItems = JSON.parse(localStorage.getItem('tasks')) || [];
    // console.log(taskItems);

    const handleCreateTask = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;
        const taskName = form.name.value;
        const image = form.thumbnail.files[0];
        const category = form.category.value;
        const type = form.type.value;
        const description = form.details.value;
        const startDate = form.start_date.value;
        const endDate = form.end_date.value;

        try {
            const loadImage = await imageUpload(image);
            const taskDoc = {
                taskName,
                image: loadImage?.data?.display_url,
                id: uuidv4(),
                category,
                type,
                description,
                startDate,
                endDate,
                taskOwnerName: user?.displayName,
                taskOwnerEmail: user?.email,
                tastOwnerPhoto: user?.photoURL
            }
            // console.log(taskDoc);
            taskItems.push({ 
                taskName,
                image: loadImage?.data?.display_url,
                id: uuidv4(),
                category,
                type,
                description,
                startDate,
                endDate,
                taskOwnerName: user?.displayName,
                taskOwnerEmail: user?.email,
                tastOwnerPhoto: user?.photoURL
             })
            localStorage.setItem('tasks', JSON.stringify(taskItems))
            axiosSecure.post('/task-products', taskDoc)
                .then(res => {
                    console.log(res.data);
                    if (res.data?.insertedId) {
                        setLoading(false);
                        Swal.fire({
                            title: `Wow🎉✨! <br /> ${taskName}`,
                            text: "Task Added Successfully!",
                            icon: "success",
                            timer: '1000'
                        });
                        form.reset();
                    }
                })
                .catch(error => toast.error(error.message))
        }
        catch (error) {
            setLoading(false);
            toast.error(error.message)
        }

    }
    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-8 flex items-center justify-center gap-3">Create Your Favourite Task <span><MdCreate /></span></h1>
            <form onSubmit={handleCreateTask} className=" p-5 ">
                <div className="flex gap-10 mb-8">
                    <div className="w-full space-y-3">
                        <div className="flex flex-col gap-2">
                            <label className="text-xl font-medium">Task Name*</label>
                            <input type="text" placeholder="Task Name....." name="name" className="input input-bordered input-primary w-full text-[18px]" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xl font-medium">Your Task Thumbnail*</label>
                            <input type="file" name='thumbnail' className="file-input file-input-bordered file-input-primary w-full" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xl font-medium">Task Category*</label>
                            <select name="category" className="select select-primary w-full text-[18px] " >
                                <option disabled selected>Select Category</option>
                                <option value='developer'>Developer</option>
                                <option value='data scientist'>Data Scientist</option>
                                <option value='graphics designer'>Graphics Designer</option>
                                <option value='banker'>Banker</option>
                                <option value='corporator'>Corporator</option>
                                <option value='digital marketer'>Digital Marketer</option>
                                <option value='education'>Education</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xl font-medium">Task Details*</label>
                            <textarea className="textarea textarea-primary text-[18px]" placeholder="Write Details..." name="details" required></textarea>
                        </div>
                    </div>
                    <div className="w-full space-y-3">
                        <div className="flex flex-col gap-2">
                            <label className="text-xl font-medium">Task Type*</label>
                            <select name="type" className="select select-primary w-full text-[18px] " >
                                <option disabled selected>Select Your Task Type</option>
                                <option value='hard'>Hard</option>
                                <option value='medium'>Medium</option>
                                <option value='low'>Low</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xl font-medium">Start Date*</label>
                            <input type="date" placeholder="Task Name....." name="start_date" className="input input-bordered input-primary w-full text-[18px]" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xl font-medium">End Date*</label>
                            <input type="date" placeholder="Task Name....." name="end_date" className="input input-bordered input-primary w-full text-[18px]" required />
                        </div>
                        <button className="btn bg-gradient-to-r from-blue-800 to-blue-950 w-full text-xl hover:text-green-500 text-white mt-5">
                            {loading ? (
                                <span className='flex items-center justify-center gap-3'> <FaSpinner className='m-auto animate-spin' size={24} /> Processing....</span>
                            ) : (
                                'Created Task'
                            )}
                        </button>
                    </div>
                </div>

            </form>
            <Footer />
        </div>
    );
};

export default CreateTask;