import React, { use, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Label,
  TextInput,
  Toast,
} from "flowbite-react";
import { HiEye, HiEyeOff } from "react-icons/hi";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";



export default function SigninPage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = use(AuthContext);
  const navigate = useNavigate();


  const onSubmit = (data) => {
    console.log("Sign In Data:", data);
    signIn(data.email, data.password).then((result) => {
      console.log(result)
      navigate('/')
    }).catch((error) => {
      console.log(error)
    });

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
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
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

            {/* Forgot Password Link */}
            <div className="text-right -mt-4 mb-2">
              <a href="#" className="text-sm text-green-700 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Sign In Button */}
            <Button type="submit" className="w-full bg-gradient-to-br from-green-400 to-blue-600 text-white hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800">
              Sign In
            </Button>
          </form>
          <p>First time to the page? then <Link to={'/sign-up'} className="underline text-blue-600">Sign Up</Link> </p>
          <div className="divider">OR</div>
          <button className="btn w-full text-black border-[#e5e5e5]">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Sign In with Google
          </button>
        </div>

        {/* Right: Inspirational Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex w-full md:w-1/2 items-center justify-center p-10 bg-transparent"
        >
          <div className="text-white text-center space-y-4">
            <h1 className="text-4xl font-bold leading-tight text-white bg-clip-text">
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
    .bg - signin - green - gradient {
          background: linear-gradient(-45deg, #15B392, #A0D683, #16423C);
        background-size: 300% 300%;
        animation: gradientShift 25s ease infinite;
    }

        .input-glow input {
          border: 2px solid transparent;
        background-origin: border-box;
        background-clip: padding-box, border-box;
        background-image:
        linear-gradient(#fff, #fff),
        linear-gradient(to right, #15B392, #A0D683);
        color: #1f2937;
        border-radius: 0.5rem;
        transition: box-shadow 0.3s ease;
    }

        .input-glow input:focus {
          outline: none;
        box-shadow: 0 0 10px 2px rgba(21, 179, 146, 0.4);
        background-image:
        linear-gradient(#fff, #fff),
        linear-gradient(to right, #15B392, #16423C);
    }

        @keyframes gradientShift {
          0 % { background- position: 0% 50%; }
        50% {background - position: 100% 50%; }
        100% {background - position: 0% 50%; }
    }
  `}
      </style>

    </div>
  );
}
