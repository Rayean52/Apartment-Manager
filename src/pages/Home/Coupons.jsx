import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaTags } from "react-icons/fa";

const CouponSection = () => {
    const [coupons, setCoupons] = useState([]);

    useEffect(() => {
        fetch("https://apartment-manager-kappa.vercel.app/coupons")
            .then((res) => res.json())
            .then((data) => setCoupons(data))
            .catch((err) => console.error("Error fetching coupons:", err));
    }, []);

    // const coupons = [
    //     {
    //         id: 1,
    //         title: "50% OFF",
    //         description: "Save big on your first month’s rent!",
    //         discount: 50,
    //         code: "FIRST50",
    //         image: "https://i.ibb.co.com/1fft8SKK/confetti-7877440.png"
    //     },
    //     {
    //         id: 2,
    //         title: "BIG SALE",
    //         description: "Enjoy exclusive discounts on maintenance charges.",
    //         discount: 30,
    //         code: "MAINT30",
    //         image: "https://i.ibb.co.com/pj4WpRsN/drinks-661024.png"
    //     },
    //     {
    //         id: 3,
    //         title: "SPECIAL OFFER",
    //         description: "Get instant savings on yearly rent payment.",
    //         discount: 20,
    //         code: "YEARLY20",
    //         image: "https://i.ibb.co.com/ZzTJxyDd/champagne-3755603.png"
    //     }
    // ];

    const handleClick = () => {
        toast("Code Copied Successfully")
    }

    return (
        <section className="py-16 px-6 md:px-20 bg-[radial-gradient(circle_at_10%_20%,rgba(129,230,217,0.15)_0%,transparent_40%)] ">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-left mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800 flex items-center gap-2">
                        <FaTags className="text-green-600" />
                        Active Coupons
                    </h2>
                    <p className="text-gray-600 mt-3 max-w-2xl">
                        Use these discount coupons while paying your rent. Save more with every payment and enjoy exclusive offers tailored just for our residents!
                    </p>
                </div>

                {/* Coupons */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coupons.map((coupon) => (
                        <div
                            key={coupon.id}
                            className="relative bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                        >
                            {/* Image */}
                            <div className="h-40 w-full flex items-center justify-center bg-gray-100">
                                <img
                                    src={coupon.image}
                                    alt={coupon.title}
                                    className="h-28 object-contain"
                                />
                            </div>

                            {/* Text */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800">{coupon.title}</h3>
                                <p className="text-gray-600 text-sm mt-2">{coupon.description}</p>
                                <p className="mt-3 text-gray-700 font-medium">
                                    Save <span className="font-extrabold text-green-600">{coupon.discount}%</span>
                                </p>

                                {/* Coupon Code */}
                                <div className="mt-5 flex justify-between items-center">
                                    <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full uppercase font-semibold">
                                        {coupon.code}
                                    </span>
                                    <button
                                        onClick={handleClick}
                                        className="bg-green-600 hover:cursor-pointer text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
                                    >
                                        Copy
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </section>
    );
};

export default CouponSection;
