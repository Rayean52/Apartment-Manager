import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MakeAnnouncement = () => {
    const [form, setForm] = useState({ title: "", description: "" });

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("https://apartment-manager-kappa.vercel.app/announcements", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (res.ok && data.insertedId) {
                alert("✅ Announcement posted!");
                setForm({ title: "", description: "" });
            } else {
                alert("❌ Failed to post announcement. Please try again.");
                console.error(data.message);
            }
        } catch (err) {
            console.error("Error submitting announcement:", err);
            alert("🚫 Server error. Please try again later.");
        }
    };


    return (
        <motion.div
            className="min-h-[80vh] px-4 md:px-10 py-12 bg-gradient-to-br from-[#fef6fb] via-[#f0f9ff] to-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    Make an Announcement
                </h2>
                <p className="text-gray-600 mt-2 max-w-xl mx-auto text-lg">
                    Post important updates for your community such as rent deadlines, maintenance notices, or events.
                </p>
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto bg-white/80 backdrop-blur-xl rounded-xl shadow-xl p-8 space-y-6"
                data-aos="fade-up"
            >
                {/* Title */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Title</label>
                    <input
                        type="text"
                        required
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                        placeholder="e.g., Maintenance Notice"
                        className="input input-bordered w-full shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Description</label>
                    <textarea
                        required
                        rows={6}
                        value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                        placeholder="Write detailed announcement..."
                        className="textarea textarea-bordered w-full shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="btn bg-purple-600 text-white hover:bg-purple-700 transition px-8"
                    >
                        Post Announcement
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

export default MakeAnnouncement;
