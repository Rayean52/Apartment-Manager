import { motion } from "framer-motion";
import { Link } from "react-router";

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            {/* <header className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto flex items-center justify-between px-6 py-4">
                    <h1 className="text-2xl font-bold text-gray-800">Apartment Management</h1>
                    <Link to="/">
                        <button className="btn btn-outline btn-sm md:btn-md rounded-xl">
                            🏠 Back to Home
                        </button>
                    </Link>
                </div>
            </header> */}

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-6 py-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white shadow-lg rounded-2xl p-8"
                >
                    {/* Hero / Intro */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">About Us</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Welcome to <span className="font-semibold">Apartment Management</span> —
                            your trusted platform for managing apartments, payments, and tenant
                            interactions with ease. Our goal is to simplify community living by
                            offering modern digital solutions.
                        </p>
                    </div>

                    {/* Sections */}
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-gradient-to-r from-primary/10 to-secondary/10 shadow-md rounded-xl p-6"
                        >
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
                            <p className="text-gray-600">
                                To create a seamless, transparent, and efficient system that empowers
                                property owners, tenants, and administrators.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-gradient-to-r from-green-100 to-green-50 shadow-md rounded-xl p-6"
                        >
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h3>
                            <p className="text-gray-600">
                                To be the leading platform for apartment and community management across
                                the globe.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-gradient-to-r from-blue-100 to-blue-50 shadow-md rounded-xl p-6"
                        >
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Values</h3>
                            <p className="text-gray-600">
                                Integrity, transparency, reliability, and user-first innovation are at
                                the core of everything we do.
                            </p>
                        </motion.div>
                    </div>

                    {/* Team / Work Section */}
                    <div className="mt-12 text-center">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">What We Do</h3>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We provide tools for property owners to list apartments, tenants to manage
                            their rental agreements, and administrators to handle payments, notices,
                            and community announcements. Our system makes apartment living more
                            convenient for everyone.
                        </p>
                    </div>

                    {/* Back Button at Bottom */}
                    <div className="mt-10 flex justify-center">
                        <Link to="/">
                            <button className="btn btn-primary px-6 rounded-xl shadow-md">
                                🏠 Back to Home
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
                <div className="container mx-auto text-center text-sm">
                    © {new Date().getFullYear()} Apartment Management. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
