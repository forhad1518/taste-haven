import Lottie from "lottie-react";
import loadingAnimation from "../animations/loading.json"
const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <Lottie className="max-w-[500px]" animationData={loadingAnimation} loop={true}></Lottie>
        </div>
    );
};

export default Loading;