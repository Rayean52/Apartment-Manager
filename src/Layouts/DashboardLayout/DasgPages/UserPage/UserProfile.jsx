// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useAuth from "../../../../hooks/useAuth";

const UsersProfile = () => {
    const { users } = useAuth();


    if (!users) {
        return (
            <div className="min-h-[70vh] flex justify-center items-center">
                <p className="text-lg text-gray-500">Loading profile...</p>
            </div>
        );
    }

    return (
        <motion.section
            className="min-h-[85vh] px-6 py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 flex flex-col justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left: Profile Info */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-3">
                            Welcome, {users?.displayName || "users"} 👋
                        </h1>
                        <p className="text-gray-700 text-lg">
                            Here's your current account overview. You're logged in as a <span className="font-semibold text-purple-600">normal users</span>.
                        </p>
                    </div>

                    <div className="space-y-2 text-gray-800 text-base">
                        <p><span className="font-semibold">Email:</span> {users?.email}</p>
                        <p><span className="font-semibold">Role:</span> users</p>
                        <p><span className="font-semibold">Agreement Date:</span> None</p>
                        <p><span className="font-semibold">Floor:</span> None</p>
                        <p><span className="font-semibold">Block:</span> None</p>
                        <p><span className="font-semibold">Apartment No:</span> None</p>
                    </div>
                </div>

                {/* Right: Profile Image */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src={users?.photoURL || "https://i.ibb.co/fM9G1Hp/users-placeholder.png"}
                        alt="users"
                        className="w-60 h-60 rounded-full object-cover ring-4 ring-purple-200 shadow-lg"
                    />
                </div>
            </div>
        </motion.section>
    );
};

export default UsersProfile;
