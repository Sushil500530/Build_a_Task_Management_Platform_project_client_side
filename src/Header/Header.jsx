import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <div className="bg-base-300">
            <Navbar>
                <Outlet></Outlet>
            </Navbar>
        </div>
    );
};

export default Header;