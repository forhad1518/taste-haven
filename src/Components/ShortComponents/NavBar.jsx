import React, { useContext } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(Authcontext);

    // handle logout
    const handleLogout = () => {
        logOut()
    }

    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink className="flex items-center">
                    Home
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to='/allfoods' className="flex items-center">
                    All Foods
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to='/gallary' className="flex items-center">
                    Gallary
                </NavLink>
            </Typography>
        </ul>
    );

    return (
        <div>
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 text-xl md:text-2xl lg:text-3xl font-bold cursor-pointer py-1.5 "
                    >
                        Taste Haven
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        {
                            user?.email ? <div className="flex items-center gap-x-1">
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full" title={user?.displayName}>
                                            <img
                                                alt={user?.displayName}
                                                src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                        <li>
                                            <Link to='/myoders' className="btn btn-outline rounded-b-none">
                                                My Oders
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="btn btn-outline rounded-none"
                                            to='/myfoods'
                                            >
                                                My Foods
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="btn btn-outline rounded-t-none"
                                            to='/addfood'
                                            >
                                                Add Food
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <Button
                                    variant="gradient"
                                    size="sm"
                                    className="hidden lg:inline-block"
                                >
                                    <Link onClick={handleLogout}
                                    >Log Out</Link>
                                </Button>
                            </div> : <div className="flex items-center gap-x-1">
                                <Button
                                    variant="text"
                                    size="sm"
                                    className="hidden lg:inline-block"
                                >
                                    <Link to='/login'
                                    >Log In</Link>
                                </Button>
                                <Button
                                    variant="gradient"
                                    size="sm"
                                    className="hidden lg:inline-block"
                                >
                                    <Link to='/signin'
                                    >sign in</Link>
                                </Button>
                            </div>
                        }

                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    {
                        user?.email ?
                            <div className="flex items-center gap-x-1">
                                <Button
                                    fullWidth variant="gradient" size="sm" className=""
                                >
                                    <Link onClick={handleLogout}
                                    >Log Out</Link>
                                </Button>
                            </div> : <div className="flex items-center gap-x-1">
                                <Button fullWidth variant="text" size="sm" className="">
                                    <Link to='/login'>Log In</Link>
                                </Button>
                                <Button fullWidth variant="gradient" size="sm" className="">
                                    <Link to='signin'>Sign in</Link>
                                </Button>
                            </div>
                    }
                </MobileNav>
            </Navbar>
        </div>
    );
};

export default NavBar;