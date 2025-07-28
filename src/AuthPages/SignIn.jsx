/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Label,
  TextInput,
} from "flowbite-react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import SocialLogin from "./SocialLogin";

export default function SigninPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then(() => navigate('/'))
      .catch((error) => console.error(error));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-animated-gradient">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col md:flex-row w-full max-w-6xl rounded-xl overflow-hidden shadow-2xl border border-white/30 bg-white/20 backdrop-blur-md"
      >
        {/* Left: Sign-In Form */}
        <div className="w-full md:w-1/2 p-8 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
            Welcome Back
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
                  placeholder="Password"
                  className="input-glow"
                  {...register("password", { required: "Password is required" })}
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-5 top-2.5 text-xl text-gray-600 cursor-pointer"
                >
                  {showPassword ? <HiEyeOff /> : <HiEye />}
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            <div className="text-right -mt-4 mb-2">
              <a href="#" className="text-sm text-sky-700 hover:underline">
                Forgot Password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-br from-green-400 to-blue-600 text-white hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800"
            >
              Sign In
            </Button>
          </form>

          <p className="mt-4 text-center text-gray-700">
            First time here?{" "}
            <Link to="/sign-up" className="underline text-indigo-700">
              Create an Account
            </Link>
          </p>

          <div className="divider text-gray-400">OR</div>

          <SocialLogin></SocialLogin>
        </div>

        {/* Right: Quote Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex w-full md:w-1/2 items-center justify-center p-10"
        >
          <div className="text-white text-center space-y-4">
            <h1 className="text-4xl font-bold leading-tight drop-shadow">
              “Your journey starts here.”
            </h1>
            <p className="text-lg text-gray-100">
              Sign in to stay connected and productive.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Custom Gradient Style */}
      <style>
        {`
        .input-gradient input {
          border: 2px solid transparent;
          background-origin: border-box;
          background-clip: padding-box, border-box;
          background-image:
            linear-gradient(#fff, #fff),
            linear-gradient(to right, #15B392, #A0D683);
          color: #111827;
          border-radius: 0.5rem;
          transition: border 0.3s ease;
        }

        .input-gradient input:focus {
          outline: none;
          border-color: transparent;
          background-image:
            linear-gradient(#fff, #fff),
            linear-gradient(to right, #15B392, #16423C);
        }

        .bg-animated-gradient {
          background: linear-gradient(-45deg, #15B392, #A0D683, #16423C, #38bdf8);
          background-size: 300% 300%;
          animation: gradientShift 20s ease infinite;
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
