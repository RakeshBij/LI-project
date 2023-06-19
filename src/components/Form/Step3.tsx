import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "./../../redux/actions";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Step3 = () => {
  const formData = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleNext = () => {
    // Validate the file and proceed to the next step
    // You can perform additional validation or data manipulation here
    console.log("Step 3 Data:", { file });
    // Call a function to proceed to the next step
  };

  const handlePrevious = () => {
    // Perform any logic for going back to the previous step
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const isFileValid =
    file && (file.type === "image/png" || file.type === "application/pdf");

  return (
    <>
      <div className="flex justify-center mb-4"></div>
      <div className="flex justify-center items-center h-screen">
        <div className="small-s box-shadow-c w-full max-w-sm p-4 bg-white rounded-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 w-90 sm:w-85">
          <div
            className={`space-y-6 mb-2 relative ${
              isDragging ? "border-blue-500" : "border-gray-300"
            }`}
            onDragEnter={handleDragEnter}
            onDragOver={(e) => e.preventDefault()}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
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
                STEP 3
              </h5>
              <button
                type="button"
                className="p-2 rounded-full hover:bg-transparent focus:outline-none"
                onClick={handleNext}
                disabled={!isFileValid}
              >
                <AiOutlineArrowRight
                  className="text-xl transform hover:scale-110 transition-transform"
                  style={{ color: "#F96F01" }}
                />
              </button>
            </div>

            <div>
              {file ? (
                <div>
                  <div className="p-4 border border-gray-300 rounded-lg">
                    <div className="mb-2 font-medium">
                      File Selected: {file.name}
                    </div>
                    <button
                      type="button"
                      className="text-red-500 underline mt-1 focus:outline-none hover:text-red-700"
                      onClick={() => setFile(null)}
                    >
                      Remove File
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className={`p-10 text-center border-2 border-dashed rounded-lg ${
                    isDragging
                      ? "bg-blue-50 border-blue-500"
                      : "bg-gray-50 border-gray-300"
                  }`}
                >
                  <label
                    htmlFor="file"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {isDragging
                      ? "Drop the file here"
                      : "Drag and drop file here or click to select"}
                  </label>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="hidden"
                    onChange={handleFileUpload}
                    required
                    accept=".png,.pdf"
                  />
                  <div className="text-gray-400">
                    Supported file formats: PNG, PDF
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step3;
