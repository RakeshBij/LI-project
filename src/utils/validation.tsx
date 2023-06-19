// Function to validate an email address
export function validateEmail(email: string): boolean {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the regular expression
  return emailRegex.test(email);
}

// Function to validate a phone number
export function validatePhoneNumber(phoneNumber: string): boolean {
  // Regular expression for phone number validation
  const phoneRegex = /^\d{10}$/;

  // Check if the phone number matches the regular expression
  return phoneRegex.test(phoneNumber);
}

// Add more validation functions for other form fields as needed

export default {
  validateEmail,
  validatePhoneNumber,
};
