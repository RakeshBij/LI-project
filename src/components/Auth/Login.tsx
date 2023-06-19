import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL, API_ENDPOINT_LOGIN } from "./../../utils/constants";
import ForgotPassword from "./ForgotPassword";
import { validateEmail } from "../../utils/validation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  //   const navigate = useNavigate();

  let index = 0,
    interval = 1000;

  const rand = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const animate = (star: any) => {
    star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
    star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

    star.style.animation = "none";
    star.offsetHeight;
    star.style.animation = "";
  };

  for (const star of document.getElementsByClassName("magic-star")) {
    setTimeout(() => {
      animate(star);

      setInterval(() => animate(star), 1000);
    }, index++ * (interval / 3));
  }

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setErrorMessage("Invalid email address");
      return;
    }

    axios
      .post(API_BASE_URL + API_ENDPOINT_LOGIN, { email, password })
      .then((response: AxiosResponse<{ authToken: string }>) => {
        const authToken = response.data.authToken;

        console.log(authToken);
        localStorage.setItem("token", authToken);
      })
      .catch((error) => {
        if (error.response) {
          // Request was made and server responded with a status code
          setErrorMessage("Login failed. Please check your credentials.");
        } else if (error.request) {
          // Request was made but no response received
          setErrorMessage("Unable to connect to the server.");
        } else {
          // Something else happened during the request
          setErrorMessage("An unexpected error occurred.");
        }
      });
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="small-s box-shadow-c w-full max-w-sm p-4 bg-white rounded-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 w-90 sm:w-85">
          <form
            className="space-y-6 mb-2"
            action="#"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <h1>
              Log in to
              <span className="magic">
                <span className="magic-star">
                  <svg viewBox="0 0 512 512">
                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                  </svg>
                </span>
                <span className="magic-star">
                  <svg viewBox="0 0 512 512">
                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                  </svg>
                </span>
                <span className="magic-star">
                  <svg viewBox="0 0 512 512">
                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                  </svg>
                </span>
                <span className="magic-text">Levitation Infotech</span>
              </span>
            </h1>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full relative inline-flex items-center justify-center p-0 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group border-2 border-[bg-gradient-to-br from-[#f96f01] to-[#f9e675]] bg-transparent group-hover:bg-gradient-to-br from-[#f96f01] to-[#f9e675] hover:text-white dark:text-white focus:ring-4 focus:outline-none transform transition-all duration-300 active:scale-90"
              onClick={handleLogin}
            >
              <span className="w-full relative px-5 py-2.5 rounded-md group-hover:bg-gradient-to-br from-[#f96f01] to-[#f9e675] bg-transparent button-bg">
                Log in
              </span>
            </button>

            {/* #f96f01
            #f6af31
            #f9e675 */}
          </form>
          <a
            href="#"
            className="ml-auto text-sm text-blue-700 hover:dark:text-blue-500"
            onClick={() => {
              //   navigate("/ForgotPassword");
            }}
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
