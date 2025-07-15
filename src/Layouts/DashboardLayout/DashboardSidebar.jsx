import { useState } from "react";
import { NavLink } from "react-router";
import {
    HiOutlineUser,
    HiOutlineBell,
    HiOutlineCreditCard,
    HiOutlineClipboardList,
    HiOutlineUsers,
    HiOutlineSpeakerphone,
    HiOutlineDocumentText,
    HiOutlineTag,
    HiOutlineMenuAlt2,
    HiOutlineX,
} from "react-icons/hi";

const DashboardSidebar = ({ role }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        if (window.innerWidth < 768) {
            setIsOpen(false);
        }
    };

    const baseLink =
        "text-gray-700 hover:text-white flex items-center gap-3 px-4 py-2 rounded-md transition";

    const activeClass = "bg-white/20 text-white font-semibold";

    return (
        <>
            {/* Mobile Header */}
            <div className="md:hidden flex justify-between items-center p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md">
                <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
                    {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt2 />}
                </button>
            </div>

            {/* Sidebar Container */}
            <aside
                className={`fixed md:relative top-0 left-0 z-50 h-screen w-64 bg-purple-100 shadow-xl transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                    }`}
            >
                {/* Optional Animated Background Blob */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse z-0"></div>

                <div className="p-4 h-full flex flex-col justify-between relative z-10">
                    <div>
                        <h3 className="text-3xl font-extrabold text-gray-700 mb-8 text-center tracking-wide">
                            🏢 AptManager
                        </h3>

                        {/* Common Navs */}
                        <nav className="space-y-2">
                            <NavLink
                                onClick={handleLinkClick}
                                to="/dashboard/user-profile"
                                className={({ isActive }) =>
                                    `${baseLink} ${isActive ? activeClass : ""}`
                                }
                            >
                                <HiOutlineUser className="text-xl" />
                                My Profile
                            </NavLink>

                            <NavLink
                                onClick={handleLinkClick}
                                to="/dashboard/announcement"
                                className={({ isActive }) =>
                                    `${baseLink} ${isActive ? activeClass : ""}`
                                }
                            >
                                <HiOutlineBell className="text-xl" />
                                Announcements
                            </NavLink>
                        </nav>

                        {/* Member Links */}
                        <nav className="mt-6 space-y-2">
                            <NavLink
                                onClick={handleLinkClick}
                                to="/dashboard/make-payment"
                                className={({ isActive }) =>
                                    `${baseLink} ${isActive ? activeClass : ""}`
                                }
                            >
                                <HiOutlineCreditCard className="text-xl text-black" />
                                Make Payment
                            </NavLink>
                            <NavLink
                                onClick={handleLinkClick}
                                to="/dashboard/payment-history"
                                className={({ isActive }) =>
                                    `${baseLink} ${isActive ? activeClass : ""}`
                                }
                            >
                                <HiOutlineClipboardList className="text-xl" />
                                Payment History
                            </NavLink>
                        </nav>

                        {/* Admin Links */}
                        {role === "admin" && (
                            <nav className="mt-6 space-y-2">
                                <NavLink
                                    onClick={handleLinkClick}
                                    to="/dashboard/admin-profile"
                                    className={({ isActive }) =>
                                        `${baseLink} ${isActive ? activeClass : ""}`
                                    }
                                >
                                    <HiOutlineUser className="text-xl" />
                                    Admin Profile
                                </NavLink>
                                <NavLink
                                    onClick={handleLinkClick}
                                    to="/dashboard/manage-members"
                                    className={({ isActive }) =>
                                        `${baseLink} ${isActive ? activeClass : ""}`
                                    }
                                >
                                    <HiOutlineUsers className="text-xl" />
                                    Manage Members
                                </NavLink>
                                <NavLink
                                    onClick={handleLinkClick}
                                    to="/dashboard/make-announcement"
                                    className={({ isActive }) =>
                                        `${baseLink} ${isActive ? activeClass : ""}`
                                    }
                                >
                                    <HiOutlineSpeakerphone className="text-xl" />
                                    Make Announcement
                                </NavLink>
                                <NavLink
                                    onClick={handleLinkClick}
                                    to="/dashboard/agreement-requests"
                                    className={({ isActive }) =>
                                        `${baseLink} ${isActive ? activeClass : ""}`
                                    }
                                >
                                    <HiOutlineDocumentText className="text-xl" />
                                    Agreement Requests
                                </NavLink>
                                <NavLink
                                    onClick={handleLinkClick}
                                    to="/dashboard/manage-coupons"
                                    className={({ isActive }) =>
                                        `${baseLink} ${isActive ? activeClass : ""}`
                                    }
                                >
                                    <HiOutlineTag className="text-xl" />
                                    Manage Coupons
                                </NavLink>
                            </nav>
                        )}
                    </div>

                    {/* Footer / Logout button (optional) */}
                    <div className="mt-10 text-center text-white text-sm opacity-70">
                        &copy; {new Date().getFullYear()} AptManager
                    </div>
                </div>
            </aside>
        </>
    );
};

export default DashboardSidebar;
