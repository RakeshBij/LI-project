import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const stepData = useSelector((state) => state.step);
  return (
    <>
      {stepData.step === 1 && <Step1 />}
      {stepData.step === 2 && <Step2 />}
      {stepData.step === 3 && <Step3 />}
      {stepData.step === 4 && <Step4 />}
      {stepData.step === 5 && <Step5 />}
    </>
  );
};

export default Dashboard;
