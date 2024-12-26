import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FoodCard from '../ShortComponents/FoodCard';
import { CardBody, Input } from '@material-tailwind/react';


const AllFoods = () => {
    const [foods, setFoods] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchItems, setSearchItems] = useState([])
    React.useEffect(() => {
        const loadData = async () => {
            try {
                await axios.get('https://assignment-11-server-eta-gules.vercel.app/allfoods')
                    .then(res => {
                        setFoods(res.data)
                        setSearchItems(res.data)
                    })
            } catch (err) {
                console.log(err.message); // Catch errors
            }
        }
        loadData()
    }, [])

    // search emplement
    useEffect(() => {
        const result = foods.filter((food) =>
            food.foodName.toLowerCase().includes(searchText.toLowerCase()) // কেস ইনসেন্সিটিভ ফিল্টার
        );
        setSearchItems(result)
    }, [searchText])
    return (
        <div>
            <div
                className='h-80 mb-10 flex justify-center items-center'
                style={{
                    backgroundImage: "url(https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}>
                <nav aria-label="breadcrumb" className="w-max bg-black rounded-full">
                    <ol className="flex w-full flex-wrap items-center rounded-full border border-white bg-slate-800">
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
            <div className="w-10/12 mx-auto">
                <div className="group relative">
                    <CardBody>
                        {/* Input feild */}
                        <Input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search by food name" label="Search 🔎" />

                    </CardBody>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        searchItems?.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFoods;