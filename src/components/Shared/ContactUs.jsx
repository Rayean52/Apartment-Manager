import { motion } from "framer-motion";
import { Link } from "react-router";

export default function ContactUs() {
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
                    {/* Intro */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Have questions, feedback, or need support? We’d love to hear from you.
                            Please fill out the form below or reach us through our contact details.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Contact Form */}
                        <form className="space-y-5">
                            <div>
                                <label className="block text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your full name"
                                    className="input input-bordered w-full rounded-lg"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="input input-bordered w-full rounded-lg"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">Subject</label>
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="input input-bordered w-full rounded-lg"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">Message</label>
                                <textarea
                                    placeholder="Write your message..."
                                    className="textarea textarea-bordered w-full rounded-lg h-32"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-full rounded-xl">
                                📩 Send Message
                            </button>
                        </form>

                        {/* Contact Info */}
                        <div className="space-y-6 text-gray-700">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Our Office</h3>
                                <p>Apartment Management HQ</p>
                                <p>123 Main Street, Dhaka, Bangladesh</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Email</h3>
                                <a
                                    href="mailto:support@apartmentmanager.com"
                                    className="text-blue-600 underline"
                                >
                                    support@apartmentmanager.com
                                </a>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Phone</h3>
                                <p>+880 1234 567 890</p>
                            </div>
                        </div>
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
