import { useEffect, useState } from "react";
import { FaTags } from "react-icons/fa";

const CouponSection = () => {
    const [coupons, setCoupons] = useState([]);

    useEffect(() => {
        fetch("https://your-api-url.com/coupons") // Replace with your actual API
            .then((res) => res.json())
            .then((data) => setCoupons(data));
    }, []);

    return (
        <section className="bg-gradient-to-br from-purple-100 via-white to-purple-50 py-16 px-6 md:px-20">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-purple-700 mb-4 flex justify-center items-center gap-2">
                    <FaTags className="text-purple-500" />
                    Active Coupons
                </h2>
                <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                    Use these discount coupons while paying your rent. Save more with every payment!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {coupons.length > 0 ? (
                        coupons.map((coupon) => (
                            <div
                                key={coupon._id}
                                className="bg-white rounded-xl border border-purple-200 shadow-md p-6 hover:shadow-xl transition duration-300 relative"
                            >
                                <span className="absolute top-3 right-3 bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                                    {coupon.code}
                                </span>

                                <h3 className="text-xl font-semibold text-purple-700 mb-2">
                                    {coupon.description}
                                </h3>
                                <p className="text-gray-500 text-sm mb-3">
                                    Save <span className="font-bold">{coupon.discount}%</span> on your payment
                                </p>
                                <div className="mt-4">
                                    <button
                                        onClick={() => navigator.clipboard.writeText(coupon.code)}
                                        className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition"
                                    >
                                        Copy Code
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 col-span-full">No coupons available at the moment.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CouponSection;
