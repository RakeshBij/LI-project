import React, { useState } from "react";
import "./index.css";
import Login from "./components/Auth/Login";
import ForgotPassowrd from "./components/Auth/ForgotPassword";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Step1 from "./components/Form/Step1";
import Step2 from "./components/Form/Step2";
import Step3 from "./components/Form/Step3";
import Step4 from "./components/Form/Step4";
import Step5 from "./components/Form/Step5";

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    // Handle form submission logic here
    // You can send form data to the server, perform validation, etc.
    // Once the form submission is successful, you can set setIsFormSubmitted(true)
    setIsFormSubmitted(true);
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleFormValuesChange = (updatedValues) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      ...updatedValues,
    }));
  };

  const token = localStorage.getItem("token");

  if (!token) {
    return <Login />;
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassowrd />} />
      </Routes>
    </Router>
    // <div>
    //   {currentStep === 1 && (
    //     <Step1
    //       onNextStep={handleNextStep}
    //       onFormValuesChange={handleFormValuesChange}
    //       formValues={formValues}
    //     />
    //   )}
    //   {currentStep === 2 && (
    //     <Step2
    //       onNextStep={handleNextStep}
    //       onPreviousStep={handlePreviousStep}
    //       onFormValuesChange={handleFormValuesChange}
    //       formValues={formValues}
    //     />
    //   )}
    //   {currentStep === 3 && (
    //     <Step3
    //       onNextStep={handleNextStep}
    //       onPreviousStep={handlePreviousStep}
    //       onFormValuesChange={handleFormValuesChange}
    //       formValues={formValues}
    //     />
    //   )}
    //   {currentStep === 4 && (
    //     <Step4
    //       onNextStep={handleNextStep}
    //       onPreviousStep={handlePreviousStep}
    //       onFormValuesChange={handleFormValuesChange}
    //       formValues={formValues}
    //     />
    //   )}
    //   {currentStep === 5 && <Step5 isFormSubmitted={isFormSubmitted} />}

    //   {!isFormSubmitted && (
    //     <div>
    //       {currentStep > 1 && (
    //         <button onClick={handlePreviousStep}>Previous</button>
    //       )}
    //       {currentStep < 5 && <button onClick={handleNextStep}>Next</button>}
    //       {currentStep === 5 && (
    //         <button onClick={handleFormSubmit}>Submit</button>
    //       )}
    //     </div>
    //   )}
    // </div>
  );
};

export default App;
