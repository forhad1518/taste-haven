import axios from "axios";
import React, { useContext, useState } from "react";
import FoodCard from "./FoodCard";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Authcontext } from "../providers/AuthProvider";


const TopFood = () => {
    const {setShowLoading} = useContext(Authcontext)
    const [foods, setFoods] = useState(null);
    React.useEffect(() => {
        const loadData = async () => {
            try {
                await axios.get('http://localhost:5000/topfoods')
                    .then(res => setFoods(res.data))
                    setShowLoading(false)
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
            <div className="text-center py-5">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-5">Top Foods</h1>
                <p className="text-gray-700">Taste Haven Restaurant serve best product for you.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    foods?.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
            <div className="flex justify-center items-center mt-5 ">
                <Link to={`/allfoods`} className="inline-block">
                    <Button variant="text" className="flex items-center gap-2 bg-blue-gray-200">
                        View More
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