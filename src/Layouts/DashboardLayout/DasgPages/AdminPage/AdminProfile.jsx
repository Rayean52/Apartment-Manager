import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // Replace with your own useAuth
import useAuth from "../../../../hooks/useAuth";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

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

    const salesData = [
        { day: "09. Mo.", earnings: 1000, payments: 1400 },
        { day: "10. Tue.", earnings: 700, payments: 900 },
        { day: "11. Wed.", earnings: 800, payments: 1200 },
        { day: "12. Thu.", earnings: 600, payments: 800 },
        { day: "13. Fri.", earnings: 750, payments: 1250 },
    ];

    const statsData = [
        { title: "Shares", value: "245,212", trend: "+16.24%", color: "green" },
        { title: "Comments", value: "51,266", trend: "-10.78%", color: "red" },
    ];

    return (
        <motion.div
            className="min-h-[80vh] px-4 md:px-10 py-10 relative bg-gradient-to-br from-[#f0f9ff] via-[#fef6fb] to-[#fff]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Top Section: Profile Card + Sales Chart */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                    {/* Profile Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center" data-aos="fade-up">
                        <img
                            src={users?.photoURL || "https://i.ibb.co/8K4NBRP/admin.png"}
                            alt="Profile"
                            className="w-32 h-32 rounded-full mb-4"
                        />
                        <h3 className="text-2xl font-bold">{users?.displayName || "Julien Magnifce"}</h3>
                        <p className="text-gray-500 mb-2">Design Student</p>
                        <p className="text-gray-600 text-sm">Email: {users?.email || "customer@email.com"}</p>
                        <p className="text-gray-600 text-sm">Phone: +01 923 456 78</p>
                        <p className="text-gray-600 text-sm">Location: 7839 Williams Dr, Columbus, GA 31904</p>
                    </div>

                    {/* Sales Report */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6" data-aos="fade-up">
                        <h4 className="text-lg font-semibold mb-4">Sales Report</h4>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={salesData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="day" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="earnings" fill="#4f46e5" />
                                <Bar dataKey="payments" fill="#ec4899" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {statsData.map((stat) => (
                        <div key={stat.title} className="bg-white rounded-2xl shadow-lg p-6 flex justify-between items-center">
                            <div>
                                <h5 className="text-gray-500">{stat.title}</h5>
                                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                            </div>
                            <p className={`font-semibold ${stat.color === "green" ? "text-green-500" : "text-red-500"}`}>
                                {stat.trend}
                            </p>
                        </div>
                    ))}
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
