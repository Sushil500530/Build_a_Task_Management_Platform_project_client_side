import Container from "../../components/shared/Container";

const About = () => {
    return (
        <Container>
            <div className=" flex flex-col items-center justify-center gap-5 bg-gradient-to-b from-blue-800 to-blue-950 w-full h-[50vh] text-white mb-12">
                <div className=" w-full lg:w-2/3 mx-auto">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3">About Tasts Management</h1>
                    <hr className="border-2 rounded-full w-1/2 mx-auto border-white mb-8" />
                    <p className="capitalize text-center">
                        Task management software is an application that helps organize, streamline, and prioritize tasks required to achieve a goal or complete a project. task management tools are any digital platform that helps individuals and teams manage their tasks. These are more than just simple to-do-lists. Task management tools allow teams to collaborate digitally by organizing, prioritizing, and assigning tasks to each other.
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default About;