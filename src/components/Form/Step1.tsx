import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "./../../redux/actions.jsx";
import { nextStep, previousStep } from "./../../redux/stepActions.jsx";
import { AiOutlineArrowRight } from "react-icons/ai";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Step1 = () => {
  const formData = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleNextStep = () => {
    // Check if all form data is filled
    if (formData.name && formData.email && formData.phone_number) {
      dispatch(nextStep());
    } else {
      // Handle form validation or error
    }
  };

  const handleChange = (field, value) => {
    dispatch(updateFormData({ [field]: value }));
  };

  return (
    <>
      <div className="flex justify-center mb-4"></div>
      <div className="flex justify-center items-center h-screen">
        <div className="small-s box-shadow-c w-full max-w-sm p-4 bg-white rounded-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 w-90 sm:w-85">
          <form className="space-y-6 mb-2 relative">
            <div className="flex items-center justify-between">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                STEP 1
              </h5>
              <button
                type="button"
                className="p-2 rounded-full hover:bg-transparent focus:outline-none"
                onClick={handleNextStep}
              >
                <AiOutlineArrowRight
                  className="text-xl transform hover:scale-110 transition-transform"
                  style={{ color: "#F96F01" }}
                />
              </button>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@email.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Phone Number
              </label>
              <PhoneInput
                defaultCountry="IN" // Set default country to India
                containerClass="phone-input-container" // Added CSS class for the container
                inputClass="phone-input" // Added CSS class for the input box
                placeholder="Enter Your Phone Number"
                value={formData.phone_number}
                onChange={(value) => handleChange("phone_number", value)}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Step1;
