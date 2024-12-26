import {
    Card,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


export function Oders() {
    const { user } = useContext(Authcontext);
    const [order, setOrder] = useState(null)
    const [orderId, setOrderId] = useState(null)
    useEffect(() => {
        axios.get(`https://assignment-11-server-eta-gules.vercel.app/myorders/${user?.email}`, { withCredentials: true })
            .then(res => {
                setOrder(res?.data?.orderFood)
                setOrderId(res?.data?.orderid)
            })
    }, [])
    const TABLE_HEAD = ["Food", "Price", "Date ", "Food Owner", "Action"];

    const hanldeDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://assignment-11-server-eta-gules.vercel.app/myorders/${id}`)
                    .then(() => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const remainOrders = order.filter(order => order._id !== id);
                        setOrder(remainOrders)
                    })
            }
        });

    }
    return (
        <div className="mb-10">
            <Card className="h-full w-full">

                <CardBody className="overflow-scroll px-0 w-10/12 mx-auto">
                    <table className="mt-4 w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {order?.map(
                                ({ foodName, foodImage, foodCategory, email, price, _id }, index) => {
                                    const isLast = index === order.length - 1;
                                    const classes = isLast
                                        ? "p-4"
                                        : "p-4 border-b border-blue-gray-50";

                                    return (
                                        <tr key={foodName}>
                                            <td className={classes}>
                                                <div className="flex items-center gap-3">
                                                    <Avatar src={foodImage} alt={foodName} size="sm" />
                                                    <div className="flex flex-col">
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {foodName}
                                                        </Typography>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal opacity-70"
                                                        >
                                                            {foodCategory}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <div className="w-max">
                                                    <p> $ {price}</p>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    12/16/2024
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >

                                                    {email}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Tooltip content="Delete">
                                                    <IconButton onClick={() => hanldeDelete(_id)} variant="text">
                                                        <i className="fa-solid fa-trash text-red-600"></i> Delete
                                                    </IconButton>
                                                </Tooltip>
                                            </td>
                                        </tr>
                                    );
                                },
                            )}
                        </tbody>
                    </table>
                </CardBody>
                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        Page 1 of 10
                    </Typography>
                    <div className="flex gap-2">
                        <Button variant="outlined" size="sm">
                            Previous
                        </Button>
                        <Button variant="outlined" size="sm">
                            Next
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}