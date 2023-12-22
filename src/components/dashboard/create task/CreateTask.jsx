import { useState } from "react";
import Footer from "../../../pages/footer/Footer";
import { FaSpinner } from 'react-icons/fa';
import toast from "react-hot-toast";
import { imageUpload } from "../../../api/imageUpload";
import useAuth from "../../hooks/useAuth";

const CreateTask = () => {
    const{user} = useAuth();
    console.log(user);
    const [loading, setLoading] = useState(false);
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
                category,
                type,
                description,
                startDate,
                endDate,
                taskOwnerName:user?.displayName,
                taskOwnerEmail:user?.email,
                tastOwnerPhoto:user?.photoURL
            }
            console.log(taskDoc);
        }
        catch (error) {
            setLoading(false);
            toast.error(error.message)
        }
        // console.log({ taskName, image, category, description, startDate, endDate });
    }
    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-8">Create Your Favourite Task</h1>
            <div>
                <form onSubmit={handleCreateTask} className=" p-5 ">
                    <div className="flex gap-10">
                        <div className="w-full space-y-3">
                            <div className="flex flex-col gap-2">
                                <label className="text-xl font-medium">Task Name*</label>
                                <input type="text" placeholder="Task Name....." name="name" className="input input-bordered input-primary w-full text-[18px]" required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xl font-medium">Your Task Thumbnail*</label>
                                <input type="file" name='thumbnail' className="file-input file-input-bordered file-input-primary w-full" required />
                            </div>
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
                                <label className="text-xl font-medium">Task Type*</label>
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
            </div>
            <Footer />
        </div>
    );
};

export default CreateTask;