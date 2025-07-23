import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MemberProfile = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    // Dummy data — replace with real data later
    const member = {
        name: "Abdullah Rayean",
        email: "rayean@example.com",
        image: "https://i.ibb.co/Yy0vNwL/user-profile.jpg",
        agreementDate: "2025-07-01",
        apartment: {
            floor: "3rd",
            block: "B",
            roomNo: "B3-07",
            rent: 18000,
        },
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f7f8fc] to-white px-6 py-10 md:px-20 space-y-12">
            {/* Profile Header */}
            <section
                className="flex flex-col md:flex-row items-center gap-6"
                data-aos="fade-down"
            >
                <img
                    src={member.image}
                    alt="Member"
                    className="w-32 h-32 rounded-full border-4 border-purple-600 shadow-md object-cover"
                />
                <div>
                    <h1 className="text-3xl font-bold text-purple-800">{member.name}</h1>
                    <p className="text-gray-600 text-sm mt-1">{member.email}</p>
                </div>
            </section>

            {/* Agreement Info */}
            <section
                className="border-t border-gray-200 pt-6"
                data-aos="fade-up"
            >
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Agreement Details</h2>
                <p className="text-gray-700">
                    <span className="font-medium">Accepted On:</span>{" "}
                    {new Date(member.agreementDate).toLocaleDateString()}
                </p>
            </section>

            {/* Apartment Info */}
            <section
                className="border-t border-gray-200 pt-6"
                data-aos="fade-up"
            >
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Apartment Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                    <p>
                        <span className="font-medium">Floor:</span> {member.apartment.floor}
                    </p>
                    <p>
                        <span className="font-medium">Block:</span> {member.apartment.block}
                    </p>
                    <p>
                        <span className="font-medium">Room No:</span> {member.apartment.roomNo}
                    </p>
                    <p>
                        <span className="font-medium">Rent:</span> ৳{member.apartment.rent}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default MemberProfile;
