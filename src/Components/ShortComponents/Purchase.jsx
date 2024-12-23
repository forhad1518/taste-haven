import { useLoaderData } from 'react-router-dom';
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useContext } from 'react';
import { Authcontext } from '../providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
const Purchase = () => {
    const { user } = useContext(Authcontext)
    const loadData = useLoaderData();
    const food = (loadData.data);

    // handle Purchase
    const handlePurchase = e => {
        e.preventDefault()
        const form = e.target;
        const id = food._id;
        const quantity = form.quantity.value;
        const name = form.name.value;
        const email = form.email.value;

        const purchaseData = { id, quantity, name, email };
        axios.post('http://localhost:5000/purchase', purchaseData)
            .then(res => {
                console.log(res.data)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Purchase Complete",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    return (
        <div className='flex justify-center items-center my-5'>
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Final Purchase
                </Typography>
                <form onSubmit={handlePurchase} className="mt-8 mb-2 md:w-80 max-w-screen-lg ">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Food Name
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            defaultValue={food?.foodName}
                            readOnly
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Price
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",

                            }}
                            defaultValue={`$ ${food?.price}`}
                            readOnly
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Quantity
                        </Typography>
                        <Input
                            type='number'
                            size="lg"
                            name='quantity'
                            placeholder="quantity"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",

                            }}

                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Name
                        </Typography>
                        <Input
                            name='name'
                            size="lg"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            defaultValue={user?.displayName}
                            readOnly
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            name='email'
                            size="lg"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            defaultValue={user?.email}
                            readOnly
                        />
                    </div>
                    <Button className="mt-6 cursor-default" fullWidth>
                        <input type="submit" value="Purchase" className='cursor-pointer' />
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default Purchase;