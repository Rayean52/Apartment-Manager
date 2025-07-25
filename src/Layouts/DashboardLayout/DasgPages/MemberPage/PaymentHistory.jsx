import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import useAuth from "../../../../hooks/useAuth";

const PaymentHistory = () => {
    const { users } = useAuth();
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        AOS.init({ once: true });

        // TODO: Replace this with your actual API endpoint
        fetch(`https://apartment-manager-kappa.vercel.app/payments/${users?.email}`)
            .then((res) => res.json())
            .then((data) => setPayments(data || []))
            .catch((err) => console.error("Failed to fetch payments", err));
    }, [users]);

    return (
        <motion.div
            className="min-h-[80vh] px-4 md:px-10 py-10 relative bg-gradient-to-tr from-[#f0faff] via-[#ecf3ff] to-[#fdfbff]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Decorative blobs */}
            <div className="absolute -top-16 -left-16 w-60 h-60 bg-gradient-to-tr from-blue-300 via-purple-300 to-pink-300 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tr from-indigo-200 via-teal-300 to-sky-300 opacity-20 rounded-full blur-2xl animate-pulse z-0" />

            {/* Title Section */}
            <div className="text-center relative z-10 mb-12">
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-transparent bg-clip-text">
                    Payment History
                </h2>
                <p className="text-gray-600 mt-2 text-lg max-w-xl mx-auto">
                    Track your past rental payments in a clear and organized format.
                </p>
            </div>

            {/* Table */}
            <div
                className="overflow-x-auto relative z-10 bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-6"
                data-aos="fade-up"
            >
                <table className="table table-zebra w-full text-sm md:text-base">
                    <thead>
                        <tr className="text-left text-blue-700 font-semibold">
                            <th>Month</th>
                            <th>Amount (৳)</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.length > 0 ? (
                            payments.map((payment, index) => (
                                <tr key={index} className="hover:bg-blue-50 transition">
                                    <td>{payment.month}</td>
                                    <td>{payment.finalAmount}</td>
                                    <td>{new Date(payment.paymentDate).toLocaleDateString()}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center text-gray-500 py-4">
                                    No payment history found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default PaymentHistory;
