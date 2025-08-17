import { motion } from "framer-motion";
import { Mail, Send, Bell, Gift } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const benefits = [
        {
            icon: <Bell className="w-5 h-5" />,
            text: "Priority notifications",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: <Gift className="w-5 h-5" />,
            text: "Exclusive offers & discounts",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: <Mail className="w-5 h-5" />,
            text: "Weekly community updates",
            gradient: "from-green-500 to-emerald-500"
        }
    ];

    return (
        <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Header */}
                        <div>
                            <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 mb-6 shadow-sm">
                                <Mail className="w-4 h-4 mr-2 text-blue-600" />
                                Newsletter Subscription
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                Stay in the
                                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Loop
                                </span>
                            </h2>

                            <p className="text-xl text-gray-700 leading-relaxed">
                                Be the first to know about new apartment listings, exclusive community events,
                                maintenance updates, and special resident perks delivered straight to your inbox.
                            </p>
                        </div>

                        {/* Benefits */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">What you'll receive:</h3>
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                    className="flex items-center space-x-4"
                                >
                                    <div className={`
                                        w-10 h-10 rounded-lg bg-gradient-to-r ${benefit.gradient} 
                                        flex items-center justify-center text-white shadow-lg
                                    `}>
                                        {benefit.icon}
                                    </div>
                                    <span className="text-gray-700 font-medium">{benefit.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="flex items-center space-x-8 pt-6 border-t border-gray-300">
                            <div>
                                <div className="text-2xl font-bold text-gray-900">2,500+</div>
                                <div className="text-sm text-gray-600">Active subscribers</div>
                            </div>
                            <div className="w-px h-12 bg-gray-300"></div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">Weekly</div>
                                <div className="text-sm text-gray-600">Updates</div>
                            </div>
                            <div className="w-px h-12 bg-gray-300"></div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">100%</div>
                                <div className="text-sm text-gray-600">Privacy protected</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Glow Effect */}
                        <div className={`
                            absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl opacity-0 
                            ${isHovered ? 'opacity-20' : ''} blur-xl transition-opacity duration-500 -z-10
                            transform scale-105
                        `}></div>

                        <form
                            onSubmit={handleSubmit}
                            className={`
                                bg-white border border-gray-200 
                                rounded-3xl p-8 space-y-6 shadow-xl transition-all duration-500
                                ${isHovered ? 'transform -translate-y-1 shadow-2xl' : ''}
                            `}
                        >
                            {!isSubmitted ? (
                                <>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your full name"
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Message (Optional)</label>
                                        <textarea
                                            placeholder="Any specific interests or questions?"
                                            rows="4"
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                                    >
                                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                        <span>Subscribe Now</span>
                                    </button>

                                    <p className="text-xs text-gray-500 text-center">
                                        We respect your privacy. Unsubscribe at any time.
                                    </p>
                                </>
                            ) : (
                                <div className="text-center py-8">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", duration: 0.6 }}
                                        className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"
                                    >
                                        <Mail className="w-8 h-8 text-white" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                                    <p className="text-gray-600">
                                        You've successfully subscribed to our newsletter.
                                        Check your inbox for a welcome message!
                                    </p>
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Custom Styles for Animation Delays */}
            <style jsx>{`
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
            `}</style>
        </section>
    );
}