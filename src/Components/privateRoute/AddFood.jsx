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
import addProductAnimation from "../animations/addProduct.json"
import Swal from "sweetalert2";
import { Authcontext } from "../providers/AuthProvider";


const AddFood = () => {
    const { user } = useContext(Authcontext)
    const handleAddEquipment = event => {
        event.preventDefault()
        const form = event.target;
        const equipmentName = form.equipmentName.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value === "Choose Extra" ? null : form.customization.value
        const delivery = form.delivery.value;
        const stock = form.stock.value;
        const email = form.email.value;
        const name = form.name.value;
        const description = form.description.value;

        const equipmentData = { equipmentName, photo, category, price, rating, customization, delivery, stock, email, name, description }

        fetch('https://assignment-10-server-nine-blue.vercel.app//equipments', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(equipmentData)
        })
            .then(res => res.json())
            .then(data => {
                let timerInterval;
                Swal.fire({
                    title: "Added Product!",
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
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        ("I was closed by the timer");
                    }
                });
                form.reset()
            })
    }
    return (
        <div animationData={addProductAnimation} loop={true} className="grid place-items-center p-5 mb-10"
            style={{
                backgroundImage: "url(https://res.cloudinary.com/tf-lab/image/upload/restaurant/c6c3df76-0dba-4fe7-9f53-7f165b48e687/d4cd6585-9d11-4306-bbe9-3fe7c935bef0.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >
            <div>
                <div>
                    <Card>
                        <div className="text-center flex justify-center pt-4">
                            <h1 className="text-3xl font-bold">Add Food!</h1>
                            <Lottie className="w-[50px]" animationData={addProductAnimation} loop={true}></Lottie>
                        </div>
                        <CardBody>
                            <form className="flex flex-col gap-4 items-center" onSubmit={handleAddEquipment}>
                                <div className="grid md:grid-cols-2 gap-y-2 gap-x-5 place-items-center">
                                    {/* Input feild */}
                                    <Input type="text" name="equipmentName" label="Food Name" required />
                                    <Input type="text" name="photo" label="Photo URL" required />
                                    <Input type="text" name="category" label="Food Category Name" required />
                                    <Input type="number" name="stock" label="Quantity" required />
                                    <Input type="number" name="price" label="Price" required />
                                    {/* Read Only */}
                                    <Input type="email" name="email" label="Email" readOnly defaultValue={user?.email} />
                                    <Input type="text" label="name" readOnly name="name" defaultValue={user?.displayName} />
                                    <div>
                                        
                                    </div>
                                    <Textarea name="description" label="Description" required></Textarea>
                                </div>
                                    {/* Submit BTN */}
                                <Button variant="gradient" fullWidth type="submit" >
                                    Add Food  <i className="fa-solid fa-cloud-arrow-up"></i>
                                </Button>
                            </form>
                        </CardBody>
                    </Card></div>
            </div>
        </div>
    );
};

export default AddFood;