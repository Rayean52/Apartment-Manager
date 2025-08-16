import { motion } from "framer-motion";
import { Link } from "react-router";

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto flex items-center justify-between px-6 py-4">
                    <h1 className="text-2xl font-bold text-gray-800">Apartment Management</h1>
                    <Link to="/">
                        <button className="btn btn-outline btn-sm md:btn-md rounded-xl">
                            🏠 Back to Home
                        </button>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-6 py-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white shadow-lg rounded-2xl p-8"
                >
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                        Terms & Conditions
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Please read these Terms and Conditions carefully before using our Apartment
                        Management system. By accessing or using the platform, you agree to be bound
                        by these terms.
                    </p>

                    {/* Sections */}
                    <div className="space-y-8">
                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                1. User Responsibilities
                            </h3>
                            <p className="text-gray-600">
                                Users must provide accurate information during registration and ensure
                                compliance with community rules. Misuse of the platform or false data
                                may result in account suspension.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">2. Payments</h3>
                            <p className="text-gray-600">
                                Rent payments, service charges, and other fees must be paid on time.
                                The platform may integrate with third-party payment providers. Users are
                                responsible for ensuring successful transactions.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">3. Privacy & Data</h3>
                            <p className="text-gray-600">
                                We value your privacy. Personal data collected will be used only for
                                apartment management purposes and will not be shared without consent,
                                except where required by law.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">4. Termination</h3>
                            <p className="text-gray-600">
                                We reserve the right to suspend or terminate accounts that violate these
                                Terms & Conditions without prior notice.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">5. Contact Us</h3>
                            <p className="text-gray-600">
                                For any questions regarding these terms, please contact us at:{" "}
                                <a
                                    href="mailto:support@apartmentmanager.com"
                                    className="text-blue-600 underline"
                                >
                                    support@apartmentmanager.com
                                </a>
                            </p>
                        </section>
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
