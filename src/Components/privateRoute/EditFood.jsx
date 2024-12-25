import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import {
    Card,
    CardBody,
    Input,
    Button,
    Select,
    Option,
    Textarea,
} from "@material-tailwind/react";
import Lottie from "lottie-react";
import addProductAnimation from "../animations/loading.json"
import Swal from "sweetalert2";
import { Authcontext } from "../providers/AuthProvider";
import axios from "axios";
const EditFood = () => {
    const { user } = useContext(Authcontext)
    const { foodName, foodImage, foodCategory, price, quantity, email, name, description, _id } = useLoaderData()

    const handleUpdateEquipment = event => {
        event.preventDefault()
        const form = event.target;

        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodCategory = form.foodCategory.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const email = form.email.value;
        const name = form.name.value;
        const description = form.description.value;

        const foodData = { foodName, foodImage, foodCategory, price, quantity, email, name, description }
        console.log(foodData)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update It!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.put(`http://localhost:5000/foods/${_id}`, foodData)
                    .then(() => {
                        let timerInterval;
                        Swal.fire({
                            title: "Update Product!",
                            html: "I will close in <b></b> milliseconds.",
                            timer: 2000,
                            timerProgressBar: true,
                            didOpen: () => {
                                Swal.showLoading();
                                const timer = Swal.getPopup().querySelector("b");
                                timerInterval = setInterval(() => {
                                    timer.textContent = `${Swal.getTimerLeft()}`;
                                }, 100);
                            },
                            willClose: () => {
                                clearInterval(timerInterval);
                            }
                        })
                        .then((result) => {
                            /* Read more about handling dismissals below */
                            if (result.dismiss === Swal.DismissReason.timer) {
                                Swal.fire({
                                    title: "Updated!",
                                    text: "Your Update has been Success.",
                                    icon: "success"
                                });
                            }
                        })
                        .catch(() => {
                            Swal.fire({
                                title: "Failde!",
                                text: "Your Update has been Failed.",
                                icon: "error"
                            });
                        })
                    })
            }
        });


    }
    return (
        <div animationData={addProductAnimation} loop={true} className="grid place-items-center p-5 mb-10"
            style={{
                backgroundImage: "url(https://bostonglobe-prod.cdn.arcpublishing.com/resizer/v2/HTJU7NSSWUWCBFSMBT7QDQ2JZQ.jpg?auth=ba87daa97b2df2db3af4da48f32311be9df1d27fca085a19231b4d4ea50fb908&width=1440)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >
            <div>
                <div>
                    <Card>
                        <div className="text-center flex justify-center items-center pt-4">
                            <h1 className="text-3xl font-bold">Update Product!</h1>
                            <Lottie className="w-[80px]" animationData={addProductAnimation} loop={true}></Lottie>
                        </div>
                        <CardBody>
                            <form className="flex flex-col gap-4 items-center" onSubmit={handleUpdateEquipment}>
                                <div className="grid md:grid-cols-2 gap-y-2 gap-x-5 place-items-center">
                                    {/* Input feild */}
                                    <Input type="text" name="foodName" defaultValue={foodName} label="Equipment Name" required />
                                    <Input type="text" name="foodImage" defaultValue={foodImage} label="Photo URL" required />
                                    <Input type="text" name="foodCategory" defaultValue={foodCategory} label="Category Name" required />
                                    <Input type="number" name="price" defaultValue={price} label="Price" required />
                                    <Input type="number" name="quantity" defaultValue={quantity} label="Stock" required />
                                    {/* Read Only */}
                                    <Input type="email" name="email" defaultValue={email} label="Email" readOnly defaultValue={user?.email} />
                                    <Input type="text" label="name" defaultValue={name} readOnly name="name" defaultValue={user?.displayName} />
                                    {/* Submit BTN */}
                                    <div></div>
                                    <Textarea className="col-span-2" name="description" defaultValue={description} label="Description" required></Textarea>
                                </div>
                                <Button variant="gradient" fullWidth type="submit" >
                                    Update Food  <i className="fa-solid fa-pen-to-square"></i>
                                </Button>
                            </form>
                        </CardBody>
                    </Card></div>
            </div>
        </div>
    );
};

export default EditFood;