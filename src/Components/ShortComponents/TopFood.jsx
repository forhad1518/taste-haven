import axios from "axios";
import React, { useState } from "react";
import FoodCard from "./FoodCard";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";


const TopFood = () => {
    const [foods, setFoods] = useState(null);
    React.useEffect(() => {
        const loadData = async () => {
            try {
                await axios.get('http://localhost:5000/topfoods')
                    .then(res => setFoods(res.data))
            } catch (err) {
                try {
                    await axios.get('https://assignment-11-server-eta-gules.vercel.app/topfoods')
                        .then(res => setFoods(res.data))
                } catch (err) {
                    console.log(err.message); // Catch errors
                }
                console.log(err.message); // Catch errors
            }
        }
        loadData()
    }, [])
    return (
        <div>
            <div>
                <h1>Top Foods</h1>
                <p>Taste Haven Restaurant serve best product for you.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    foods?.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
            <div className="flex justify-center items-center mt-5 ">
                <Link to={`/allfoods`} className="inline-block">
                    <Button variant="text" className="flex items-center gap-2 bg-blue-gray-200">
                        Purchase
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default TopFood;