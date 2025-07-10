import { createBrowserRouter } from "react-router";
import HomeLayout from "../../Layouts/HomeLayouts/HomeLayout";
import Home from "../../pages/Home/Home";
import SignupForm from "../../AuthPages/SignUp";
import SigninPage from "../../AuthPages/SignIn";
import AuthLayout from "../../Layouts/AuthLayout/AuthLayout";
import Apartment from "../../pages/Apartment/Apartment";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'apartment',
                loader: () => fetch('http://localhost:3000/apartments'),
                Component: Apartment
            }
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: 'sign-in',
                Component: SigninPage
            },
            {
                path: 'sign-up',
                Component: SignupForm
            }
        ]
    }
])

export default router