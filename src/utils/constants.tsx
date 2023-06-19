export const API_BASE_URL =
  "https://x8ki-letl-twmt.n7.xano.io/apidoc:XooRuQbs/";
export const API_ENDPOINT_LOGIN = "auth/login";
export const API_ENDPOINT_FORM = "form";

export const DEFAULT_COUNTRY_CODE = "+91";

export const ERROR_MESSAGES = {
  LOGIN_FAILED: "Invalid email or password. Please try again.",
  PASSWORD_RESET_FAILED: "Failed to reset password. Please try again.",
  FORM_SUBMISSION_FAILED: "Failed to submit the form. Please try again.",
  // Add more error messages as needed
};

export const FORM_STEPS = [
  "Basic Details",
  "Address",
  "File Upload",
  "Multi File Upload",
  "Status",
];

// Add other constants as needed

export default {
  API_BASE_URL,
  API_ENDPOINT_LOGIN,
  API_ENDPOINT_FORM,
  DEFAULT_COUNTRY_CODE,
  ERROR_MESSAGES,
  FORM_STEPS,
  // Export other constants as needed
};
