import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import SingleFood from "../ShortComponents/SingleFood";
import Purchase from "../ShortComponents/Purchase";
import axios from "axios";
import AllFoods from "../Pages/AllFoods";
import Gallary from "../ShortComponents/Gallary";
import AddFood from "../privateRoute/AddFood";
import MyFood from "../privateRoute/MyFood";
import EditFood from "../privateRoute/EditFood";
import PrivatePage from "../privateRoute/PrivatePage";
import LoadingShow from "../ShortComponents/LoadingShow";
import { Oders } from "../privateRoute/Oders";



const Router = createBrowserRouter([
    {
        path: '/',
        element: <LoadingShow><MainLayout></MainLayout></LoadingShow>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signin',
                element: <SignUp></SignUp>

            },
            {
                path: '/details/:id',
                element: <SingleFood></SingleFood>,
                loader: ({ params }) => fetch(`https://assignment-11-server-eta-gules.vercel.app/details/${params.id}`)
            },
            {
                path: '/purchase/:id',
                element: <PrivatePage><Purchase></Purchase></PrivatePage>,
                loader: ({ params }) => axios.get(`https://assignment-11-server-eta-gules.vercel.app/details/${params.id}`)
            },
            {
                path: 'allfoods',
                element: <AllFoods></AllFoods>
            },
            {
                path: 'gallary',
                element: <Gallary></Gallary>,
            },
            {
                path: 'addfood',
                element: <PrivatePage><AddFood></AddFood></PrivatePage>
            },
            {
                path: 'myfoods',
                element: <PrivatePage><MyFood></MyFood></PrivatePage>
            },
            {
                path: '/upgrade/:id',
                element: <EditFood></EditFood>,
                loader: ({ params }) => fetch(`https://assignment-11-server-eta-gules.vercel.app/details/${params.id}`)
            },
            {
                path: 'myoders',
                element: <PrivatePage><Oders></Oders></PrivatePage>
            }

        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default Router;