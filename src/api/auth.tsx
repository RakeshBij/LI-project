import { useState } from "react";
import { login } from "./index";

export function useAuth() {
  const [authToken, setAuthToken] = useState("");

  async function authenticate(email: string, password: string) {
    try {
      const token = await login(email, password);
      setAuthToken(token);
    } catch (error) {
      console.error(error);
    }
  }

  return { authToken, authenticate };
}
