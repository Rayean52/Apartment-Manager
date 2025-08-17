import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { Card, Button } from "flowbite-react";
import toast from "react-hot-toast";
import { Toaster } from 'react-hot-toast';
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const ApartmentDetails = () => {
    const { apartmentNo } = useParams();
    const navigate = useNavigate();
    const { users } = useAuth();

    const [apartment, setApartment] = useState(null);
    const [loading, setLoading] = useState(true);
    const [applied, setApplied] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);

    // Mock apartment data - replace with actual API call
    useEffect(() => {
        const fetchApartmentDetails = async () => {
            try {
                // Replace with actual API endpoint
                // const response = await axios.get(`/api/apartments/${apartmentNo}`);

                // Mock data for demonstration
                const mockApartment = {
                    apartment_no: apartmentNo,
                    block_name: "Block A",
                    floor_no: 5,
                    rent: 25000,
                    apartment_image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                    images: [
                        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                        "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    ],
                    bedrooms: 3,
                    bathrooms: 2,
                    size: "1200 sq ft",
                    balcony: 2,
                    parking: "Yes",
                    furnished: "Semi-furnished",
                    available_from: "2024-09-01",
                    description: "This beautiful 3-bedroom apartment offers modern living with stunning city views. Located on the 5th floor of Block A, it features spacious rooms, modern fixtures, and excellent natural light throughout the day.",
                    amenities: [
                        "Air Conditioning",
                        "High-Speed Internet",
                        "24/7 Security",
                        "Elevator Access",
                        "Backup Generator",
                        "Water Supply",
                        "Maintenance Service",
                        "Parking Space"
                    ],
                    nearby_facilities: [
                        { name: "Dhaka Medical College", distance: "2.5 km", type: "Hospital" },
                        { name: "Uttara University", distance: "1.8 km", type: "Education" },
                        { name: "Jamuna Future Park", distance: "3.2 km", type: "Shopping" },
                        { name: "Hazrat Shahjalal International Airport", distance: "15 km", type: "Transportation" },
                        { name: "Gulshan Lake Park", distance: "4.1 km", type: "Recreation" }
                    ],
                    landlord: {
                        name: "Mr. Rahman Ahmed",
                        phone: "+880 1712-345678",
                        email: "rahman.ahmed@example.com"
                    }
                };

                setApartment(mockApartment);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching apartment details:", error);
                toast.error("Failed to load apartment details");
                setLoading(false);
            }
        };

        fetchApartmentDetails();
    }, [apartmentNo]);

    // Submit agreement
    const handleAgreement = async () => {
        if (!users) return navigate("/sign-in");

        if (applied) {
            toast.error("You have already applied for this apartment.");
            return;
        }

        const agreementData = {
            name: users.displayName || "Unknown users",
            email: users.email,
            floor_no: apartment.floor_no,
            block_name: apartment.block_name,
            apartment_no: apartment.apartment_no,
            rent: apartment.rent,
            role: "user",
            status: "pending",
        };

        try {
            const res = await axios.post("https://apartment-manager-kappa.vercel.app/applications", agreementData);

            if (res.status === 200 || res.status === 201) {
                toast.success("Agreement request sent successfully!");
                setApplied(true);
            } else {
                toast.error("Unexpected response. Please try again.");
            }
        } catch (err) {
            console.error("Agreement Error:", err);
            toast.error(err.response?.data?.message || "Network error!");
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="loading loading-spinner loading-lg text-blue-600"></div>
                    <p className="mt-4 text-gray-600">Loading apartment details...</p>
                </div>
            </div>
        );
    }

    if (!apartment) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Apartment Not Found</h2>
                    <p className="text-gray-600 mb-6">The apartment you're looking for doesn't exist.</p>
                    <Button onClick={() => navigate("/apartment")} color="blue">
                        Back to Apartments
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <section className="bg-gray-50 min-h-screen py-8 px-4 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Back Button */}
                <div className="mb-6">
                    <button
                        onClick={() => navigate("/apartment")}
                        className="btn btn-outline btn-sm"
                    >
                        ← Back to Apartments
                    </button>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Images and Basic Info */}
                    <div className="lg:col-span-2">
                        {/* Image Gallery */}
                        <Card className="bg-white shadow-sm mb-6">
                            <div className="p-0">
                                <div className="mb-4">
                                    <img
                                        src={apartment.images[selectedImage]}
                                        alt={`Apartment ${apartment.apartment_no}`}
                                        className="w-full h-80 object-cover rounded-lg"
                                    />
                                </div>
                                <div className="grid grid-cols-4 gap-2 px-6 pb-6">
                                    {apartment.images.map((image, idx) => (
                                        <img
                                            key={idx}
                                            src={image}
                                            alt={`View ${idx + 1}`}
                                            className={`w-full h-20 object-cover rounded cursor-pointer transition-all duration-200 ${selectedImage === idx
                                                    ? 'ring-2 ring-blue-500'
                                                    : 'hover:opacity-80'
                                                }`}
                                            onClick={() => setSelectedImage(idx)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </Card>

                        {/* Description */}
                        <Card className="bg-white shadow-sm mb-6">
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {apartment.description}
                                </p>
                            </div>
                        </Card>

                        {/* Amenities */}
                        <Card className="bg-white shadow-sm mb-6">
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Amenities</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {apartment.amenities.map((amenity, idx) => (
                                        <div key={idx} className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                            {amenity}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>

                        {/* Nearby Facilities */}
                        <Card className="bg-white shadow-sm">
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Nearby Facilities</h3>
                                <div className="space-y-3">
                                    {apartment.nearby_facilities.map((facility, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                            <div>
                                                <h4 className="font-medium text-gray-900">{facility.name}</h4>
                                                <p className="text-sm text-gray-600">{facility.type}</p>
                                            </div>
                                            <span className="text-sm font-medium text-blue-600">
                                                {facility.distance}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Right Column - Details and Actions */}
                    <div className="lg:col-span-1">
                        {/* Basic Details */}
                        <Card className="bg-white shadow-sm mb-6 sticky top-8">
                            <div className="p-6">
                                <div className="text-center mb-6">
                                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                                        Apartment {apartment.apartment_no}
                                    </h1>
                                    <p className="text-3xl font-bold text-blue-600">
                                        ৳{parseInt(apartment.rent).toLocaleString()}/month
                                    </p>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span className="text-gray-600">Block</span>
                                        <span className="font-medium text-gray-900">{apartment.block_name}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span className="text-gray-600">Floor</span>
                                        <span className="font-medium text-gray-900">{apartment.floor_no}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span className="text-gray-600">Bedrooms</span>
                                        <span className="font-medium text-gray-900">{apartment.bedrooms}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span className="text-gray-600">Bathrooms</span>
                                        <span className="font-medium text-gray-900">{apartment.bathrooms}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span className="text-gray-600">Size</span>
                                        <span className="font-medium text-gray-900">{apartment.size}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span className="text-gray-600">Balcony</span>
                                        <span className="font-medium text-gray-900">{apartment.balcony}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span className="text-gray-600">Parking</span>
                                        <span className="font-medium text-gray-900">{apartment.parking}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span className="text-gray-600">Furnished</span>
                                        <span className="font-medium text-gray-900">{apartment.furnished}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-gray-600">Available From</span>
                                        <span className="font-medium text-gray-900">{apartment.available_from}</span>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="space-y-3">
                                    <Button
                                        color="blue"
                                        className="w-full"
                                        onClick={handleAgreement}
                                        disabled={applied}
                                    >
                                        {applied ? "Application Submitted" : "Apply for Apartment"}
                                    </Button>
                                    <Button
                                        color="light"
                                        className="w-full border-gray-300"
                                        onClick={() => navigate("/apartment")}
                                    >
                                        View More Apartments
                                    </Button>
                                </div>

                                {/* Contact Information */}
                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-3">Contact Landlord</h4>
                                    <div className="space-y-2 text-sm">
                                        <p className="text-gray-700">
                                            <span className="font-medium">Name:</span> {apartment.landlord.name}
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-medium">Phone:</span> {apartment.landlord.phone}
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-medium">Email:</span> {apartment.landlord.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            <Toaster position="top-right" />
        </section>
    );
};

export default ApartmentDetails;