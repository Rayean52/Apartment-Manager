import { motion } from "framer-motion";
import { Link } from "react-router";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Main Content */}
            <main className="flex-grow container mx-auto px-6 py-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white shadow-lg rounded-2xl p-8"
                >
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">Privacy Policy</h2>
                    <p className="text-gray-600 mb-8">
                        This Privacy Policy explains how Apartment Management collects, uses, and
                        safeguards your personal information when using our platform.
                    </p>

                    <div className="space-y-6">
                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">1. Information We Collect</h3>
                            <p className="text-gray-600">
                                We may collect personal information such as name, email, phone number,
                                and payment details when you use our services.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">2. How We Use Information</h3>
                            <p className="text-gray-600">
                                Your information is used to manage apartment services, process payments,
                                send notifications, and improve platform security.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">3. Data Protection</h3>
                            <p className="text-gray-600">
                                We implement encryption, secure authentication, and regular audits to
                                ensure your data remains safe from unauthorized access.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">4. Third-Party Services</h3>
                            <p className="text-gray-600">
                                We may use trusted third-party providers for payment and hosting. These
                                providers are obligated to protect your information.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">5. Contact</h3>
                            <p className="text-gray-600">
                                If you have questions about this Privacy Policy, please contact us at:{" "}
                                <a href="mailto:support@apartmentmanager.com" className="text-blue-600 underline">
                                    support@apartmentmanager.com
                                </a>
                            </p>
                        </section>
                    </div>

                    {/* Back Button */}
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
