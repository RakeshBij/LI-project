// Function to capitalize the first letter of a string
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to format a date string
export function formatDate(date: Date): string {
  // Use the Intl.DateTimeFormat API to format the date
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  return formattedDate;
}

// Function to generate a random ID
export function generateId(): string {
  // Generate a random number and convert it to a string
  const randomNumber = Math.random().toString();

  // Remove the "0." prefix from the random number
  const id = randomNumber.slice(2);

  return id;
}

// Export other helper functions as needed

export default {
  capitalize,
  formatDate,
  generateId,
};
