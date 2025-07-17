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
    },
    {
        path: 'dashboard',
        Component: DashboardSidebar,
        children: [
            {
                path: 'user-profile',
                Component: UserProfile
            },
            {
                path: 'announcement',
                Component: UserAnnouncements
            },
            {
                path: 'make-payment',
                Component: MakePayment
            },
            {
                path: 'payment-history',
                Component: PaymentHistory
            },
            {
                path: 'admin-profile',
                Component: AdminProfile
            },
            {
                path: 'manage-members',
                Component: ManageMembers
            },
            {
                path: 'make-announcement',
                Component: MakeAnnouncement
            },
            {
                path: 'agreement-requests',
                Component: AgreementRequests
            },
            {
                path: 'manage-coupons',
                Component: ManageCoupons
            }
        ]
    }
])

export default router