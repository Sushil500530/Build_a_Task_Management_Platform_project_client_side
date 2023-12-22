import toast from "react-hot-toast";
import {FaHome, FaSignOutAlt, FaUserPlus} from 'react-icons/fa';
import {  MdDashboard, MdLogin } from "react-icons/md";
import ManuList from "../Navbar/MnauList";
import useAuth from "../../components/hooks/useAuth";
const Sidebar = () => {
    const {user,logoutUser} = useAuth()
    const handleLogout = () => {
        logoutUser()
            .then(() => {
                return toast.success("logout successfully!")
            })
    }
    return (
        <>
            <div className="drawer-side z-30">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu w-80 min-h-full bg-blue-50 flex items-center text-black">
                    {/* Sidebar content here */}
                    <ManuList link={"/"} title={"Home"} icon={FaHome} />
                    <ManuList link={"/"} title={"Login"} icon={MdLogin} />
                  <ManuList link={"/dashboard"} title={"Let’s Explore"} icon={MdDashboard} />
                    {
                        user?.email ? <div className="flex gap-3 mt-5">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button " className="btn btn-ghost btn-circle avatar ring ring-white">
                                    <div className="rounded-full">
                                        <img src={user?.photoURL} alt="profile" className="w-full h-full" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 -mr-32 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li><a>Dashboard</a></li>
                                    <li><a>Profile</a></li>
                                    <li onClick={handleLogout}><a>Logout</a></li>
                                </ul>
                            </div>
                            <button onClick={handleLogout} className="bg-[#ef0d4d] text-white rounded flex gap-2 items-center text-[18px] font-medium px-4 py-2  duration-200 transform hover:text-blue-500 hover:-translate-y-[2px] transition-all ease-in hover:scale-100 ">
                                <span><FaSignOutAlt /></span>
                                Logout
                            </button>
                        </div> :
                            <>
                                <ManuList address={'login'} linkTitle={"Login"} icon={MdLogin} />
                                <span className="hover:bg-gradient-to-r from-blue-800 to-blue-950 hover:text-green-500 rounded-md text-white animate-bounce hover:animate-none mt-5">
                                    <ManuList address={'signup'} linkTitle={"Signup"} icon={FaUserPlus} />
                                </span>
                            </>
                    }
                </ul>
            </div>
        </>
    );
};

export default Sidebar;