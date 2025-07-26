import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import { Card, Button } from "flowbite-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { Toaster } from 'react-hot-toast';
import axios from "axios";

const Apartment = () => {
    const apartments = useLoaderData(); // from loader
    const { users } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 700 });
    }, []);

    const [filtered, setFiltered] = useState(apartments);
    const [minRent, setMinRent] = useState("");
    const [maxRent, setMaxRent] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [applied, setApplied] = useState([]); // users-applied apartments

    const perPage = 6;
    const start = (currentPage - 1) * perPage;
    const paginatedData = filtered.slice(start, start + perPage);
    const totalPages = Math.ceil(filtered.length / perPage);

    // Search by rent
    const handleSearch = () => {
        const min = parseInt(minRent);
        const max = parseInt(maxRent);
        const result = apartments.filter((apt) => {
            const rent = parseInt(apt.rent);
            return (!isNaN(min) ? rent >= min : true) && (!isNaN(max) ? rent <= max : true);
        });
        setFiltered(result);
        setCurrentPage(1);
    };

    // Submit agreement
    const handleAgreement = async (apt) => {
        if (!users) return navigate("/sign-in");

        const alreadyApplied = applied.find(
            (a) => a.apartment_no === apt.apartment_no && a.email === users.email
        );
        if (alreadyApplied) {
            toast.error("You have already applied for this apartment.");
            return;
        }

        const agreementData = {
            name: users.displayName || "Unknown users",
            email: users.email,
            floor_no: apt.floor_no,
            block_name: apt.block_name,
            apartment_no: apt.apartment_no,
            rent: apt.rent,
            role: "user",
            status: "pending",
        };

        try {
            const res = await axios.post("https://apartment-manager-kappa.vercel.app/applications", agreementData);

            if (res.status === 200 || res.status === 201) {
                toast.success("Agreement request sent!");
                setApplied([...applied, { apartment_no: apt.apartment_no, email: users.email }]);
            } else {
                toast.error("Unexpected response. Please try again.");
            }
        } catch (err) {
            console.error("Agreement Error:", err);
            toast.error(err.response?.data?.message || "Network error!");
        }
    };

    return (
        <section className="bg-gradient-to-br from-[#f4f7fa] via-[#edf1f5] to-[#ffffff] min-h-screen py-16 px-6 md:px-12 lg:px-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-10 text-center">
                    Explore Our Apartments
                </h2>

                {/* Search Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    <input
                        type="number"
                        placeholder="Min Rent"
                        value={minRent}
                        onChange={(e) => setMinRent(e.target.value)}
                        className="input input-bordered w-40 text-sm"
                    />
                    <input
                        type="number"
                        placeholder="Max Rent"
                        value={maxRent}
                        onChange={(e) => setMaxRent(e.target.value)}
                        className="input input-bordered w-40 text-sm"
                    />
                    <button onClick={handleSearch} className="btn btn-primary">Search</button>
                </div>

                {/* Apartment Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paginatedData.map((apt, idx) => (
                        <motion.div
                            data-aos="fade-up"
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            className="transition-transform duration-300"
                        >
                            <Card className="bg-gradient-to-tr from-white via-gray-50 to-white rounded-xl shadow-xl h-full flex flex-col">
                                <img
                                    src={apt.apartment_image}
                                    loading="lazy"
                                    alt={`Apartment ${apt.apartment_no}`}
                                    className="rounded-lg w-full h-48 object-cover"
                                />
                                <div className="mt-4 space-y-1 px-2">
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        Apartment No: {apt.apartment_no}
                                    </h3>
                                    <p className="text-gray-600 text-sm">Block: {apt.block_name}</p>
                                    <p className="text-gray-600 text-sm">Floor: {apt.floor_no}</p>
                                    <p className="text-gray-800 font-bold mt-2">Rent: ৳{apt.rent}</p>
                                </div>
                                <div className="mt-auto p-4">
                                    <Button
                                        color="purple"
                                        className="w-full"
                                        onClick={() => handleAgreement(apt)}
                                        disabled={applied.some((a) => a.apartment_no === apt.apartment_no && a.email === users?.email)}
                                    >
                                        {applied.some((a) => a.apartment_no === apt.apartment_no && a.email === users?.email)
                                            ? "Already Applied"
                                            : "Agreement"}
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-12 flex flex-wrap justify-center space-x-2 gap-y-2">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`btn btn-sm ${currentPage === i + 1 ? "btn-primary" : "btn-outline"}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                )}
            </motion.div>
            <Toaster></Toaster>
        </section>
    );
};

export default Apartment;
