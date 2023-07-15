import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../src/app/globals.css";
import environmentURL from "../../src/app/utils/url";
interface BlogContent {
  title: string;
  content: string;
}

export default function BlogPage() {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState<BlogContent>();
  const token =
    typeof window !== "undefined" ? sessionStorage.getItem("token") : null;
  const linkToPage: (location: string) => void = (location: string) => {
    router.push(location);
  };

  useEffect(() => {
    if (id) {
      axios
        .get(`${environmentURL}/api/blog/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setBlog(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id, token]);

  if (!blog) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="h-screen px-4 py-8 mx-auto bg-gray-200 ">
      {blog && (
        <div className="md:max-w-lg md:m-auto lg:px-10 xl:max-w-xl lg:max-w-2xl">
          <button
            onClick={() => linkToPage("/")}
            className="px-4 py-2 mx-2 text-white uppercase bg-blue-500 border-2 border-gray-300 rounded-md md:max-w-lg md:m-auto lg:px-10 xl:max-w-xl lg:max-w-2xl"
          >
            Back
          </button>
          <h1 className="mb-4 text-2xl font-bold mt-9 md:max-w-lg">
            {blog.title}
          </h1>
          <p className="pt-4 mx-10 text-lg leading-8 text-left md:max-w-lg xl:max-w-4xl">
            {blog.content}
          </p>
        </div>
      )}
    </div>
  );
}
