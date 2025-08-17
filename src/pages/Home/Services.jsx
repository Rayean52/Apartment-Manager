import { motion } from "framer-motion";
import { Home, CreditCard, Wrench, Megaphone, Users, Ticket } from "lucide-react";
import { useState } from "react";

export default function Services() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const services = [
        {
            icon: <Home className="w-8 h-8" />,
            title: "Smart Apartment Listings",
            desc: "Browse premium apartments with virtual tours, detailed floor plans, 3D views, and comprehensive amenity information at your fingertips.",
            gradient: "from-blue-500 to-cyan-500",
            bgGradient: "from-blue-50 to-cyan-50",
            iconBg: "bg-blue-100",
            feature: "Virtual Tours"
        },
        {
            icon: <CreditCard className="w-8 h-8" />,
            title: "Secure Payment Gateway",
            desc: "Multiple payment methods with bank-grade security, automated receipts, payment reminders, and comprehensive transaction history.",
            gradient: "from-green-500 to-emerald-500",
            bgGradient: "from-green-50 to-emerald-50",
            iconBg: "bg-green-100",
            feature: "SSL Encrypted"
        },
        {
            icon: <Wrench className="w-8 h-8" />,
            title: "24/7 Maintenance Hub",
            desc: "Priority ticket system with real-time tracking, photo uploads, emergency requests, and professional technician scheduling.",
            gradient: "from-orange-500 to-red-500",
            bgGradient: "from-orange-50 to-red-50",
            iconBg: "bg-orange-100",
            feature: "Emergency Support"
        },
        {
            icon: <Megaphone className="w-8 h-8" />,
            title: "Community Connect",
            desc: "Instant notifications, event calendar, emergency alerts, community polls, and neighborhood news in one centralized platform.",
            gradient: "from-purple-500 to-pink-500",
            bgGradient: "from-purple-50 to-pink-50",
            iconBg: "bg-purple-100",
            feature: "Push Notifications"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Personalized Dashboard",
            desc: "Intuitive interface with lease management, payment tracking, document storage, and personalized insights for effortless living.",
            gradient: "from-indigo-500 to-blue-500",
            bgGradient: "from-indigo-50 to-blue-50",
            iconBg: "bg-indigo-100",
            feature: "AI Insights"
        },
        {
            icon: <Ticket className="w-8 h-8" />,
            title: "Rewards & Savings",
            desc: "Exclusive resident discounts, loyalty points, seasonal offers, referral bonuses, and smart spending analytics to maximize value.",
            gradient: "from-pink-500 to-rose-500",
            bgGradient: "from-pink-50 to-rose-50",
            iconBg: "bg-pink-100",
            feature: "Up to 15% Off"
        },
    ];

    return (
        <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute top-20 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
            <div className="absolute bottom-20 left-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 mb-6 shadow-sm">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                        Digital Solutions
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6"
                    >
                        Comprehensive Living
                        <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Solutions
                        </span>
                    </motion.h2>

                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Experience seamless apartment management with our integrated digital platform,
                        designed to enhance every aspect of modern residential living.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative"
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Card */}
                            <div className={`
                                bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl 
                                transition-all duration-500 transform hover:-translate-y-1
                                border border-gray-100 relative overflow-hidden h-full
                                ${hoveredCard === index ? 'ring-2 ring-blue-100' : ''}
                            `}>
                                {/* Background Accent */}
                                <div className={`
                                    absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.bgGradient} 
                                    rounded-full -translate-y-12 translate-x-12 opacity-60
                                    group-hover:scale-150 transition-transform duration-500
                                `}></div>

                                {/* Icon Container */}
                                <div className={`
                                    relative z-10 w-16 h-16 ${service.iconBg} rounded-xl 
                                    flex items-center justify-center mb-6 
                                    group-hover:scale-110 transition-all duration-300
                                    shadow-sm group-hover:shadow-md
                                `}>
                                    <div className={`
                                        text-gray-700 group-hover:text-white transition-colors duration-300
                                        relative z-10
                                    `}>
                                        {service.icon}
                                    </div>
                                    {/* Hover Gradient Overlay */}
                                    <div className={`
                                        absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 
                                        group-hover:opacity-100 transition-opacity duration-300 rounded-xl
                                    `}></div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                                            {service.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                                        {service.desc}
                                    </p>

                                    {/* Feature Badge */}
                                    <div className={`
                                        inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold
                                        bg-gradient-to-r ${service.gradient} text-white shadow-sm
                                        transform transition-all duration-300
                                        ${hoveredCard === index ? 'scale-105 shadow-md' : ''}
                                    `}>
                                        <span className="w-1.5 h-1.5 bg-white bg-opacity-80 rounded-full mr-2"></span>
                                        {service.feature}
                                    </div>
                                </div>

                                {/* Subtle Hover Glow */}
                                <div className={`
                                    absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 
                                    group-hover:opacity-5 transition-opacity duration-500 rounded-2xl
                                `}></div>
                            </div>

                            {/* External Glow Effect */}
                            <div className={`
                                absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 
                                group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10
                                transform scale-105
                            `}></div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center space-x-6">
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-20"></div>
                        <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                            Powered by Technology
                        </span>
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}