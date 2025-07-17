import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const ManageMembers = () => {
    const [members, setMembers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // Dummy members for demonstration
    useEffect(() => {
        AOS.init({ once: true });

        setMembers([
            { id: 1, name: "Abdullah Rayean", email: "rayean@example.com" },
            { id: 2, name: "Tania Akter", email: "tania@example.com" },
            { id: 3, name: "Ziaul Islam", email: "ziaul@example.com" },
        ]);
    }, []);

    const handleRemoveRole = (id) => {
        const updated = members.filter((member) => member.id !== id);
        setMembers(updated);
        alert("Role changed to 'user'. Member access revoked.");
    };

    // Filtered members based on search
    const filteredMembers = members.filter((member) =>
        `${member.name} ${member.email}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <motion.div
            className="min-h-[80vh] px-4 md:px-10 py-12 bg-gradient-to-br from-[#fef6fb] via-[#f0f9ff] to-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-indigo-600">
                    Manage Members
                </h2>
                <p className="text-gray-600 mt-2 text-lg max-w-xl mx-auto">
                    View and manage current members. Revoke member access if needed.
                </p>
            </div>

            {/* Search Input */}
            <div className="max-w-md mx-auto mb-6">
                <input
                    type="text"
                    placeholder="Search by name or email"
                    className="input input-bordered w-full shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Table */}
            <div
                className="overflow-x-auto bg-white/80 backdrop-blur-xl rounded-xl shadow-xl p-6"
                data-aos="fade-up"
            >
                <table className="table w-full">
                    <thead>
                        <tr className="text-left text-base text-indigo-600 font-bold border-b-2 border-indigo-300">
                            <th className="py-3">Name</th>
                            <th>Email</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredMembers.length > 0 ? (
                            filteredMembers.map((member) => (
                                <tr key={member.id} className="hover:bg-indigo-50">
                                    <td className="py-4 font-medium text-gray-800">{member.name}</td>
                                    <td className="text-gray-600">{member.email}</td>
                                    <td className="text-center">
                                        <button
                                            onClick={() => handleRemoveRole(member.id)}
                                            className="btn btn-sm btn-error hover:btn-outline transition duration-300"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center py-6 text-gray-400 italic">
                                    No matching members found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default ManageMembers;
