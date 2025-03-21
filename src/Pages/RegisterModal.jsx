import React from "react";
import { X } from "lucide-react";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import logo from "../Assets/HOMMSS-LOGO.png";

export default function RegisterModal({ onClose, onSwitch }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black/30 z-50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow dark:border w-full max-w-sm sm:max-w-md md:max-w-lg xl:max-w-xl p-5 sm:p-8 dark:bg-gray-800 dark:border-gray-700 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="space-y-5">
          {/* Logo & Brand Name */}
          <div className="flex items-center justify-center space-x-2">
            <img className="h-12 sm:h-16" src={logo} alt="HOMMSS Logo" />
            <span className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white">
              HOMMSS
            </span>
          </div>

          <h1 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white text-center">
            Create Your Account
          </h1>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="first-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="w-full p-2.5 border rounded-lg text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="First name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="w-full p-2.5 border rounded-lg text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2.5 border rounded-lg text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2.5 border rounded-lg text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full p-2.5 border rounded-lg text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 focus:ring-blue-500"
                required
              />
              <label
                htmlFor="terms"
                className="text-gray-500 dark:text-gray-300"
              >
                I accept the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Terms of Use
                </a>{" "}
                &{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Privacy Policy
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign Up
            </button>
          </form>

          {/* OR Continue with Section */}
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-3 text-sm text-gray-500 dark:text-gray-400">
              Or sign up with
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex space-x-4">
            <button className="flex-1 flex items-center justify-center px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700">
              <FcGoogle size={20} className="mr-2" />
              Google
            </button>
          </div>

          {/* Sign In Link with Switch */}
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <button
              onClick={onSwitch} // Switch to SignInModal
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
