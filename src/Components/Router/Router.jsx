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


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
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
                element: <Purchase></Purchase>,
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
                element: <AddFood></AddFood>
            },
            {
                path: 'myfoods',
                element: <MyFood></MyFood>
            },
            {
                path: '/upgrade/:id',
                element: <EditFood></EditFood>,
                loader: ({ params }) => fetch(`https://assignment-11-server-eta-gules.vercel.app/details/${params.id}`)
            }

        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default Router;