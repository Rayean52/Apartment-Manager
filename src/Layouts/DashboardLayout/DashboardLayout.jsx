import DashboardSidebar from "./DashboardSidebar";
import { Outlet } from "react-router";
// import useUserRole from "../hooks/useUserRole" // optional

const DashboardLayout = () => {
    // Add user role here // fallback
    // Or use: const role = useUserRole();

    return (
        <div className="min-h-screen flex relative bg-gradient-to-tr from-[#f9fbfe] via-[#ecf3ff] to-[#f0faff]">
            {/* Background animation (SVG or blob) */}
            <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
            <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] bg-gradient-to-tr from-indigo-200 via-teal-300 to-sky-300 opacity-20 rounded-full blur-2xl animate-pulse z-0" />

            {/* Sidebar */}
            <div className="relative z-10">
                <DashboardSidebar />
            </div>

            {/* Main content area */}
            <main className="flex-1 z-10 relative p-6 md:p-10 overflow-y-auto">
                <div className="rounded-lg shadow-lg bg-white/70 backdrop-blur-md p-6 border border-white/30">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
