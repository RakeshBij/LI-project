// Login.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData, submitForm } from "./../../redux/actions.jsx";
import { nextStep, previousStep } from "./../../redux/stepActions.jsx";
import { AiOutlineArrowRight } from "react-icons/ai";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Step1 = () => {
  const [value, setValue] = useState();
  const formData = useSelector((state: any) => state.form);
  const dispatch = useDispatch();

  const handleSubmit = (e: Event): void => {
    e.preventDefault();

    // Dispatch an action to update the form data in the Redux store
    dispatch(
      updateFormData({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      })
    );
    dispatch(nextStep());
    console.log(formData.name, formData.email, formData.phone);
    // Check if all form data is filled
    if (formData.name && formData.email && formData.phone) {
      // Dispatch an action to submit the form data to the API
      dispatch(submitForm());
    }

    // Reset form fields after submission
  };

  return (
    <>
      <div className="flex justify-center mb-4"></div>
      <div className="flex justify-center items-center h-screen">
        <div className="small-s box-shadow-c w-full max-w-sm p-4 bg-white rounded-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 w-90 sm:w-85">
          <form className="space-y-6 mb-2 relative" onSubmit={handleSubmit}>
            <div className="flex items-center justify-between">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                STEP 1
              </h5>
              <button
                type="submit"
                className="p-2 rounded-full hover:bg-transparent focus:outline-none"
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
                onChange={(e) =>
                  dispatch(updateFormData({ name: e.target.value }))
                }
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
                onChange={(e) =>
                  dispatch(updateFormData({ email: e.target.value }))
                }
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
                defaultCountry="IN"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                // value={formData.phone}
                placeholder="enter"
                onChange={(e) =>
                  dispatch(updateFormData({ phone: e.target.value }))
                }
              />
              {/* <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="98XXXXXXXX"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                value={formData.phone}
                onChange={(e) =>
                  dispatch(updateFormData({ phone: e.target.value }))
                }
                required
              /> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Step1;
