import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "./../../redux/actions";
import { Country, State, City } from "country-state-city";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { nextStep, previousStep } from "../../redux/stepActions";

const Step2 = () => {
  const formData = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const [selectedCountry, setSelectedCountry] = useState("IN"); // Set India as the default country
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleChange = (field, value) => {
    dispatch(updateFormData({ [field]: value }));
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setSelectedState("");
    setSelectedCity("");
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
  };

  const handleNext = () => {
    dispatch(
      updateFormData({
        address_1: formData.address_1,
        address_2: formData.address_2,
        city: selectedCity,
        state: selectedState,
        pincode: formData.pincode,
        country: selectedCountry,
      })
    );

    dispatch(nextStep());
    // Proceed to the next step or perform any additional logic
  };

  console.clear();

  const handlePrevious = () => {
    dispatch(previousStep());
  };

  const countries = Country.getAllCountries();
  const states = selectedCountry
    ? State.getStatesOfCountry(selectedCountry)
    : [];
  const cities = selectedState
    ? City.getCitiesOfState(selectedCountry, selectedState)
    : [];

  return (
    <>
      <div className="flex justify-center mb-4"></div>
      <div className="flex justify-center items-center h-screen">
        <div className="small-s box-shadow-c w-full max-w-sm p-4 bg-white rounded-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 w-90 sm:w-85">
          <div className="space-y-6 mb-2 relative">
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="p-2 rounded-full hover:bg-transparent focus:outline-none"
                onClick={handlePrevious}
              >
                <AiOutlineArrowLeft
                  className="text-xl transform hover:scale-110 transition-transform"
                  style={{ color: "#F96F01" }}
                />
              </button>
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                STEP 2
              </h5>
              <button
                type="button"
                className="p-2 rounded-full hover:bg-transparent focus:outline-none"
                onClick={handleNext}
              >
                <AiOutlineArrowRight
                  className="text-xl transform hover:scale-110 transition-transform"
                  style={{ color: "#F96F01" }}
                />
              </button>
            </div>

            <div>
              <label
                htmlFor="addressLine1"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address Line 1
              </label>
              <input
                type="text"
                name="addressLine1"
                id="addressLine1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter Address Line 1"
                value={formData.address_1} // Use formData.address_1 instead of formData.addressLine1
                onChange={
                  (e) => dispatch(updateFormData({ address_1: e.target.value })) // Keep the field name as addressLine2 for consistency
                }
                required
              />
            </div>
            <div>
              <label
                htmlFor="addressLine2"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address Line 2
              </label>
              <input
                type="text"
                name="addressLine2"
                id="addressLine2"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter Address Line 2"
                value={formData.address_2} // Use formData.address_2 instead of formData.addressLine2
                onChange={
                  (e) => dispatch(updateFormData({ address_2: e.target.value })) // Keep the field name as addressLine2 for consistency
                }
                required
              />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  City
                </label>
                <select
                  name="city"
                  id="city"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  value={selectedCity}
                  onChange={handleCityChange}
                  required
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label
                  htmlFor="state"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  State
                </label>
                <select
                  name="state"
                  id="state"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  value={selectedState}
                  onChange={handleStateChange}
                  required
                >
                  <option value="">Select State</option>
                  {states.map((state) => (
                    <option key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="country"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Country
              </label>
              <select
                name="country"
                id="country"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                value={selectedCountry}
                onChange={handleCountryChange}
                required
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="pincode"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Pincode
              </label>
              <input
                type="text"
                name="pincode"
                id="pincode"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter Pincode"
                value={formData.pincode}
                onChange={(e) =>
                  dispatch(updateFormData({ pincode: e.target.value }))
                }
                required
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2;
