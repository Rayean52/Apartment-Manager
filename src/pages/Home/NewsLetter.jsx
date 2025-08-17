import { motion } from "framer-motion";
import { Mail } from "lucide-react"; // nice mail icon

export default function Newsletter() {
    return (
        <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-5"
                >
                    <div className="flex items-center gap-3">
                        <Mail className="w-10 h-10 text-indigo-600" />
                        <h2 className="text-3xl font-bold text-gray-900">
                            Stay Connected
                        </h2>
                    </div>
                    <p className="text-gray-700 text-lg">
                        Join our newsletter to receive the latest updates about apartment
                        listings, announcements, and community events. Don’t miss out on
                        important news!
                    </p>
                </motion.div>

                {/* Right Side (Form) */}
                <motion.form
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("✅ Message submitted successfully!");
                    }}
                    className="bg-white shadow-lg rounded-2xl p-8 space-y-5"
                >
                    <div>
                        <label className="block text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Your full name"
                            className="input input-bordered w-full rounded-xl"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="input input-bordered w-full rounded-xl"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Message</label>
                        <textarea
                            placeholder="Write your message..."
                            className="textarea textarea-bordered w-full rounded-xl h-28"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-full rounded-xl">
                        📩 Subscribe
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
