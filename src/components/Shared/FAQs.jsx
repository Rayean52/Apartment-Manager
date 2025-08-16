import { motion } from "framer-motion";
import { Link } from "react-router";

export default function FAQs() {
    const faqData = [
        {
            q: "How do I register as a tenant?",
            a: "Click on the sign-up button, provide your personal details, and verify your email to complete registration."
        },
        {
            q: "Can I pay my rent online?",
            a: "Yes, our system integrates secure payment gateways to allow online rent payments."
        },
        {
            q: "What should I do if I forget my password?",
            a: "Use the 'Forgot Password' option on the login page to reset your password via email verification."
        },
        {
            q: "Is my data safe?",
            a: "Absolutely. We use industry-standard encryption and secure authentication to protect your data."
        },
        {
            q: "Can I manage multiple apartments with one account?",
            a: "Yes, property owners can manage multiple apartments under one account."
        },
    ];

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
                    <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>

                    <div className="space-y-6">
                        {faqData.map((item, index) => (
                            <div key={index} className="collapse collapse-plus border border-gray-200 rounded-lg">
                                <input type="checkbox" />
                                <div className="collapse-title text-lg font-medium text-gray-800">
                                    {item.q}
                                </div>
                                <div className="collapse-content text-gray-600">
                                    <p>{item.a}</p>
                                </div>
                            </div>
                        ))}
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
