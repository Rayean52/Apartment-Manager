import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useAuth from "../../../../hooks/useAuth";
import Loading from "../../../../components/Shared/Loading";

const MemberProfile = () => {
    const [apartment, setApartment] = useState(null);
    const [loading, setLoading] = useState(true);
    const { users } = useAuth();

    useEffect(() => {
        AOS.init({ duration: 800 });

        if (users?.email) {
            fetch(`https://apartment-manager-kappa.vercel.app/member-apartment?email=${users.email}`)
                .then(res => res.json())
                .then(data => {
                    setApartment(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Failed to fetch member apartment", err);
                    setLoading(false);
                });
        }
    }, [users?.email]);

    if (loading) {
        return <Loading></Loading>
    }

    // Format phone number (you might need to adjust this based on your data structure)
    const formatPhoneNumber = (phone) => {
        return phone || "+880 XXX XXX XXXX"; // Placeholder if no phone in data
    };

    // Format date of birth (you might need to adjust this based on your data structure)
    const formatDateOfBirth = (date) => {
        return date || "12-10-1990"; // Placeholder if no DOB in data
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800">My Profile</h1>
                </div>

                {/* Profile Card */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6 p-6" data-aos="fade-down">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <img
                                src={users.photoURL || "/api/placeholder/80/80"}
                                alt="Profile"
                                className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                            />
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                                <span className="text-white text-xs">✓</span>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">{users.displayName}</h2>
                            <p className="text-sm text-gray-600">Admin</p>
                            <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>

                {/* Personal Information Card */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6" data-aos="fade-up">
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                       
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                <p className="text-sm text-gray-900">{users.displayName?.split(' ')[0] || 'Natashia'}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                <p className="text-sm text-gray-900">{users.displayName?.split(' ')[1] || 'Khaleira'}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                                <p className="text-sm text-gray-900">{formatDateOfBirth(apartment?.dateOfBirth)}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <p className="text-sm text-gray-900">{users.email}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <p className="text-sm text-gray-900">{formatPhoneNumber(apartment?.phone)}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">User Role</label>
                                <p className="text-sm text-gray-900">Member</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Address Card */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200" data-aos="fade-up">
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                        
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                                <p className="text-sm text-gray-900">Bangladesh</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                <p className="text-sm text-gray-900">Dhaka</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                                <p className="text-sm text-gray-900">ER7 1254</p>
                            </div>
                        </div>
                        {apartment && (
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <h4 className="text-md font-semibold text-gray-900 mb-4">Apartment Details</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Floor</label>
                                        <p className="text-sm text-gray-900">{apartment.floor_no}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Block</label>
                                        <p className="text-sm text-gray-900">{apartment.block_name}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Apartment No</label>
                                        <p className="text-sm text-gray-900">{apartment.apartment_no}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Rent</label>
                                        <p className="text-sm text-gray-900">৳{apartment.rent}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Agreement Date</label>
                                        <p className="text-sm text-gray-900">{new Date(apartment.createdAt).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberProfile;