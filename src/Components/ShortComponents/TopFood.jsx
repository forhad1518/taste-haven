import axios from "axios";
import React, { useState } from "react";
import FoodCard from "./FoodCard";


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
        </div>
    );
};

export default TopFood;