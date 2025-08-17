import { motion } from "framer-motion";
import { Home, CreditCard, Wrench, Megaphone, Users, Ticket } from "lucide-react";

export default function Services() {
    const services = [
        {
            icon: <Home className="w-10 h-10 text-indigo-600" />,
            title: "Apartment Listings",
            desc: "Browse and explore available apartments with detailed information including floor, block, rent, and amenities.",
        },
        {
            icon: <CreditCard className="w-10 h-10 text-indigo-600" />,
            title: "Online Rent Payment",
            desc: "Pay your rent securely online with multiple payment methods and track your payment history with ease.",
        },
        {
            icon: <Wrench className="w-10 h-10 text-indigo-600" />,
            title: "Maintenance Requests",
            desc: "Easily submit repair or maintenance requests and track their status directly through your dashboard.",
        },
        {
            icon: <Megaphone className="w-10 h-10 text-indigo-600" />,
            title: "Community Announcements",
            desc: "Stay updated with important news, notices, and community announcements from the management team.",
        },
        {
            icon: <Users className="w-10 h-10 text-indigo-600" />,
            title: "Member Dashboard",
            desc: "Access a personalized dashboard to manage your agreements, payments, and apartment details efficiently.",
        },
        {
            icon: <Ticket className="w-10 h-10 text-indigo-600" />,
            title: "Coupon Management",
            desc: "Enjoy special discounts and offers with our built-in coupon system, making rent payments more affordable.",
        },
    ];

    return (
        <section className="bg-gray-50 py-16 px-6">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-gray-900"
                >
                    Our Services
                </motion.h2>
                <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                    We provide a wide range of features to simplify apartment management,
                    ensuring a hassle-free experience for both tenants and administrators.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left"
                    >
                        <div className="mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {service.title}
                        </h3>
                        <p className="text-gray-600">{service.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
