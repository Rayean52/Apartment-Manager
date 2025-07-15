/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";

const MakePayment = () => {
    const { users } = useAuth();

    const agreementInfo = {
        email: users?.email,
        floor: "5th Floor",
        block: "B",
        apartment: "B-502",
        rent: 15000,
    };

    const [couponCode, setCouponCode] = useState("");
    const [finalRent, setFinalRent] = useState(agreementInfo.rent);
    const [isCouponApplied, setIsCouponApplied] = useState(false);
    const [month, setMonth] = useState("");

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    const handleApplyCoupon = async () => {
        try {
            const res = await fetch(`http://localhost:3000/coupons/${couponCode}`);
            if (!res.ok) throw new Error("Invalid coupon");

            const coupon = await res.json();
            const discount = (agreementInfo.rent * coupon.percentage) / 100;
            const newRent = agreementInfo.rent - discount;

            setFinalRent(newRent);
            setIsCouponApplied(true);
            toast.success(`Coupon applied! You saved ${discount}৳`);
        } catch (err) {
            toast.error("Invalid or expired coupon");
            setFinalRent(agreementInfo.rent);
            setIsCouponApplied(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!month) {
            toast.error("Please select a month");
            return;
        }

        toast.success("Redirecting to payment...");
        console.log({
            ...agreementInfo,
            month,
            finalAmount: finalRent,
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen px-4 py-10 relative bg-gradient-to-tr from-[#f0faff] via-[#ecf3ff] to-[#fdfbff]"
        >
            {/* Decorative Blobs */}
            <div className="absolute -top-16 -left-16 w-60 h-60 bg-gradient-to-tr from-blue-300 via-purple-300 to-pink-300 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tr from-indigo-200 via-teal-300 to-sky-300 opacity-20 rounded-full blur-2xl animate-pulse z-0" />

            {/* Header */}
            <div className="text-center relative z-10 mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text">
                    Make Your Rent Payment
                </h2>
                <p className="text-gray-600 mt-2 text-lg max-w-xl mx-auto">
                    Secure your apartment with an easy payment process. Apply coupons to save your cost!
                </p>
            </div>

            {/* Form Card */}
            <form
                onSubmit={handleSubmit}
                data-aos="fade-up"
                className="relative z-10 bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto space-y-6 text-gray-800"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Email" value={agreementInfo.email} />
                    <Input label="Floor" value={agreementInfo.floor} />
                    <Input label="Block" value={agreementInfo.block} />
                    <Input label="Apartment No" value={agreementInfo.apartment} />
                    <Input label="Rent (৳)" value={agreementInfo.rent + "৳"} />
                    <div>
                        <label className="label font-semibold">Select Month</label>
                        <select
                            className="select select-bordered w-full"
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                            required
                        >
                            <option disabled value="">Choose Month</option>
                            {["January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"].map((m) => (
                                    <option key={m} value={m}>{m}</option>
                                ))}
                        </select>
                    </div>
                </div>

                {/* Coupon Field */}
                <div className="mt-6">
                    <label className="label font-semibold text-base">Apply Coupon</label>
                    <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
                        <input
                            type="text"
                            className="input input-bordered w-full md:w-1/2"
                            placeholder="Enter coupon code"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-outline btn-accent"
                            onClick={handleApplyCoupon}
                            disabled={!couponCode || isCouponApplied}
                        >
                            Apply
                        </button>
                    </div>
                    {isCouponApplied && (
                        <p className="text-green-600 font-semibold mt-2">
                            ✅ New Rent: {finalRent}৳
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <div className="text-center mt-6">
                    <button className="btn btn-primary btn-wide text-lg shadow-lg">
                        Proceed to Payment
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

// Reusable input field
const Input = ({ label, value }) => (
    <div>
        <label className="label font-semibold text-base">{label}</label>
        <input
            type="text"
            className="input input-bordered w-full bg-gray-50"
            value={value}
            readOnly
        />
    </div>
);

export default MakePayment;
