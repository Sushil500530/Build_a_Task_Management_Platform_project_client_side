import { ThreeCircles } from "react-loader-spinner";

const Loading = () => {
    return (
        <div className="w-full h-[50vh] flex flex-col items-center justify-center">
            <ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="#9c2aff"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
            <h1 className="animate-pulse text-xl font-bold">Loading.....</h1>
        </div>
    );
};

export default Loading;