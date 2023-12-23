/* eslint-disable react/prop-types */

import { MdFavorite } from "react-icons/md";
import { NavLink } from "react-router-dom";


const ManuList = () => {
    return (
        <>
            <NavLink
                to='/'
                className={({ isActive }) =>
                    isActive
                        ? "btn bg-gradient-to-r from-blue-800 to-blue-950 hover:text-green-500 text-white px-10"
                        : "text-black btn bg-transparent border-none"
                } >
                Home
            </NavLink>
            <NavLink
                to='dashboard'
                className={({ isActive }) =>
                    isActive
                        ? "btn bg-gradient-to-r from-blue-800 to-blue-950 hover:text-green-500 text-white px-10"
                        : "text-black btn bg-transparent border-0 outline-none"
                } >
                Let’s Explore
            </NavLink>
            <NavLink
                to='favorite'
                className={({ isActive }) =>
                    isActive
                        ? "btn bg-gradient-to-r from-blue-800 to-blue-950 hover:text-green-500 text-blue-800 px-10"
                        : "text-red-600 btn bg-transparent border-0 outline-none"
                } >
               <MdFavorite className="w-6 h-6 " />
            </NavLink>

        </>
    );
};

export default ManuList;