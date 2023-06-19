import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { nextStep, previousStep } from "../../redux/stepActions";
import { updateFormData } from "./../../redux/actions";

const Step4 = () => {
  const formData = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const [multi_files, setMultiFiles] = useState([]);
  const [geolocationStatus, setGeolocationStatus] = useState("Not Captured");
  const [geolocation, setGeolocation] = useState("");
  const [isDragOver, setIsDragOver] = useState(false);

  useEffect(() => {
    // Automatically capture geolocation when the page is opened
    if (navigator.geolocation) {
      setGeolocationStatus("Capturing...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeolocationStatus("Captured");
          console.log("Geolocation Coordinates:", position.coords);
          setGeolocation(
            `${position.coords.latitude},${position.coords.longitude}`
          );

          // You can store the coordinates or perform any additional logic here
        },
        (error) => {
          setGeolocationStatus("Error");
          console.log("Geolocation Error:", error);
        }
      );
    } else {
      setGeolocationStatus("Not Supported");
    }
  }, []);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    console.log(selectedFiles);
    setMultiFiles(selectedFiles);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragOver(false);
    const selectedFiles = Array.from(event.dataTransfer.files);
    setMultiFiles(selectedFiles);
  };

  const handleNext = () => {
    dispatch(
      updateFormData({
        multi_file: formData.multi_files,
        geolocation: formData.geolocation,
      })
    );
    console.log(formData);
    dispatch(nextStep());
    // Proceed to the next step or perform any additional logic
  };

  const handlePrevious = () => {
    dispatch(previousStep());
  };

  const handleFileButtonClick = () => {
    const fileInput = document.getElementById("file-upload");
    if (fileInput) {
      fileInput.click();
    }
  };

  const isFilesValid = multi_files.length > 0 && multi_files.length <= 5;

  return (
    <>
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
                STEP 4
              </h5>
              <button
                type="button"
                className={`${
                  isFilesValid ? "" : "pointer-events-none"
                } p-2 rounded-full hover:bg-transparent focus:outline-none`}
                onClick={handleNext}
                disabled={!isFilesValid}
              >
                <AiOutlineArrowRight
                  className="text-xl transform hover:scale-110 transition-transform"
                  style={{ color: "#F96F01" }}
                />
              </button>
            </div>

            <div>
              {multi_files.length > 0 && (
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Selected Files:
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {multi_files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-sm text-gray-600"
                      >
                        <div className="truncate w-32">{file.name}</div>
                        <div>({file.type})</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div
                className={`p-4 mt-4 border-2 border-dashed rounded-lg cursor-pointer ${
                  isDragOver ? "border-blue-500" : "border-gray-300"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <label className="block text-sm font-medium text-gray-900 dark:text-white">
                  File Upload (Valid types: PNG and PDF, Limit: 5 files)
                </label>
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept=".png,.pdf"
                  multiple
                  onChange={handleFileChange}
                />
                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-600">
                    {multi_files.length} / 5 files selected
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center mt-4 space-y-8">
                <button
                  type="button"
                  className="w-full relative inline-flex items-center justify-center p-0 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group border-2 border-[bg-gradient-to-br from-[#f96f01] to-[#f9e675]] bg-transparent group-hover:bg-gradient-to-br from-[#f96f01] to-[#f9e675] hover:text-white dark:text-white focus:ring-4 focus:outline-none transform transition-all duration-300 active:scale-90"
                  onClick={handleFileButtonClick}
                >
                  <span className="w-full relative px-5 py-2.5 rounded-md group-hover:bg-gradient-to-br from-[#f96f01] to-[#f9e675] bg-transparent button-bg">
                    Select Files
                  </span>
                </button>

                <div
                  className={`${
                    isFilesValid ? "text-green-500" : "text-red-500"
                  } text-sm mt-0`}
                  style={{ marginTop: "8px" }}
                >
                  {isFilesValid ? (
                    <div className="text-sm text-green-500">
                      Valid files selected
                    </div>
                  ) : (
                    <div className="text-sm text-red-500">
                      Please select 1 to 5 valid files
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center mt-4">
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                Geolocation :{" "}
                <span
                  className={
                    geolocationStatus === "Captured"
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {geolocationStatus}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step4;
