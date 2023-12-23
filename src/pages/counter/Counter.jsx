import CountUp from 'react-countup';
import Container from '../../components/shared/Container';
import { FaUsers,FaUserTie  } from "react-icons/fa";
import { SiTask } from "react-icons/si";
const Counter = () => {
    return (
        <Container>
            <div className='text-2xl md:text-3xl lg:text-4xl font-bold text-center border p-3 flex items-center justify-around my-12 py-8 bg-gradient-to-r from-blue-800 to-blue-950 text-white'>
                <div className='flex flex-col items-center justify-center'>
                    <article> <CountUp delay={1} end={599} />+</article>
                    <h1 className='flex gap-5 items-center justify-center'><span><SiTask className='w-10 h-10' /></span>Task</h1>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <article> <CountUp delay={1} end={1} />M+</article>
                    <h1 className='flex gap-5 items-center justify-center'><span><FaUsers className='w-10 h-10' /></span>Users</h1>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <article> <CountUp delay={1} end={300} />+</article>
                    <h1 className='flex gap-5 items-center justify-center'><span><FaUserTie className='w-10 h-10' /></span>Clients</h1>
                </div>
            </div>
        </Container>
    );
};

export default Counter;