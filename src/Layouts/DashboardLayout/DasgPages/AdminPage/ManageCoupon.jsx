/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";

const initialCoupons = [
    {
        code: "JULY25",
        discount: 25,
        description: "25% off for July rent",
    },
    {
        code: "WELCOME10",
        discount: 10,
        description: "10% discount for first-time payment",
    },
];

const ManageCoupons = () => {
    const [coupons, setCoupons] = useState(initialCoupons);
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        code: "",
        discount: "",
        description: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddCoupon = () => {
        setCoupons([...coupons, formData]);
        setFormData({ code: "", discount: "", description: "" });
        setIsOpen(false);

        // TODO: Send to backend via POST
    };

    return (
        <motion.div
            className="min-h-screen px-4 md:px-10 py-12 bg-gradient-to-br from-[#fff1f2] via-[#f8fbff] to-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                        Manage Coupons
                    </h2>
                    <p className="text-gray-600 mt-1">View and create discount coupons.</p>
                </div>
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 flex items-center gap-2"
                >
                    <PlusIcon className="w-5 h-5" />
                    Add Coupon
                </button>
            </div>

            <div className="overflow-x-auto bg-white/80 rounded-xl shadow-lg backdrop-blur border border-white/30">
                <table className="table w-full">
                    <thead className="bg-purple-100 text-gray-700">
                        <tr>
                            <th>Coupon Code</th>
                            <th>Discount (%)</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coupons.map((coupon, i) => (
                            <tr key={i} className="hover:bg-purple-50 transition">
                                <td className="font-semibold">{coupon.code}</td>
                                <td>{coupon.discount}%</td>
                                <td>{coupon.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="w-full max-w-md rounded-xl bg-white shadow-lg p-6 space-y-4 relative">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                        <Dialog.Title className="text-2xl font-bold text-purple-700">
                            Add New Coupon
                        </Dialog.Title>

                        <div className="space-y-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Coupon Code</label>
                                <input
                                    type="text"
                                    name="code"
                                    value={formData.code}
                                    onChange={handleInputChange}
                                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Discount %</label>
                                <input
                                    type="number"
                                    name="discount"
                                    value={formData.discount}
                                    onChange={handleInputChange}
                                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    name="description"
                                    rows="3"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />
                            </div>
                            <button
                                onClick={handleAddCoupon}
                                className="w-full mt-3 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                            >
                                Submit Coupon
                            </button>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </motion.div>
    );
};

export default ManageCoupons;
