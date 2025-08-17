// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Edit3 } from "lucide-react";
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

    // Helper function to split display name
    const getFirstName = () => {
        return users?.displayName?.split(' ')[0] || 'Michael';
    };

    const getLastName = () => {
        return users?.displayName?.split(' ')[1] || 'Rodriguez';
    };

    return (
        <motion.div
            className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800">My Profile</h1>
                </div>

                {/* Profile Card */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6 p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <img
                                    src={users?.photoURL || "https://i.ibb.co/fM9G1Hp/users-placeholder.png"}
                                    alt="Profile"
                                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                                />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">{users?.displayName || 'Michael Rodriguez'}</h2>
                                <p className="text-sm text-gray-600">Product Designer</p>
                                <p className="text-sm text-gray-500">Dhaka Bangladesh</p>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md transition-colors">
                            <span className="text-sm">Edit</span>
                            <Edit3 size={16} />
                        </button>
                    </div>
                </div>

                {/* Personal Information Card */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                        <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md transition-colors">
                            <span className="text-sm">Edit</span>
                            <Edit3 size={16} />
                        </button>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                <p className="text-sm text-gray-900">{getFirstName()}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                <p className="text-sm text-gray-900">{getLastName()}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
                                <p className="text-sm text-gray-900">{users?.email || 'Rodriguez@gmail.com'}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                <p className="text-sm text-gray-900">01743654455</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                                <p className="text-sm text-gray-900">Product Designer</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Address Card */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                        
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                                <p className="text-sm text-gray-900">Bangladesh</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">City / State</label>
                                <p className="text-sm text-gray-900">Dhaka</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                                <p className="text-sm text-gray-900">82000</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">TAX ID</label>
                                <p className="text-sm text-gray-900">AS56417696</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default UsersProfile;