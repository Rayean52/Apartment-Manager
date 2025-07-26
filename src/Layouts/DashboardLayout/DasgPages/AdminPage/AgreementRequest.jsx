import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import toast from "react-hot-toast";

const dummyRequests = [
    {
        name: "John Doe",
        email: "john@example.com",
        floor: 3,
        block: "B",
        room: "302",
        rent: 15000,
        requestDate: "2025-07-15",
        status: "pending",
    },
    {
        name: "Sarah Khan",
        email: "sarah@example.com",
        floor: 5,
        block: "A",
        room: "503",
        rent: 18000,
        requestDate: "2025-07-13",
        status: "pending",
    },
];

const AgreementRequests = () => {
    const [requests, setRequests] = useState(dummyRequests);

    useEffect(() => {
        AOS.init({ once: true });

        fetch("https://apartment-manager-kappa.vercel.app/applications")
            .then((res) => res.json())
            .then((data) => {
                console.log("All agreements:", data);
                setRequests(data); // Set to your state
            })
            .catch((err) => {
                console.error("Failed to load agreements:", err);
            });

    }, []);

    const handleAction = async (email, action) => {
        const updated = requests.filter((req) => req.email !== email);
        setRequests(updated);

        try {
            if (action === "accept") {
                // 1. Update application status to "accepted"
                const res1 = await fetch(`https://apartment-manager-kappa.vercel.app/applications/status/${email}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ status: "accepted", role: "member" }),
                });

                const data1 = await res1.json();

                if (data1.modifiedCount > 0) {
                    toast.success(`✅ ${email} promoted to member!`);
                } else {
                    toast.error(`Failed to update status for ${email}`);
                }

            } else if (action === "reject") {
                // 2. Delete the application
                const res2 = await fetch(`https://apartment-manager-kappa.vercel.app/applications/${email}`, {
                    method: "DELETE",
                });

                const data2 = await res2.json();

                if (data2.deletedCount > 0) {
                    toast.success(`❌ ${email} application rejected and removed.`);
                } else {
                    toast.error(`Failed to remove application for ${email}`);
                }
            }
        } catch (err) {
            console.error("Action error:", err);
            toast.error("Something went wrong.");
        }

        console.log(`${action.toUpperCase()} -> ${email}`);
    };


    return (
        <motion.div
            className="min-h-screen px-4 md:px-10 py-12 bg-gradient-to-br from-[#fef6fb] via-[#f0f9ff] to-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="text-center mb-10">
                <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                    Agreement Requests
                </h2>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-lg">
                    Review and manage all apartment agreement requests submitted by users.
                </p>
            </div>

            {requests.length ? (
                <div className="overflow-x-auto shadow-xl rounded-xl bg-white/70 backdrop-blur-lg border border-white/20">
                    <table className="table w-full table-zebra">
                        <thead className="text-left bg-gradient-to-r from-purple-200 to-indigo-200 text-gray-800">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Floor</th>
                                <th>Block</th>
                                <th>Room No</th>
                                <th>Rent (৳)</th>
                                <th>Date</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map((req, i) => (
                                <tr key={i}>
                                    <td>{req.name}</td>
                                    <td>{req.email}</td>
                                    <td>{req.floor_no}</td>
                                    <td>{req.block_name}</td>
                                    <td>{req.apartment_no}</td>
                                    <td>{req.rent}</td>
                                    <td>{req.requestDate}</td>
                                    <td className="flex items-center gap-2 mt-2">
                                        <button
                                            onClick={() => handleAction(req.email, "accept")}
                                            className="px-3 py-1 rounded-md bg-green-500 text-white hover:bg-green-600 transition"
                                        >
                                            Accept
                                        </button>
                                        <button
                                            onClick={() => handleAction(req.email, "reject")}
                                            className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                                        >
                                            Reject
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center mt-20 text-xl text-gray-500 font-medium">
                    No pending agreement requests.
                </div>
            )}
        </motion.div>
    );
};

export default AgreementRequests;
