// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import AOS from "aos";
import { useEffect, useState } from "react";


const UserAnnouncements = () => {

    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        AOS.init({ once: true });

        fetch("https://apartment-manager-kappa.vercel.app/announcements")
            .then(res => res.json())
            .then(data => setAnnouncements(data || []))
            .catch(err => console.error("Failed to load announcements", err));
    }, []);



    
    return (
        <motion.section
            className="min-h-[85vh] px-6 py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 flex flex-col justify-start"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Page Title */}
            <div className="max-w-5xl mx-auto mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-3">
                    🛎️ Announcements
                </h1>
                <p className="text-gray-700 text-lg">
                    Stay updated with the latest notices and announcements from the building administration.
                </p>
            </div>

            {/* Announcements List */}
            <div className="max-w-5xl mx-auto space-y-10">
                {announcements.map((announcement, index) => (
                    <div
                        key={index}
                        className="bg-white/80 backdrop-blur-md border border-white/30 rounded-xl shadow-md p-6 transition hover:shadow-xl"
                        data-aos="fade-up"
                    >
                        <h2 className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                            {announcement.title}
                        </h2>
                        <p className="text-gray-600 text-sm mb-4 italic">
                            📅 {new Date(announcement.createdAt).toLocaleDateString()}
                        </p>
                        <p className="text-gray-800 text-base leading-relaxed">
                            {announcement.description}
                        </p>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default UserAnnouncements;
