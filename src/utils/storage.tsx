// Function to save data to local storage
export function saveData(key: string, data: any): void {
  localStorage.setItem(key, JSON.stringify(data));
}

// Function to retrieve data from local storage
export function getData(key: string): any {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

// Function to remove data from local storage
export function removeData(key: string): void {
  localStorage.removeItem(key);
}

// Export other storage-related functions as needed

export default {
  saveData,
  getData,
  removeData,
};
