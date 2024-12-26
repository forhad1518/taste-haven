import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../providers/AuthProvider';
import axios from 'axios';
import MyFoodCard from '../ShortComponents/MyFoodCard';

const MyFood = () => {
    const { user } = useContext(Authcontext);
    const [myfoods, setMyFoods] = useState(null);
    console.log(myfoods)
    useEffect(() => {
        axios.get(`https://assignment-11-server-eta-gules.vercel.app/foods/${user?.email}`, { withCredentials: true })
            .then(res => setMyFoods(res.data))
    }, [user?.email])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    myfoods?.map(food => <MyFoodCard food={food}></MyFoodCard>)
                }
            </div>
        </div>
    );
};

export default MyFood;