import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // Replace with your own useAuth
import useAuth from "../../../../hooks/useAuth";

const AdminProfile = () => {
    const { users } = useAuth();

    const totalRooms = 100;
    const availableRooms = 35;
    const unavailableRooms = totalRooms - availableRooms;
    const usersCount = 50;
    const membersCount = 20;

    const availablePercentage = ((availableRooms / totalRooms) * 100).toFixed(0);
    const unavailablePercentage = ((unavailableRooms / totalRooms) * 100).toFixed(0);

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <motion.div
            className="min-h-[80vh] px-4 md:px-10 py-10 relative bg-gradient-to-br from-[#f0f9ff] via-[#fef6fb] to-[#fff]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Background decoration */}
            <div className="absolute -top-16 -left-16 w-56 h-56 bg-gradient-to-tr from-blue-200 via-purple-200 to-pink-200 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tr from-indigo-200 via-teal-300 to-sky-300 opacity-20 rounded-full blur-2xl animate-pulse z-0" />

            <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-transparent bg-clip-text">
                        Admin Profile
                    </h2>
                    <p className="text-gray-600 mt-2 text-lg max-w-xl mx-auto">
                        Overview of your account and apartment system statistics.
                    </p>
                </div>

                {/* Admin Card */}
                <div
                    className="max-w-3xl mx-auto bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-6 items-center"
                    data-aos="fade-up"
                >
                    <img
                        src={users?.photoURL || "https://i.ibb.co/8K4NBRP/admin.png"}
                        alt="Admin"
                        className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md object-cover"
                    />
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-blue-700">{users?.displayName || "Admin Name"}</h3>
                        <p className="text-gray-600">{users?.email || "admin@email.com"}</p>
                        <span className="badge badge-accent mt-2">System Administrator</span>
                    </div>
                </div>

                {/* Stats Section */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <StatCard title="Total Rooms" value={totalRooms} icon="🏢" />
                    <StatCard title="Available Rooms" value={`${availablePercentage}%`} icon="✅" />
                    <StatCard title="Rented/Unavailable Rooms" value={`${unavailablePercentage}%`} icon="🚫" />
                    <StatCard title="Total Users" value={usersCount} icon="👤" />
                    <StatCard title="Total Members" value={membersCount} icon="👥" />
                </div>
            </div>
        </motion.div>
    );
};

// Reusable Stat Card Component
const StatCard = ({ title, value, icon }) => {
    return (
        <div className="bg-white/80 rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all">
            <div className="text-4xl mb-2">{icon}</div>
            <h4 className="text-lg font-semibold text-gray-700">{title}</h4>
            <p className="text-2xl font-bold text-blue-600 mt-1">{value}</p>
        </div>
    );
};

export default AdminProfile;
