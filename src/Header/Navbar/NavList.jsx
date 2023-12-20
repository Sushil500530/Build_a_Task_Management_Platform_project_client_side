/* eslint-disable react/prop-types */

const NavList = ({link, icon:Icon, title}) => {
    return (
        <>
            <a href={link} className="flex items-center text-[18px] ml-8 dark:hover:text-black font-medium px-4 py-2 duration-200 transform rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 text-xl text-[#17c0eb] hover:text-[#8e71ff] ">
                <span><Icon className="w-5 h-5 mr-1" /> </span>
                {title}
            </a>
        </>
    );
};

export default NavList;