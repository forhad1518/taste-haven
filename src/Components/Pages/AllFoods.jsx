import React from 'react';
import { Link } from 'react-router-dom';

const AllFoods = () => {
    return (
        <div
            className='h-80 mb-10 flex justify-center items-center'
            style={{
                backgroundImage: "url(https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}>
            <div className=''>
                <nav aria-label="breadcrumb" className="w-max bg-black">
                    <ol className="flex w-full flex-wrap items-center rounded-full border border-white bg-slate-800 p-1">
                        <li className="flex cursor-pointer items-center text-sm text-white transition-colors duration-300">
                            <Link
                                to='/'
                                className="px-3 py-1 hover:underline"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                </svg>
                            </Link>
                            <span className="pointer-events-none mx-2 text-white">
                               |
                            </span>
                        </li>
                        <li className="flex cursor-pointer items-center text-sm text-white transition-colors duration-300">
                            <Link
                                href="#"
                                className="px-3 py-1 hover:underline"
                            >
                                All Foods
                            </Link>
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    );
};

export default AllFoods;