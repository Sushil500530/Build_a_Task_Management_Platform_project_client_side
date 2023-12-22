import Banner from "../../Header/banner/Banner";
import Container from "../../components/shared/Container";
import Counter from "../counter/Counter";
import Footer from "../footer/Footer";

const Home = () => {
    return (
        <div>
            <Banner />
            <Counter />
            <Container>
                <Footer />
            </Container>
        </div>
    );
};

export default Home;