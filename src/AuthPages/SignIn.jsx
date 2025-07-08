import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Label,
  TextInput,
  Toast,
} from "flowbite-react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { motion } from "framer-motion";

export default function SigninPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log("Sign In Data:", data);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-signin-green-gradient">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col md:flex-row w-full max-w-6xl rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-md"
      >
        {/* Left: Sign-In Form */}
        <div className="w-full md:w-1/2 p-8 bg-white/30">
          <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-700">
            Sign In
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div>
              <Label htmlFor="email" value="Email" />
              <TextInput
                id="email"
                type="email"
                placeholder="you@example.com"
                className="input-glow"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password" value="Password" />
              <div className="relative">
                <TextInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="input-glow pr-10"
                  {...register("password", { required: "Password is required" })}
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-2.5 text-xl text-gray-600 cursor-pointer"
                >
                  {showPassword ? <HiEyeOff /> : <HiEye />}
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            {/* Forgot Password Link */}
            <div className="text-right -mt-4 mb-2">
              <a href="#" className="text-sm text-green-700 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Sign In Button */}
            <Button type="submit" gradientDuoTone="greenToBlue" fullSized>
              Sign In
            </Button>
          </form>

          {/* Toast */}
          {submitted && (
            <Toast className="mt-4">
              <div className="text-sm font-medium text-white">
                Welcome back!
              </div>
            </Toast>
          )}
        </div>

        {/* Right: Inspirational Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex w-full md:w-1/2 items-center justify-center p-10 bg-transparent"
        >
          <div className="text-white text-center space-y-4">
            <h1 className="text-4xl font-bold leading-tight bg-gradient-to-r from-lime-400 via-emerald-400 to-green-600 text-transparent bg-clip-text">
              "Your journey starts with a sign in."
            </h1>
            <p className="text-lg text-gray-100">
              Stay focused. Stay connected. Let's get productive.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Custom Styles */}
      <style>
        {`
        .bg-signin-green-gradient {
          background: linear-gradient(-45deg, #508D4E, #40A578, #809D3C, #255F38);
          background-size: 400% 400%;
          animation: gradientShift 30s ease infinite;
        }

        .input-glow input {
          border: 2px solid transparent;
          background-origin: border-box;
          background-clip: padding-box, border-box;
          background-image:
            linear-gradient(#fff, #fff),
            linear-gradient(to right, #4ade80, #16a34a);
          color: #1f2937;
          border-radius: 0.5rem;
          transition: box-shadow 0.3s ease;
        }

        .input-glow input:focus {
          outline: none;
          box-shadow: 0 0 10px 2px rgba(52, 211, 153, 0.4);
          background-image:
            linear-gradient(#fff, #fff),
            linear-gradient(to right, #22c55e, #166534);
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        `}
      </style>
    </div>
  );
}
