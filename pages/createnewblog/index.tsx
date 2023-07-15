import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import "../../src/app/globals.css";
import { useRouter } from "next/navigation";

const CreateANewBlog: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const token =
    typeof window !== "undefined" ? sessionStorage.getItem("token") : null;
  const linkToPage: (location: string) => void = (location: string) => {
    router.push(location);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userId = sessionStorage.getItem("userId");

      await axios.post(
        "http://localhost:5050/blog",
        {
          title,
          content,
          author: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTitle("");
      setContent("");
      linkToPage("/");
    } catch (error: AxiosError | any) {
      if (error.response) {
        if (error.response.status === 400) {
          alert(
            "Your content is shorter than the minimum allowed length (300) characters"
          );
        }
      } else if (error.response.status === 401) {
        alert(error.response.data.ERROR);
        console.log(error.response.data.ERRO);
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
      <h1 className="mb-8 text-3xl font-bold text-center">Create A Blog</h1>
      <form onSubmit={handleSubmit} className="m-auto max-w-64 sm:mx-5">
        <div className="mb-4">
          <label htmlFor="title" className="font-semibold">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-md md:max-w-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="font-semibold">
            Content:
          </label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            required
            className="w-full h-40 px-4 py-2 border-2 border-gray-300 rounded-md resize-none md:max-w-md"
            rows={15}
          />
        </div>
        <div className="flex items-center mt-5">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => linkToPage("/")}
            className="px-4 py-2 mx-3 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateANewBlog;
