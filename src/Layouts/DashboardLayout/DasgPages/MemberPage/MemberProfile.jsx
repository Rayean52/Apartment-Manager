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

    console.log(apartment)

    if (loading) {
        return <Loading></Loading>
    }
    

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f7f8fc] to-white px-6 py-10 md:px-20 space-y-12">
            {/* Profile Header */}
            <section
                className="flex flex-col md:flex-row items-center gap-6"
                data-aos="fade-down"
            >
                <img
                    src={users.photoURL}
                    alt="Member"
                    className="w-32 h-32 rounded-full border-4 border-purple-600 shadow-md object-cover"
                />
                <div>
                    <h1 className="text-3xl font-bold text-purple-800">{users.displayName}</h1>
                    <p className="text-gray-600 text-sm mt-1">{users.email}</p>
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
                    {new Date(apartment.createdAt).toLocaleDateString()}
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
                        <span className="font-medium">Floor:</span> {apartment.floor_no}
                    </p>
                    <p>
                        <span className="font-medium">Block:</span> {apartment.block_name}
                    </p>
                    <p>
                        <span className="font-medium">Room No:</span> {apartment.apartment_no}
                    </p>
                    <p>
                        <span className="font-medium">Rent:</span> ৳{apartment.rent}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default MemberProfile;
