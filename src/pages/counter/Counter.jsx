import CountUp from 'react-countup';
import Container from '../../components/shared/Container';
const Counter = () => {
    return (
        <Container>
            <div className='text-2xl md:text-3xl lg:text-4xl font-bold text-center border p-3 flex items-center justify-around my-12 py-8 bg-gradient-to-r from-blue-800 to-blue-950 text-white'>
                <div className='flex flex-col items-center justify-center'>
                    <article> <CountUp delay={1} end={599} />+</article>
                    <h1>Task</h1>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <article> <CountUp delay={1} end={1} />M+</article>
                    <h1>Users</h1>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <article> <CountUp delay={1} end={300} />+</article>
                    <h1>Clients</h1>
                </div>
            </div>
        </Container>
    );
};

export default Counter;