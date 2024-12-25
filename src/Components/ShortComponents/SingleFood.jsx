import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link, useLoaderData } from 'react-router-dom';

const SingleFood = () => {
    const food = useLoaderData()
    return (
        <div className="my-5 w-10/12 mx-auto">
            <Card className="flex-col lg:flex-row">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 lg:w-2/5 shrink-0 lg:rounded-r-none"
                >
                    <img
                        src={food?.foodImage}
                        alt="card-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h6" color="gray" className="mb-4 uppercase">
                        Total Purchase:
                    </Typography>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        {food?.foodName}
                    </Typography>
                    <div className="relative flex flex-col w-full mb-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                        <table className=" w-full text-left table-auto text-slate-800">
                            <thead>
                                <tr className="text-slate-500 border-b border-slate-300 bg-slate-50">
                                    <th className="p-4">
                                        <p className="text-sm leading-none font-normal">
                                            Food Category
                                        </p>
                                    </th>
                                    <th className="p-4">
                                        <p className="text-sm leading-none font-normal">
                                            Quantity
                                        </p>
                                    </th>
                                    <th className="p-4">
                                        <p className="text-sm leading-none font-normal">
                                            Food Origin
                                        </p>
                                    </th>
                                    <th className="p-4">
                                        <p className="text-sm leading-none font-normal">
                                            Price
                                        </p>
                                    </th>
                                    <th className="p-4">
                                        <p></p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4">
                                        <p className="text-sm font-bold">
                                            {food?.foodCategory}
                                        </p>
                                    </td>
                                    <td className="p-4">
                                        <p className="text-sm">
                                            {food?.quantity}
                                        </p>
                                    </td>
                                    <td className="p-4">
                                        <p className="text-sm">
                                            {food?.foodOrigin}
                                        </p>
                                    </td>
                                    <td className="p-4">
                                        <p className="text-sm">
                                            $ {food?.price}
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Typography color="gray" className="mb-8 font-normal">
                        {food?.description}
                    </Typography>
                    <Link to={`/purchase/${food?._id}`} className="inline-block">
                        <Button variant="text" className="flex items-center gap-2">
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
                </CardBody>
            </Card>
        </div>
    );
};

export default SingleFood;