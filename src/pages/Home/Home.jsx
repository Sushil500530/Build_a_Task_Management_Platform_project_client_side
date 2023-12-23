import Banner from "../../Header/banner/Banner";
import Container from "../../components/shared/Container";
import Counter from "../counter/Counter";
import Footer from "../footer/Footer";
import TaskData from "../task/task-components/TaskData";

const Home = () => {
    return (
        <div>
            <Banner />
            <Counter />
            <TaskData />
            <Container>
                <Footer />
            </Container>
        </div>
    );
};

export default Home;