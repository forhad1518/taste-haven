import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const FoodCard = ({ food }) => {
    const [purchase, setPurchase] = useState(0)
    useEffect(() => {
        axios.get('https://assignment-11-server-eta-gules.vercel.app/pucshase/items')
        .then(res => {
            const purchaseCount = res.data.filter(item => item.id === food._id);
            setPurchase(purchaseCount.length)
        })
    },[])
    return (
        <div className="flex justify-center items-center">
            <Card className="max-w-80">
                <CardHeader shadow={false} floated={false} className="h-72">
                    <img
                        src={food?.foodImage}
                        alt="card-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <div className="mb-2 flex items-center justify-between ">
                        <Typography color="blue-gray" className="font-bold">
                            {food?.foodName}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                            <span>Purchase: {purchase} </span>
                        </Typography>
                    </div>
                    <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75 text-justify"
                    >
                        {food?.description}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button
                        ripple={false}
                        fullWidth={true}
                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 cursor-default"
                    >
                        <Link to={`/details/${food?._id}`}>
                            Details More
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default FoodCard;