import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import errorAnimation from "../animations/404Error.json"

const ErrorPage = () => {
    return (
        <div className='bg-gray-500 min-h-screen flex flex-col justify-center items-center gap-y-5'>
            <Lottie animationData={errorAnimation} loop={true}></Lottie>
            <Link to='/' className='btn'>Back Home</Link>
        </div>
    );
};

export default ErrorPage;