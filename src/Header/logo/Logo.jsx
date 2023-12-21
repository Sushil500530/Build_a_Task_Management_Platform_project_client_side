import { Link } from 'react-router-dom';
import logo from '../../assets/image/banner.jpg'
const Logo = () => {
    return (
        <div className='flex items-center gap-5 py-2'>
            <Link to='/'>
                <img src={logo} className='w-20 h-20 rounded-t-full rounded-lg' alt="" />
            </Link>
                <h1 className="capitalize text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-[#344281] ">T <br /> <span className='mt[-5] capitalize text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-[#9b04ff] '>M</span> </h1>
        </div>
    );
};

export default Logo;