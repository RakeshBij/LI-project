import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData, submitForm } from "./../../redux/actions";
import Confetti from "./Confetti";
import { nextStep, previousStep } from "../../redux/stepActions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Step5 = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const isFormSubmitted = useSelector((state) => state.form.isFormSubmitted);
  const formData = useSelector((state) => state.form);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isFormSubmitted) {
      // Call the confetti function to create the confetti animation
    }
  }, [isFormSubmitted]);

  const handleSubmit = async () => {
    // Dispatch an action to update the form data in the Redux store
    dispatch(updateFormData(formData));

    // try {
    //   // Retrieve the access token from local storage
    //   const accessToken = localStorage.getItem("token");

    //   const response = await fetch(
    //     "https://x8ki-letl-twmt.n7.xano.io/apidoc:XooRuQbs/form",
    //     {
    //       method: "POST",
    //       headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //       },
    //       body: generateFormData(),
    //     }
    //   );

    //   if (response.ok) {
    //     // Form submission successful
    //     dispatch(submitForm());
    //   } else {
    //     // Form submission failed
    //     console.error("Form submission failed.");
    //   }
    // } catch (error) {
    //   console.error("An error occurred during form submission:", error);
    // }
    console.log(formData);
    setFormSubmitted(true);
    toast.success("Form is succesfully submitted 🥳");
    setTimeout(() => {
      localStorage.clear();
      navigate("/");
      dispatch(previousStep());
      dispatch(previousStep());
      dispatch(previousStep());
      dispatch(previousStep());
      window.location.reload();
    }, 4000);
  };

  const generateFormData = () => {
    console.log(formData);
    // const formData = new FormData();
    // formData.append("name", formData.name);
    // formData.append("email", formData.email);
    // formData.append("phone_number", formData.phone);
    // formData.append("address_1", formData.address1);
    // formData.append("address_2", formData.address2);
    // formData.append("city", formData.city);
    // formData.append("state", formData.state);
    // formData.append("pincode", formData.pincode);
    // formData.append("country", formData.country);
    // formData.append("geolocation", formData.geolocation);
    // formData.append("single_file", formData.singleFile);
    // for (let i = 0; i < formData.multiFile.length; i++) {
    //   formData.append("multi_file", formData.multiFile[i]);
    // }
    // return formData;
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="small-s box-shadow-c w-full max-w-sm p-4 bg-white rounded-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 w-90 sm:w-85">
        <div className="space-y-6 mb-2">
          <div className="text-xl font-medium text-gray-900 dark:text-white">
            Step 5: Status
          </div>
          {!isFormSubmitted && (
            <p className="text-red-500">
              The form submission was not successful. Please try again.
            </p>
          )}

          <div className="flex justify-between items-center">
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
              onClick={handleSubmit}
            >
              Submit Form
            </button>
          </div>
        </div>
      </div>
      {formSubmitted && <Confetti />}
    </div>
  );
};

export default Step5;
