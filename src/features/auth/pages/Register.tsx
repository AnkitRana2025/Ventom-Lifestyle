import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

export type RegisterFormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const Register: React.FC = () => {
  const navigate = useNavigate();

  const { register: registerUser, registerError } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleFormSubmit: SubmitHandler<RegisterFormData> = async (
  data
) => {
  await registerUser({
    fullName: data.fullName,
    email: data.email,
    password: data.password,
  });
};
  return (
    <div className="flex min-h-screen w-full font-sans antialiased">
      {/* Left Column */}
      <div className="relative hidden w-1/2 lg:block">
        <img
          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1600"
          alt="Velmont Fashion"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute top-12 left-12 z-10">
          <h1 className="font-serif text-3xl font-normal tracking-[0.25em] text-white uppercase">
            Velmont
          </h1>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex w-full flex-col justify-center bg-[#FAF8F5] px-8 py-12 lg:w-1/2 lg:px-24">
        {/* Mobile Logo */}
        <div className="mb-8 lg:hidden">
          <h1 className="font-serif text-2xl tracking-[0.2em] text-gray-900 uppercase">
            Velmont
          </h1>
        </div>

        <div className="mx-auto w-full max-w-md">
          <h2 className="mb-10 font-serif text-2xl font-normal tracking-[0.18em] text-gray-900 uppercase">
            Create Account
          </h2>

          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="space-y-6"
            noValidate
          >
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-[10px] font-semibold tracking-[0.15em] text-gray-600 uppercase">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                {...register("fullName", {
                  required: "Full name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                className="mt-1 w-full border-b border-gray-300 bg-transparent pb-2 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-gray-900 focus:outline-none"
              />

              {errors.fullName && (
                <span className="mt-1 text-xs text-red-600">
                  {errors.fullName.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-[10px] font-semibold tracking-[0.15em] text-gray-600 uppercase">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value:
                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="mt-1 w-full border-b border-gray-300 bg-transparent pb-2 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-gray-900 focus:outline-none"
              />

              {errors.email && (
                <span className="mt-1 text-xs text-red-600">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="text-[10px] font-semibold tracking-[0.15em] text-gray-600 uppercase">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="mt-1 w-full border-b border-gray-300 bg-transparent pb-2 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-gray-900 focus:outline-none"
              />

              {errors.password && (
                <span className="mt-1 text-xs text-red-600">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col">
              <label className="text-[10px] font-semibold tracking-[0.15em] text-gray-600 uppercase">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") ||
                    "Passwords do not match",
                })}
                className="mt-1 w-full border-b border-gray-300 bg-transparent pb-2 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-gray-900 focus:outline-none"
              />

              {errors.confirmPassword && (
                <span className="mt-1 text-xs text-red-600">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            {/* Registration Error */}
            {registerError && (
              <div className="border border-red-200 bg-red-50 px-3 py-2">
                <p className="text-xs text-red-600">
                  {registerError}
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 w-full bg-black py-3.5 text-xs font-medium tracking-[0.2em] text-white uppercase transition-opacity hover:opacity-90 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Creating..." : "Create Account"}
            </button>
          </form>

          {/* Login */}
          <div className="mt-8 text-center text-xs text-gray-600">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="font-medium text-gray-900 underline underline-offset-4 cursor-pointer transition-colors hover:text-black"
            >
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;