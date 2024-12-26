import React, { useContext } from 'react';
import {
    Card,
    CardBody,
    Input,
    Button,
    Textarea,
} from "@material-tailwind/react";
import Lottie from "lottie-react";
import addProductAnimation from "../animations/addProduct.json"
import { Authcontext } from '../providers/AuthProvider';
const Booking = () => {
    const { user } = useContext(Authcontext)
    return (
        <div>
            <div>
                <Card>
                    <div className="text-center flex justify-center pt-4">
                        <h1 className="text-3xl font-bold">Booking Now!</h1>
                        <Lottie className="w-[50px]" animationData={addProductAnimation} loop={true}></Lottie>
                    </div>
                    <CardBody>
                        <form className="flex flex-col gap-4 items-center">
                            <div className="grid md:grid-cols-2 gap-y-2 gap-x-5 place-items-center">
                                {/* Input feild */}
                                <Input type="date"  label="When would you like to book?" />
                                <Input type="text" label="Party Size:" required />
                                <Input type="time" label="Preferred dining time:" required />
                                <Input type="number" label="Phone Number" required />
                                <Input type="number"  label="Price" required />
                                <Input type="text"  label="Food Origin" required />
                                {/* Read Only */}
                                <Input type="email" name="email" label="Email" readOnly defaultValue={user?.email} />
                                <Input type="text" label="name" readOnly name="name" defaultValue={user?.displayName} />
                                <Textarea name="description" label="Description" required></Textarea>
                            </div>
                            {/* Submit BTN */}
                            <Button variant="gradient"  type="submit" >
                                Booking <i className="fa-solid fa-cloud-arrow-up"></i>
                            </Button>
                        </form>
                    </CardBody>
                </Card>
            </div>
        </div >
    );
};

export default Booking;