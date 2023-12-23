import { MdSearch } from "react-icons/md";
import useTaskAll from "../../../components/hooks/useTaskAll";
import Container from "../../../components/shared/Container";
import Loading from "../../../components/shared/Loading";
import { useState } from "react";
import TaskDatas from "./TaskDatas";



const TaskData = () => {
    const [search, setSearch] = useState('');
    const taskDatas = useTaskAll(search);
    const [loading, setLoading] = useState(false);
    // console.log(taskDatas);

    const handleSearch = async (e) => {
        setLoading(true)
        e.preventDefault();
        const form = e.target;
        const searchText = form.search.value;
        setTimeout(() => {
            setLoading(false);
            setSearch(searchText);
        }, "1000");
    }
    return (
        <Container>
            <div className="my-12">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">Show Our Favorite Task Managements</h1>
                <div className="my-8">
                    <div className="flex flex-col gap-2 relative w-full md:w-1/2 lg:w-1/3 mx-auto">
                        <form onSubmit={handleSearch}>
                            <input type="search" placeholder="Search....." name="search" className="input pr-32 input-bordered input-primary w-full text-[18px]" required />
                            <button type="submit" className="btn bg-gradient-to-r from-blue-800 to-blue-950 hover:text-green-500 text-white text-[18px] absolute top-0 right-0 flex items-center justify-center gap-2">Search <span><MdSearch className="w-7 h-7" /></span></button>
                        </form>
                    </div>
                    <h1 className="font-medium p-5">Some Task Here.......</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
                        {
                            taskDatas?.map((item) =>
                                <TaskDatas
                                    key={item?._id}
                                    item={item}
                                ></TaskDatas>
                            )
                        }
                    </div>
                    {
                        loading !== false ? <Loading /> : ''
                    }
                    {
                        taskDatas.length === 0 ? <h1 className="text-xl font-bold text-center">Data Not Found...!</h1> : ''
                    }

                </div>
            </div>
        </Container>
    );
};

export default TaskData;