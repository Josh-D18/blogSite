import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "../../src/app/globals.css";
import environmentURL from "../../src/app/utils/url";

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");

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

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${environmentURL}/api/register`, {
        username,
        password,
        bio,
      });

      const session = response.data;
      sessionStorage.setItem("token", session);
      setUsername("");
      setPassword("");
      setBio("");
      linkToPage("/login");
    } catch (error: AxiosError | any) {
      if (error.response) {
        if (error.response.status === 400) {
          alert(error.response.data.ERROR);
        } else if (error.response.status === 404) {
          alert("An error occurred. Please try again later.");
        }
      } else if (error.request) {
        alert("Request error. Please try again later.");
      } else {
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="h-full max-w-lg m-auto mt-4">
      <h1 className="mb-8 text-3xl font-bold text-center">Register</h1>
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
        <div className="flex flex-col mb-4">
          <label htmlFor="bio" className="font-semibold">
            Bio:
          </label>
          <textarea
            id="bio"
            value={bio}
            onChange={handleBioChange}
            required
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-md resize-none md:max-w-md"
            maxLength={300}
            rows={15}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
        <div className="flex items-center mt-5">
          <p className="mx-3">Have an Account?</p>
          <button
            onClick={() => linkToPage("/login")}
            type="button"
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
