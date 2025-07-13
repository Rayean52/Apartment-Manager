// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import AOS from "aos";
import { useEffect } from "react";


const UserAnnouncements = () => {

    useEffect(() => {
        AOS.init({ once: true });
    }, []);



    const dummyAnnouncements = [
        {
            title: "Important Water Maintenance Notice",
            content:
                "Due to scheduled maintenance, the water supply will be interrupted from 10:00 AM to 2:00 PM on Thursday. Please store necessary water beforehand. We apologize for the inconvenience and appreciate your cooperation.",
            date: "July 10, 2025",
        },
        {
            title: "Playground Renovation in Progress",
            content:
                "The apartment playground area is under renovation for the next 7 days. We are upgrading flooring, safety nets, and installing new play equipment. Children are advised not to enter the site for safety reasons.",
            date: "July 8, 2025",
        },
        {
            title: "Monthly Fire Drill Reminder",
            content:
                "A fire drill will take place on July 12 at 11:00 AM. All residents must participate and evacuate as instructed. Please do not use elevators. Your safety is our priority.",
            date: "July 7, 2025",
        },
    ];

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
                {dummyAnnouncements.map((announcement, index) => (
                    <div
                        key={index}
                        className="bg-white/80 backdrop-blur-md border border-white/30 rounded-xl shadow-md p-6 transition hover:shadow-xl"
                        data-aos="fade-up"
                    >
                        <h2 className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                            {announcement.title}
                        </h2>
                        <p className="text-gray-600 text-sm mb-4 italic">
                            📅 {announcement.date}
                        </p>
                        <p className="text-gray-800 text-base leading-relaxed">
                            {announcement.content}
                        </p>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default UserAnnouncements;
