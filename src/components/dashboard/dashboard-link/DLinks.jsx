/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const DLinks = ({ link, title, icon: Icon}) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        ` flex items-center text-[18px] font-medium px-4 py-2  duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100  ${isActive ? ' border-b-[3px] border-b-fuchsia-500' : ''
        }`} >
      <span>{<Icon className="w-5 h-8 mr-1 "/>}</span>
        {title}
    </NavLink>
  );
};

export default DLinks;