import { Card } from "flowbite-react";
import { useState } from "react";

const features = [
    {
        title: "Smart Billing System",
        description:
            "Automated billing with secure payment processing, real-time tracking, and transparent financial management for all residents.",
        img: "https://cdn-icons-png.flaticon.com/512/1906/1906420.png",
        gradient: "from-blue-500 to-cyan-500",
        bgGradient: "from-blue-50 to-cyan-50",
        iconBg: "bg-blue-100",
        stats: "99.9% Uptime"
    },
    {
        title: "Premium Comfort",
        description:
            "Smart access controls, 24/7 concierge services, and instant maintenance requests create an unparalleled living experience.",
        img: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
        gradient: "from-purple-500 to-pink-500",
        bgGradient: "from-purple-50 to-pink-50",
        iconBg: "bg-purple-100",
        stats: "24/7 Service"
    },
    {
        title: "Sustainable Living",
        description:
            "LEED-certified construction with solar integration, rainwater harvesting, and energy-efficient systems reducing environmental impact by 40%.",
        img: "https://cdn-icons-png.flaticon.com/512/236/236831.png",
        gradient: "from-green-500 to-emerald-500",
        bgGradient: "from-green-50 to-emerald-50",
        iconBg: "bg-green-100",
        stats: "40% Energy Savings"
    },
    {
        title: "High-Speed Transit",
        description:
            "German-engineered elevators with destination control, smart scheduling, and emergency backup systems ensuring rapid vertical mobility.",
        img: "https://cdn-icons-png.flaticon.com/512/846/846264.png",
        gradient: "from-orange-500 to-red-500",
        bgGradient: "from-orange-50 to-red-50",
        iconBg: "bg-orange-100",
        stats: "3.5m/s Speed"
    }
];

const AboutBuilding = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 mb-6 shadow-sm">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                        Premium Residential Complex
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
                        Redefining Modern
                        <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Urban Living
                        </span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed font-light">
                        Experience the perfect fusion of luxury, technology, and sustainability in our
                        <span className="font-medium text-gray-800"> award-winning residential complex</span>.
                        Every detail is crafted to elevate your lifestyle.
                    </p>

                    {/* Stats Bar */}
                    <div className="flex flex-wrap justify-center gap-8 mt-12 mb-16">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-gray-800">500+</div>
                            <div className="text-sm text-gray-600 uppercase tracking-wide">Residents</div>
                        </div>
                        <div className="w-px h-12 bg-gray-300"></div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-gray-800">15</div>
                            <div className="text-sm text-gray-600 uppercase tracking-wide">Floors</div>
                        </div>
                        <div className="w-px h-12 bg-gray-300"></div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-gray-800">24/7</div>
                            <div className="text-sm text-gray-600 uppercase tracking-wide">Security</div>
                        </div>
                        <div className="w-px h-12 bg-gray-300"></div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-gray-800">LEED</div>
                            <div className="text-sm text-gray-600 uppercase tracking-wide">Certified</div>
                        </div>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group relative"
                            onMouseEnter={() => setHoveredCard(idx)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Card */}
                            <Card className={`
                                h-full relative overflow-hidden border-0 shadow-lg hover:shadow-2xl 
                                transition-all duration-500 transform hover:-translate-y-2
                                bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm
                                ${hoveredCard === idx ? 'ring-2 ring-white ring-opacity-60' : ''}
                            `}>
                                {/* Background Pattern */}
                                <div className="absolute inset-0 bg-white bg-opacity-60"></div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-transparent opacity-20 rounded-full -translate-y-16 translate-x-16"></div>

                                {/* Content */}
                                <div className="relative z-10 p-8 text-center h-full flex flex-col">
                                    {/* Icon Container */}
                                    <div className={`
                                        w-20 h-20 mx-auto mb-6 rounded-2xl ${feature.iconBg} 
                                        flex items-center justify-center relative overflow-hidden
                                        group-hover:scale-110 transition-transform duration-300
                                    `}>
                                        <div className={`
                                            absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 
                                            group-hover:opacity-20 transition-opacity duration-300
                                        `}></div>
                                        <img
                                            src={feature.img}
                                            alt={feature.title}
                                            className="w-10 h-10 relative z-10"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                        {feature.description}
                                    </p>

                                    {/* Stats Badge */}
                                    <div className={`
                                        inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium
                                        bg-gradient-to-r ${feature.gradient} text-white shadow-lg
                                        transform transition-all duration-300
                                        ${hoveredCard === idx ? 'scale-105' : ''}
                                    `}>
                                        <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse"></span>
                                        {feature.stats}
                                    </div>
                                </div>

                                {/* Hover Effect Overlay */}
                                <div className={`
                                    absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 
                                    group-hover:opacity-5 transition-opacity duration-500
                                `}></div>
                            </Card>

                            {/* Floating Glow Effect */}
                            <div className={`
                                absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 
                                group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10
                                transform scale-105
                            `}></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="text-center mt-20">
                    <div className="inline-flex items-center space-x-6">
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-24"></div>
                        <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                            Experience Excellence
                        </span>
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-24"></div>
                    </div>
                </div>
            </div>

            {/* Custom Styles for Animation Delays */}
            <style jsx>{`
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </section>
    );
};

export default AboutBuilding;