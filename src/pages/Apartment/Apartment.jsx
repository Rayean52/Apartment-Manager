import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import { Card, Button } from "flowbite-react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { Toaster } from 'react-hot-toast';
import axios from "axios";

const Apartment = () => {
    const apartments = useLoaderData(); // from loader
    const { users } = useAuth();
    const navigate = useNavigate();

    const [filtered, setFiltered] = useState(apartments);
    const [minRent, setMinRent] = useState("");
    const [maxRent, setMaxRent] = useState("");
    const [sortBy, setSortBy] = useState("");
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
        let result = apartments.filter((apt) => {
            const rent = parseInt(apt.rent);
            return (!isNaN(min) ? rent >= min : true) && (!isNaN(max) ? rent <= max : true);
        });

        // Apply sorting if selected
        if (sortBy) {
            result = handleSort(result, sortBy);
        }

        setFiltered(result);
        setCurrentPage(1);
    };

    // Sort functionality
    const handleSort = (data, sortType) => {
        const sortedData = [...data];
        switch (sortType) {
            case "rent-low":
                return sortedData.sort((a, b) => parseInt(a.rent) - parseInt(b.rent));
            case "rent-high":
                return sortedData.sort((a, b) => parseInt(b.rent) - parseInt(a.rent));
            case "floor-low":
                return sortedData.sort((a, b) => parseInt(a.floor_no) - parseInt(b.floor_no));
            case "floor-high":
                return sortedData.sort((a, b) => parseInt(b.floor_no) - parseInt(a.floor_no));
            case "apartment-no":
                return sortedData.sort((a, b) => parseInt(a.apartment_no) - parseInt(b.apartment_no));
            default:
                return sortedData;
        }
    };

    // Handle sort change
    const handleSortChange = (e) => {
        const sortType = e.target.value;
        setSortBy(sortType);
        if (sortType) {
            const sortedData = handleSort(filtered, sortType);
            setFiltered(sortedData);
        } else {
            setFiltered(apartments);
        }
        setCurrentPage(1);
    };

    // View apartment details
    const handleViewDetails = (apt) => {
        // Navigate to apartment details page or show modal
        navigate(`/apartment-details/${apt.apartment_no}`);
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
        <section className="bg-gray-50 mt-23 min-h-screen py-8 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 gap-6">
                    {/* Title and Description - Top Left */}
                    <div className="lg:max-w-md">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Available Apartments
                        </h1>
                        <p className="text-gray-600 leading-relaxed">
                            Discover your perfect home from our collection of premium apartments.
                            Browse through various options with different floor plans, amenities,
                            and rental rates to find the one that suits your lifestyle.
                        </p>
                    </div>

                    {/* Sort Functionality - Top Right */}
                    <div className="lg:min-w-64">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Sort by
                        </label>
                        <select
                            value={sortBy}
                            onChange={handleSortChange}
                            className="select select-bordered w-full max-w-xs bg-white"
                        >
                            <option value="">Default</option>
                            <option value="rent-low">Rent: Low to High</option>
                            <option value="rent-high">Rent: High to Low</option>
                            <option value="floor-low">Floor: Low to High</option>
                            <option value="floor-high">Floor: High to Low</option>
                            <option value="apartment-no">Apartment Number</option>
                        </select>
                    </div>
                </div>

                {/* Search Filter */}
                <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Rent</h3>
                    <div className="flex flex-wrap items-end gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Minimum Rent
                            </label>
                            <input
                                type="number"
                                placeholder="0"
                                value={minRent}
                                onChange={(e) => setMinRent(e.target.value)}
                                className="input input-bordered w-40 text-sm bg-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Maximum Rent
                            </label>
                            <input
                                type="number"
                                placeholder="No limit"
                                value={maxRent}
                                onChange={(e) => setMaxRent(e.target.value)}
                                className="input input-bordered w-40 text-sm bg-white"
                            />
                        </div>
                        <button
                            onClick={handleSearch}
                            className="btn btn-primary px-8"
                        >
                            Apply Filter
                        </button>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-gray-600">
                        Showing {paginatedData.length} of {filtered.length} apartments
                    </p>
                </div>

                {/* Apartment Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                    {paginatedData.map((apt, idx) => (
                        <Card key={idx} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 h-full flex flex-col">
                            <img
                                src={apt.apartment_image}
                                loading="lazy"
                                alt={`Apartment ${apt.apartment_no}`}
                                className="rounded-t-lg w-full h-48 object-cover"
                            />
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Apartment {apt.apartment_no}
                                    </h3>
                                    <div className="space-y-2 mb-4">
                                        <p className="text-gray-600 text-sm flex items-center">
                                            <span className="font-medium">Block:</span>
                                            <span className="ml-2">{apt.block_name}</span>
                                        </p>
                                        <p className="text-gray-600 text-sm flex items-center">
                                            <span className="font-medium">Floor:</span>
                                            <span className="ml-2">{apt.floor_no}</span>
                                        </p>
                                        <p className="text-lg font-bold text-gray-900">
                                            ৳{parseInt(apt.rent).toLocaleString()}/month
                                        </p>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-2 mt-auto">
                                    <Button
                                        color="light"
                                        className="flex-1 border-gray-300"
                                        onClick={() => handleViewDetails(apt)}
                                    >
                                        View Details
                                    </Button>
                                    <Button
                                        color="blue"
                                        className="flex-1"
                                        onClick={() => handleAgreement(apt)}
                                        disabled={applied.some((a) => a.apartment_no === apt.apartment_no && a.email === users?.email)}
                                    >
                                        {applied.some((a) => a.apartment_no === apt.apartment_no && a.email === users?.email)
                                            ? "Applied"
                                            : "Apply"}
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* No Results Message */}
                {paginatedData.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No apartments found matching your criteria.</p>
                        <button
                            onClick={() => {
                                setFiltered(apartments);
                                setMinRent("");
                                setMaxRent("");
                                setSortBy("");
                                setCurrentPage(1);
                            }}
                            className="btn btn-outline mt-4"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center space-x-2 mt-8">
                        {/* Previous Button */}
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="btn btn-sm btn-outline disabled:opacity-50"
                        >
                            Previous
                        </button>

                        {/* Page Numbers */}
                        {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                            let pageNumber;
                            if (totalPages <= 7) {
                                pageNumber = i + 1;
                            } else if (currentPage <= 4) {
                                pageNumber = i + 1;
                            } else if (currentPage >= totalPages - 3) {
                                pageNumber = totalPages - 6 + i;
                            } else {
                                pageNumber = currentPage - 3 + i;
                            }

                            return (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(pageNumber)}
                                    className={`btn btn-sm ${currentPage === pageNumber
                                            ? "btn-primary"
                                            : "btn-outline"
                                        }`}
                                >
                                    {pageNumber}
                                </button>
                            );
                        })}

                        {/* Next Button */}
                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="btn btn-sm btn-outline disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
            <Toaster position="top-right" />
        </section>
    );
};

export default Apartment;