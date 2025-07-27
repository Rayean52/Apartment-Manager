import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-100 to-gray-200 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl text-center space-y-6"
      >
        <img
          src="https://i.ibb.co/wZQ1qTBX/error-Image.jpg"
          alt="Error Illustration"
          className="w-full max-w-md mx-auto"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-600 text-lg">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="inline-block">
          <button className="px-6 py-3 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-lg text-lg font-semibold shadow-md hover:opacity-90 transition-all">
            Back to Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
