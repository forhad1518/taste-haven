import { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider";
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
        <div animationData={addProductAnimation} loop={true} className="grid place-items-center p-5"
            style={{
                backgroundImage: "url(https://img.freepik.com/premium-photo/mannequin-sports-gear-surrounded-by-basketballs-sports-store-with-helmets_1055425-20178.jpg?semt=ais_hybrid)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >
            <div>
                <div>
                    <Card>
                        <div className="text-center flex justify-center pt-4">
                            <h1 className="text-3xl font-bold">Add Product!</h1>
                            <Lottie className="w-[50px]" animationData={addProductAnimation} loop={true}></Lottie>
                        </div>
                        <CardBody>
                            <form className="flex flex-col gap-4 items-center" onSubmit={handleAddEquipment}>
                                <div className="grid md:grid-cols-2 gap-y-2 gap-x-5 place-items-center">
                                    {/* Input feild */}
                                    <Input type="text" name="equipmentName" label="Equipment Name" required />
                                    <Input type="text" name="photo" label="Photo URL" required />
                                    <Input type="text" name="category" label="Category Name" required />
                                    <Input type="number" name="price" label="Price" required />
                                    <Input type="number" name="rating" step="0.1" label="Rating" required />
                                    <Select name="customization" label="Choose Extra">
                                        <Option>Bat with extra grip</Option>
                                        <Option>Hit paper</Option>
                                    </Select>
                                    <Input type="number" name="delivery" label="Delivery Days" required />
                                    <Input type="number" name="stock" label="Stock" required />
                                    {/* Read Only */}
                                    <Input type="email" name="email" label="Email" readOnly defaultValue={user?.email} />
                                    <Input type="text" label="name" readOnly name="name" defaultValue={user?.displayName} />
                                    {/* Submit BTN */}
                                    <Textarea name="description" label="Description" required></Textarea>
                                </div>
                                <Button variant="gradient" fullWidth type="submit" >
                                    Add Product  <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                </Button>
                            </form>
                        </CardBody>
                    </Card></div>
            </div>
        </div>
    );
};

export default AddFood;