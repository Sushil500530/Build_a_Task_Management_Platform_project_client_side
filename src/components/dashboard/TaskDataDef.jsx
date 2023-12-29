/* eslint-disable react/prop-types */

import { useDrag } from "react-dnd";

const TaskDataDef = ({ task}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'user_task',
        item:{id: task.id,},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    // console.log(isDragging);
    // console.log(task);
    return (
        <div ref={drag} className=" cursor-grab border w-full h-auto relative group border-[#7d5fff] hover:border hover:border-white rounded-lg hover:rounded-lg overflow-hidden">
            <figure className="w-full h-72">
                <img src={task?.image} className="w-full h-full hover:scale-95 hover:rounded-lg transition-all ease-in-out" alt="photo" />
            </figure> 
        </div>
    );
};

export default TaskDataDef;