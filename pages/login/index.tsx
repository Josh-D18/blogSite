import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import "../../src/app/globals.css";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const linkToPage: (location: string) => void = (location: string) => {
    router.push(location);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5050/login", {
        username,
        password,
      });

      const userId = response.data.user._id;
      const token = response.data.token;
      sessionStorage.setItem("userId", userId);
      sessionStorage.setItem("token", token);
      setUsername("");
      setPassword("");
      linkToPage("/");
    } catch (error: AxiosError | any) {
      if (error.response) {
        if (error.response.status === 400) {
          alert(error.response.data.ERROR);
          console.log(error.response.data.ERRO);
        } else if (error.response.status === 404) {
          alert("The user entered does not exist.");
        }
      } else if (error.request) {
        console.log("Request error:", error.request);
        alert("Request error. Please try again later.");
      } else {
        console.log("Error:", error.message);
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="h-full max-w-lg m-auto mt-4">
      <h1 className="mb-8 text-3xl font-bold text-center">Login</h1>
      <form onSubmit={handleSubmit} className="m-auto max-w-64 sm:mx-5">
        <div className="mb-4">
          <label htmlFor="username" className="font-semibold">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-md md:max-w-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="font-semibold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-md md:max-w-md"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
        <div className="flex items-center mt-5">
          <p className="mx-3">Don&apos;t Have An Account?</p>
          <button
            type="button"
            onClick={() => linkToPage("/register")}
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
