
import { useLoaderData } from 'react-router-dom';

const SingleFood = () => {
    const food = useLoaderData()
    console.log(food)
    return (
        <div>
            single page
        </div>
    );
};

export default SingleFood;