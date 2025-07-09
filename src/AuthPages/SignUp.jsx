import React, { use, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Label,
  TextInput,
  Checkbox,
} from "flowbite-react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link, useNavigate } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase.config";




export default function SignupPage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUp } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const onSubmit = (data) => {
    console.log(data);
    signUp(data.email, data.password).then((result) => {
      console.log(result)
      navigate('/')
      updateProfile(auth.currentUser, {
        displayName: data.name,
        photoURL: data.image
      }).then(()=>{}).catch((error)=>{console.log(error)})
    }).catch((error) => {
      console.log(error)
    });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-animated-gradient">
      <div className="flex flex-col md:flex-row w-full max-w-6xl shadow-xl bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20">
        {/* Left: Signup Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-1/2 p-8 bg-white/30"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Full Name */}
            <div>
              <Label htmlFor="name" value="Full Name" />
              <TextInput
                id="name"
                placeholder="John Doe"
                className="input-gradient"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" value="Email" />
              <TextInput
                id="email"
                type="email"
                placeholder="you@example.com"
                className="input-gradient"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Image */}
            <div>
              <Label htmlFor="image" value="Image URL" />
              <TextInput
                id="image"
                placeholder="https://example.com/image.jpg"
                className="input-gradient"
                {...register("image", { required: "Image URL is required" })}
              />
              {errors.image && (
                <p className="text-red-500 text-sm">{errors.image.message}</p>
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
                  className="input-gradient"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "At least 6 characters",
                    },
                  })}
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-5 top-2.5 text-xl text-gray-500 cursor-pointer"
                >
                  {showPassword ? <HiEyeOff /> : <HiEye />}
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            {/* Agreement */}
            <div className="flex items-center gap-2">
              <Checkbox
                id="agreement"
                {...register("agreement", { required: true })}
              />
              <Label htmlFor="agreement">
                I agree to the{" "}
                <a href="#" className="text-blue-500 underline">
                  terms & privacy
                </a>
              </Label>
            </div>
            {errors.agreement && (
              <p className="text-red-500 text-sm">
                You must accept the terms to continue
              </p>
            )}

            {/* Submit */}
            <Button type="submit" className="w-full bg-gradient-to-br from-green-400 to-blue-600 text-white hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800">
              Sign Up
            </Button>
          </form>
          <p>Already have an account? then <Link to={'/sign-in'} className="underline text-blue-600">Sign In</Link> </p>
          <div className="divider">OR</div>
          <button className="btn w-full text-black border-[#e5e5e5]">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Sign up with Google
          </button>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex md:flex-row w-full md:w-1/2 bg-transparent items-center justify-center p-10"
        >
          <div className="text-white text-center space-y-4">
            <h1 className="text-4xl font-bold leading-tight">
              Join the community
            </h1>
            <p className="text-lg text-gray-100">
              Build your dream, manage your data, and grow with us. Sign up today and experience modern design with smooth UI.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Custom CSS */}
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
    </div >
  );
}
