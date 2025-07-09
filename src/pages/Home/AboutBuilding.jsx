import { Card } from "flowbite-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const features = [
    {
        title: "Billing System for Members",
        description:
            "Automated billing, secure payments, and real-time tracking ensure a seamless experience for all residents.",
        img: "https://cdn-icons-png.flaticon.com/512/1906/1906420.png",
    },
    {
        title: "Convenient Living",
        description:
            "From smart access to service requests, convenience is built into every corner of this building.",
        img: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
    },
    {
        title: "Eco-Friendly Design",
        description:
            "Sustainable construction, solar power integration, and green spaces help reduce your carbon footprint.",
        img: "https://cdn-icons-png.flaticon.com/512/236/236831.png",
    },
    {
        title: "High-Speed Lifts",
        description:
            "Modern, fast, and secure elevators ensure smooth vertical movement throughout the building.",
        img: "https://cdn-icons-png.flaticon.com/512/846/846264.png",
    },
    {
        title: "50+ Modern Apartments",
        description:
            "Spacious, sunlit units with premium amenities designed for comfort and functionality.",
        img: "https://cdn-icons-png.flaticon.com/512/3176/3176297.png",
    },
    {
        title: "Private Playground",
        description:
            "A secure, fun, and clean play area where children can enjoy quality time safely.",
        img: "https://cdn-icons-png.flaticon.com/512/168/168177.png",
    },
    {
        title: "24/7 Security System",
        description:
            "Monitored entrances, smart surveillance, and secure access for complete peace of mind.",
        img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
    },
    {
        title: "Community Announcements",
        description:
            "Stay informed with notices, events, and member alerts through the internal dashboard.",
        img: "https://cdn-icons-png.flaticon.com/512/3138/3138755.png",
    },
];

const AboutBuilding = () => {
    return (
        <section className="bg-[radial-gradient(circle_at_10%_20%,rgba(129,230,217,0.15)_0%,transparent_40%)] py-24 px-6 md:px-12 lg:px-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto text-center"
            >
                {/* Gradient Title */}
                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                    About the Building
                </h2>

                {/* Bigger Description */}
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-14 font-light">
                    Our residential complex is thoughtfully designed to bring luxury, comfort, and community together. Whether you're a tenant or a managing member, you'll enjoy smart features, security, and convenience all under one roof.
                </p>

                {/* Feature Cards */}
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card
                                className="h-full rounded-2xl shadow-xl hover:shadow-2xl transition-all bg-gradient-to-br from-white via-[#e3e6eb] to-[#e0e8f0]"
                            >
                                <img
                                    src={feature.img}
                                    alt={feature.title}
                                    className="w-16 h-16 mx-auto mt-2"
                                />
                                <h3 className="text-xl font-semibold text-center mt-4 text-gray-800">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-600 text-center px-3 pb-4 font-light">
                                    {feature.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default AboutBuilding;
