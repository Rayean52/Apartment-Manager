import {
    Button,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarToggle,
    Dropdown,
    DropdownItem,
    Avatar,
    DropdownDivider,
} from "flowbite-react";

import { Link, NavLink, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

// Icons from lucide-react
import {
    Home,
    Building2,
    Phone,
    Info,
    ShieldCheck,
    HelpCircle,
    LayoutDashboard,
    LogOut,
    LogIn,
} from "lucide-react";

const Nav = () => {
    const navigate = useNavigate();
    const { users, signOutUser } = useAuth();

    const handleSignOut = () => {
        signOutUser()
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Navbar
            fluid
            rounded
            className="fixed top-0 left-0 w-full z-50 bg-gray-900 border-b border-gray-700 shadow-lg"
        >
            {/* Brand */}
            <NavbarBrand>
                <img
                    className="w-12 m-2"
                    src="https://i.ibb.co/rRnWxK3V/social-10096251.png"
                    alt="Logo"
                />
                <span className="self-center whitespace-nowrap text-3xl font-bold text-white">
                    FlatFlow
                </span>
            </NavbarBrand>

            <NavbarToggle />

            <NavbarCollapse className="space-x-6">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `flex items-center gap-2 text-lg ${isActive ? "text-white font-semibold" : "text-gray-300"
                        } hover:text-white`
                    }
                >
                    <Home size={20} /> Home
                </NavLink>

                <NavLink
                    to="/apartment"
                    className={({ isActive }) =>
                        `flex items-center gap-2 text-lg ${isActive ? "text-white font-semibold" : "text-gray-300"
                        } hover:text-white`
                    }
                >
                    <Building2 size={20} /> Apartment
                </NavLink>

                <NavLink
                    to="/contact-us"
                    className={({ isActive }) =>
                        `flex items-center gap-2 text-lg ${isActive ? "text-white font-semibold" : "text-gray-300"
                        } hover:text-white`
                    }
                >
                    <Phone size={20} /> Contact Us
                </NavLink>

                <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                        `flex items-center gap-2 text-lg ${isActive ? "text-white font-semibold" : "text-gray-300"
                        } hover:text-white`
                    }
                >
                    <Info size={20} /> About Us
                </NavLink>

                <NavLink
                    to="/privacy-policy"
                    className={({ isActive }) =>
                        `flex items-center gap-2 text-lg ${isActive ? "text-white font-semibold" : "text-gray-300"
                        } hover:text-white`
                    }
                >
                    <ShieldCheck size={20} /> Privacy Policy
                </NavLink>

                <NavLink
                    to="/faqs"
                    className={({ isActive }) =>
                        `flex items-center gap-2 text-lg ${isActive ? "text-white font-semibold" : "text-gray-300"
                        } hover:text-white`
                    }
                >
                    <HelpCircle size={20} /> FAQs
                </NavLink>

                {/* User Dropdown / Sign In */}
                {users ? (
                    <Dropdown
                        label={<Avatar img={users.photoURL} rounded status="online" />}
                        dismissOnClick={false}
                        arrowIcon={false}
                        inline
                    >
                        <DropdownItem>{users.displayName}</DropdownItem>
                        <Link to="/dashboard">
                            <DropdownItem className="flex items-center gap-2">
                                <LayoutDashboard size={18} /> Dashboard
                            </DropdownItem>
                        </Link>
                        <DropdownDivider />
                        <DropdownItem
                            onClick={handleSignOut}
                            className="flex items-center gap-2 text-red-400"
                        >
                            <LogOut size={18} /> Sign out
                        </DropdownItem>
                    </Dropdown>
                ) : (
                    <Button
                        onClick={() => navigate("/sign-in")}
                        className="bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700"
                    >
                        <LogIn size={18} className="mr-2" /> Sign In
                    </Button>
                )}
            </NavbarCollapse>
        </Navbar>
    );
};

export default Nav;
