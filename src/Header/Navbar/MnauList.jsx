/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";


const ManuList = () => {
    return (
        <>
            <NavLink
                to='/'
                className={({ isActive }) =>
                    isActive
                        ? "btn bg-gradient-to-r from-[#344281] hover:text-black to-[#9b04ff] text-white px-10"
                        : "text-black btn bg-transparent border-none"
                } >
                Home
            </NavLink>
            <NavLink
                to='dashboard'
                className={({ isActive }) =>
                    isActive
                        ? "btn bg-gradient-to-r from-[#344281] to-[#9b04ff] hover:text-black text-white px-10"
                        : "text-black btn bg-transparent border-0 outline-none"
                } >
                Let’s Explore
            </NavLink>
            {/* <NavLink
                to='login'
                className={({ isActive }) =>
                    isActive
                        ? "btn bg-gradient-to-r from-[#344281] to-[#9b04ff] hover:text-black text-white px-10"
                        : "text-black btn bg-transparent border-0 outline-none"
                } >
                Login
            </NavLink> */}

        </>
    );
};

export default ManuList;