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
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default Router;