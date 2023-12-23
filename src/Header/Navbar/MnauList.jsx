/* eslint-disable react/prop-types */

import { MdFavorite } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useFavorite from "../../components/hooks/useFavorite";


const ManuList = () => {
    const [favorite, , ] = useFavorite();
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
                        ? "btn bg-gradient-to-r from-blue-800 to-blue-950 hover:text-green-500 text-white px-10"
                        : "text-red-600 btn bg-transparent border-0 outline-none px-10"
                } >
               <MdFavorite className="w-6 h-6 " />
               <div className="badge text-green-600 absolute top-4">{favorite.length}</div>
            </NavLink>

        </>
    );
};

export default ManuList;