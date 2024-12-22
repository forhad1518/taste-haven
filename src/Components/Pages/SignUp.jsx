// import { useContext, useState } from "react";
// import { Authcontext } from "../Provider/AuthProvider";
import { GoogleAuthProvider, updateProfile } from "firebase/auth";
// import { auth } from "../firebaseAuth/firebase.config";
import { Link, useNavigate } from "react-router-dom";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
} from "@material-tailwind/react";
import Lottie from "lottie-react";
import registerAnimation from "../animations/Register.json";
import Swal from "sweetalert2";

// Google Provider
const googleProvider = new GoogleAuthProvider()

const SignUp = () => {

    // Auth Context functions and Data
    // const { user, setUser, googleSign, signupUserPassword } = useContext(Authcontext);
    // const [error, setError] = useState(null)

    // Navigate
    const navigate = useNavigate()

    // Handle Google login BTN
    // const handleGoogleLogin = () => {
    //     googleSign(googleProvider)
    //         .then(res => {
    //             setUser(res.user);
    //             Swal.fire({
    //                 position: "Center",
    //                 icon: "success",
    //                 title: "Welcome, Account has been created",
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             });
    //             form.reset()
    //             navigate('/')
    //         }).catch(error => {
    //             Swal.fire({
    //                 position: "center",
    //                 icon: "error",
    //                 title: "Error Credintail",
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             });
    //         })
    // }

    // SignUp form Handle
    // const handleSignUp = e => {
    //     e.preventDefault()
    //     const form = e.target;
    //     const name = e.target.name.value;
    //     const email = e.target.email.value;
    //     const photo = e.target.photo.value;
    //     const password = e.target.password.value;

    //     // Password Valid
    //     if (password.length < 6) {
    //         setError("Password must be at least 6 characters long.")
    //     }
    //     else if (!/[A-Z]/.test(password)) {
    //         setError("Password must include at least one uppercase letter.")
    //     }
    //     else if (!/[a-z]/.test(password)) {
    //         setError("Password must include at least one lowercase letter.")
    //     }
    //     else if (!/[0-9]/.test(password)) {
    //         setError("Password must include at least one number.")
    //     }
    //     else if (!/[\W_]/.test(password)) {
    //         setError("Password must include at least one special character.")
    //     }
    //     else {
    //         signupUserPassword(email, password)
    //             .then(() => {
    //                 updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
    //                     .then(() => {
    //                         Swal.fire({
    //                             position: "Center",
    //                             icon: "success",
    //                             title: "welcome, Account Create",
    //                             showConfirmButton: false,
    //                             timer: 1500
    //                         });
    //                         navigate('/')
    //                     })
    //                     .catch((error) => {
    //                         Swal.fire({
    //                             position: "center",
    //                             icon: "error",
    //                             title: "Error Credintail",
    //                             showConfirmButton: false,
    //                             timer: 1500
    //                         });
    //                     })
    //             }).catch(error => {
    //                 Swal.fire({
    //                     position: "center",
    //                     icon: "error",
    //                     title: "Error Credintail",
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 });
    //             })
    //     }


    // }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center my-10">
            <div className="max-[sm]:hidden flex justify-center items-center">
                <Lottie className="" animationData={registerAnimation} loop={true} />
            </div>
            <div className="w-11/12 mx-auto">
                <Card>
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                    </div>
                    <CardBody >
                        <form className="flex flex-col gap-4">
                            {/* Input feild */}
                            <Input type="text" name="name" label="Name" size="lg" required />
                            <Input type="text" name="photo" label="Photo URL" size="lg" required />
                            <Input type="email" name="email" label="Email" size="lg" required />
                            <Input type="password" name="password" label="Password" size="lg" required />
                            <div>
                                {/* <p className="text-red-600">{error}</p> */}
                            </div>
                            {/* Submit BTN */}
                            <Button variant="gradient" fullWidth type="submit" >
                                Sign Up  <i className="fa fa-user-plus" aria-hidden="true"></i>
                            </Button>
                        </form>
                    </CardBody>
                    <div className="text-center flex gap-2 justify-center">
                        <h1>Sign Up With</h1>
                        <div className="flex gap-x-3">
                            <button > Google <i className="fa fa-google" aria-hidden="true"></i></button>
                        </div>
                    </div>
                    <CardFooter className="pt-0">
                        <Typography variant="small" className="mt-6 flex justify-center">
                            Already have an account?
                            <Link
                                to={'/login'}
                                as="a"
                                href="#signup"
                                variant="small"
                                color="blue-gray"
                                className="ml-1 font-bold"
                            >
                                Login Now
                            </Link>
                        </Typography>
                    </CardFooter>
                </Card></div>
        </div>
    );
};

export default SignUp;