import { useContext } from "react";
import { GoogleAuthProvider } from "firebase/auth";
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
import groovyWalkAnimation from "../animations/Animation - 1733465167995.json";
import Swal from "sweetalert2";
import { Authcontext } from "../providers/AuthProvider";

// Google Provider
const googleProvider = new GoogleAuthProvider()

const Login = () => {
    const { user, setUser, googleSign, loginEmailpass } = useContext(Authcontext);
    // Navigate
    const navigate = useNavigate()
    // Handle Google login BTN
    const handleGoogleLogin = () => {
        googleSign(googleProvider)
            .then(res => {
                setUser(res.user);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Welcome, Login Success",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            }).catch(error => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "acccount login faild",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    // handle login email password
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginEmailpass(email, password)
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Welcome, Login Success",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset()
                navigate('/')
            }).catch(error => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Email and Password wrong",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center my-10">
            <div className="max-[sm]:hidden">
                <Lottie animationData={groovyWalkAnimation} loop={true} />
            </div>
            <div className="w-11/12 mx-auto">
                <Card>
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <CardBody >
                        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                            {/* Input feild */}
                            <Input type="text" name="email" label="Email" size="lg" required />
                            <Input type="password" name="password" label="Password" size="lg" required />
                            {/* Submit BTN */}
                            <Button variant="gradient" fullWidth type="submit" >
                                Log In  <i className="fa fa-sign-in" aria-hidden="true"></i>
                            </Button>
                        </form>
                    </CardBody>
                    <div className="text-center flex gap-2 justify-center">
                        <h1>Login With</h1>
                        <div className="flex gap-x-3">
                            <button onClick={handleGoogleLogin}> Google <i className="fa fa-google" aria-hidden="true"></i></button>
                        </div>
                    </div>
                    <CardFooter className="pt-0">
                        <Typography variant="small" className="mt-6 flex justify-center">
                            Don&apos;t have an account?
                            <Link
                                to={'/signin'}
                                as="a"
                                href="#signup"
                                variant="small"
                                color="blue-gray"
                                className="ml-1 font-bold"
                            >
                                Sign up
                            </Link>
                        </Typography>
                    </CardFooter>
                </Card></div>
        </div>
    );
};

export default Login;