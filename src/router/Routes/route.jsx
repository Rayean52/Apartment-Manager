import { createBrowserRouter } from "react-router";
import HomeLayout from "../../Layouts/HomeLayouts/HomeLayout";
import Home from "../../pages/Home/Home";
import SignupForm from "../../AuthPages/SignUp";
import SigninPage from "../../AuthPages/SignIn";

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
                path: 'sign-up',
                Component: SignupForm
            },
            {
                path: 'sign-in',
                Component: SigninPage
            }
        ]
    }
])

export default router