import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const MyFoodCard = ({ food }) => {
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
                            <span>Price: ${food?.price} </span>
                        </Typography>
                    </div>
                    <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75 text-justify"
                    >
                        {food?.description}
                        <h1 className="text-black font-bold mt-2">Quantity: {food.quantity}</h1>
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button
                        ripple={false}
                        fullWidth={true}
                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 cursor-default"
                    >
                        <Link to={`/upgrade/${food?._id}`}>
                            Update Food <i className="fa-solid fa-pen-to-square"></i>
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default MyFoodCard;