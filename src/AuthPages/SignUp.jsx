import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Label,
  TextInput,
  Checkbox,
  Toast,
} from "flowbite-react";
import { HiEye, HiEyeOff } from "react-icons/hi";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    setSubmittedData(data);
    console.log(data);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-animated-gradient">
      <div className="flex flex-col md:flex-row w-full max-w-6xl shadow-xl bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20">
        {/* Left: Signup Form */}
        <div className="w-full md:w-1/2 p-8 bg-white/30">
          <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
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
                  className="input-gradient pr-10"
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
                  className="absolute right-3 top-2.5 text-xl text-gray-500 cursor-pointer"
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
            <Button type="submit" gradientDuoTone="greenToBlue" fullSized>
              Sign Up
            </Button>
          </form>

          {/* Success Toast */}
          {submittedData && (
            <Toast className="mt-4">
              <div className="text-sm font-medium">
                Welcome, <strong>{submittedData.name}</strong>!
              </div>
            </Toast>
          )}
        </div>

        {/* Right: Content */}
        <div className="hidden md:flex w-full md:w-1/2 bg-transparent items-center justify-center p-10">
          <div className="text-white text-center space-y-4">
            <h1 className="text-4xl font-bold leading-tight">
              Join the community
            </h1>
            <p className="text-lg text-gray-100">
              Build your dream, manage your data, and grow with us. Sign up today and experience modern design with smooth UI.
            </p>
          </div>
        </div>
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
    </div>
  );
}
