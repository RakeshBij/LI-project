import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast.configure();

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = () => {
    // Perform the necessary logic for forgot password
    // You can make an API call to send a password reset email or update the password

    // Show a success notification
    toast.success(`A password reset email has been sent to ${email}`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000, // Close the notification after 3 seconds
      hideProgressBar: true,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="small-s box-shadow-c w-full max-w-sm p-4 bg-white rounded-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 w-90 sm:w-85">
        <form className="space-y-6 mb-2">
          <h1>Forgot Password?</h1>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full relative inline-flex items-center justify-center p-0 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group border-2 border-[bg-gradient-to-br from-[#f96f01] to-[#f9e675]] bg-transparent group-hover:bg-gradient-to-br from-[#f96f01] to-[#f9e675] hover:text-white dark:text-white focus:ring-4 focus:outline-none transform transition-all duration-300 active:scale-90"
            onClick={handleForgotPassword}
          >
            <span className="w-full relative px-5 py-2.5 rounded-md group-hover:bg-gradient-to-br from-[#f96f01] to-[#f9e675] bg-transparent button-bg">
              Reset Password
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
