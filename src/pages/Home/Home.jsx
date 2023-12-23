import Banner from "../../Header/banner/Banner";
import Container from "../../components/shared/Container";
import About from "../about/About";
import Counter from "../counter/Counter";
import Footer from "../footer/Footer";
import TaskData from "../task/task-components/TaskData";

const Home = () => {
    return (
        <div>
            <Banner />
            <Counter />
            <TaskData />
            <About />
            <Container>
                <Footer />
            </Container>
        </div>
    );
};

export default Home;