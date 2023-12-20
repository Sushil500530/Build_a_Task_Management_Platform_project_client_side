import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import NavList from "../Header/Navbar/NavList";
import { Outlet } from "react-router-dom";


const DashboardLayout = () => {
    const [isActive, setActive] = useState(true);
    const handleToggle = () => {
        setActive(!isActive)
    }

    return (
        <div>
            {<h1 className="text-2xl font-bold text-center lg:ml-64 bg-gradient-to-r from-blue-800 to-blue-950 text-white py-2">Welcome Author name🎉🎉🎉</h1>}
            <div className="flex w-full min-h-auto ">
                <div className='text-gray-800 flex justify-between items-center lg:hidden w-full h-10 '>
                    <div></div>
                    <button onClick={handleToggle} className='dark:bg-zinc-800 mobile-menu-button p-4 focus:outline-none'>
                        <HiOutlineBars3 className={`h-8 w-8 hover:text-blue-400 transition left-0 ${!isActive ? 'text-blue-400' : 'text-black'} `} />
                    </button>
                </div>
                <div className={`z-10 pb-6 fixed bg-blue-50 overflow-y-auto w-64 h-auto space-y-6 px-2 inset-y-0 left-0 transform lg:block ${isActive && '-translate-x-full'} lg:translate-x-0  dark:text-white dark:bg-zinc-800 transition duration-200 ease-in-out`}>
                    <NavList link={'/hellow'} icon={HiOutlineBars3} title={"Home"}></NavList>
                    {/* <Manubar /> */}
                </div>
            </div>
            <div className="border bg-blue-50 flex-1 mb-12 ml-0 lg:ml-64">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;