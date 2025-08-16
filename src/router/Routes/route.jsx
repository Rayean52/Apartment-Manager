import { createBrowserRouter } from "react-router";
import HomeLayout from "../../Layouts/HomeLayouts/HomeLayout";
import Home from "../../pages/Home/Home";
import SignupForm from "../../AuthPages/SignUp";
import SigninPage from "../../AuthPages/SignIn";
import AuthLayout from "../../Layouts/AuthLayout/AuthLayout";
import Apartment from "../../pages/Apartment/Apartment";
import DashboardSidebar from "../../Layouts/DashboardLayout/DashboardLayout";
import UserProfile from "../../Layouts/DashboardLayout/DasgPages/UserPage/UserProfile";
import UserAnnouncements from "../../Layouts/DashboardLayout/DasgPages/UserPage/Announcement";
import MakePayment from "../../Layouts/DashboardLayout/DasgPages/MemberPage/MakePayment";
import PaymentHistory from "../../Layouts/DashboardLayout/DasgPages/MemberPage/PaymentHistory";
import AdminProfile from "../../Layouts/DashboardLayout/DasgPages/AdminPage/AdminProfile";
import ManageMembers from "../../Layouts/DashboardLayout/DasgPages/AdminPage/ManageMembers";
import MakeAnnouncement from "../../Layouts/DashboardLayout/DasgPages/AdminPage/MakeAnnouncement";
import AgreementRequests from "../../Layouts/DashboardLayout/DasgPages/AdminPage/AgreementRequest";
import ManageCoupons from "../../Layouts/DashboardLayout/DasgPages/AdminPage/ManageCoupon";
import MemberProfile from "../../Layouts/DashboardLayout/DasgPages/MemberPage/MemberProfile";
import PaymentSuccess from "../../Layouts/DashboardLayout/DasgPages/MemberPage/PaymentSuccess";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";
import TermsAndConditions from "../../components/Shared/TermsAndConditions";
import AboutUs from "../../components/Shared/AboutUs";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'apartment',
                loader: () => fetch('https://apartment-manager-kappa.vercel.app/apartments'),
                Component: Apartment
            },
            {
                path: 'terms-and-conditions',
                Component: TermsAndConditions
            },
            {
                path: 'about-us',
                Component: AboutUs
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
    },
    {
        path: 'dashboard',
        Component: DashboardSidebar,
        children: [
            //users routes
            {
                path: 'user-profile',
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path: 'announcement',
                element: <PrivateRoute><UserAnnouncements></UserAnnouncements></PrivateRoute>
            },

            //members routes
            {
                path: 'member-profile',
                element: <PrivateRoute><MemberProfile></MemberProfile></PrivateRoute>
            },
            {
                path: 'make-payment',
                element: <PrivateRoute><MakePayment></MakePayment></PrivateRoute>
            },
            {
                path: 'payment-success',
                element: <PrivateRoute><PaymentSuccess></PaymentSuccess></PrivateRoute>
            },
            {
                path: 'payment-history',
                element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
            },

            //admin routes
            {
                path: 'admin-profile',
                element: <PrivateRoute><AdminProfile></AdminProfile></PrivateRoute>
            },
            {
                path: 'manage-members',
                element: <PrivateRoute><ManageMembers></ManageMembers></PrivateRoute>
            },
            {
                path: 'make-announcement',
                element: <PrivateRoute><MakeAnnouncement></MakeAnnouncement></PrivateRoute>
            },
            {
                path: 'agreement-requests',
                element: <PrivateRoute><AgreementRequests></AgreementRequests></PrivateRoute>
            },
            {
                path: 'manage-coupons',
                element: <PrivateRoute><ManageCoupons></ManageCoupons></PrivateRoute>
            }
        ]
    }
])

export default router