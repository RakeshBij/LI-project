import axios, { AxiosResponse } from "axios";

const baseURL = "https://x8ki-letl-twmt.n7.xano.io/apidoc:XooRuQbs";

export async function login(email: string, password: string): Promise<string> {
  try {
    const response: AxiosResponse<{ authToken: string }> = await axios.post(
      `${baseURL}/auth/login`,
      {
        email,
        password,
      }
    );
    console.log(response.data.authToken);
    return response.data.authToken;
  } catch (error) {
    throw new Error("Login failed");
  }
}

export async function submitForm(formData: FormData): Promise<number> {
  try {
    const response: AxiosResponse<{ id: number }> = await axios.post(
      `${baseURL}/form`,
      formData
    );
    return response.data.id;
  } catch (error) {
    throw new Error("Form submission failed");
  }
}
