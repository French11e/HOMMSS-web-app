import React, { useState } from "react";
import { X } from "lucide-react";

export default function ForgotPassword({ onClose }) {
  const [email, setEmail] = useState("");

  return (
    <div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black/30 z-50 px-4"
      onClick={onClose} // Close when clicking outside
    >
      <div
        className="bg-white rounded-lg shadow dark:border w-full max-w-sm sm:max-w-md md:max-w-lg p-5 sm:p-8 dark:bg-gray-800 dark:border-gray-700 relative"
        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
        >
          <X size={24} />
        </button>

        <h2 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white text-center">
          Forgot Password?
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-4">
          Enter your email and we’ll send you a reset link.
        </p>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2.5 border rounded-lg text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
              placeholder="name@example.com"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}
