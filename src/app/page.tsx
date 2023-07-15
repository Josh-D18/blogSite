"use client";
import BaseHeader from "./components/Header/BaseHeader";
import BaseProfile from "./components/Profile/BaseProfile";
import Container from "./components/Container/Container";
import { useState, useEffect } from "react";
import environmentURL from "./utils/url";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

type Blog = {
  title: string;
  content: string;
  _id: string;
};
interface Data {
  backgroundColor: string;
  bio: string;
  username: string;
  blogs: Blog[];
}

const Home = () => {
  const [data, setData] = useState<Data | undefined>(undefined);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const userID =
    typeof window !== "undefined" ? sessionStorage.getItem("userId") : null;
  const token =
    typeof window !== "undefined" ? sessionStorage.getItem("token") : null;

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const response = await axios.get(
          `${environmentURL}/api/user/${userID}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const blogIds = response.data.blogs;
        const blogRequests = blogIds.map((blogId: string) =>
          axios.get(`${environmentURL}/api/blog/${blogId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        );

        const blogResponses = await Promise.all(blogRequests);
        const blogs = blogResponses.map((blogResponse) => blogResponse.data);

        const dataObject = {
          username: response.data.username,
          bio: response.data.bio,
          backgroundColor: response.data.backgroundColor,
          blogs: blogs,
        };
        setData(dataObject);
      } catch (error: AxiosError | any) {
        if (error.response) {
          if (error.response.status === 400) {
            alert(error.response.data.ERROR);
          } else if (error.response.status === 401) {
            router.push("/login");
          } else if (error.response.status === 403) {
            router.push("/login");
          }
        } else if (error.request) {
          alert("Request error. Please try again later.");
        } else {
          alert("An error occurred. Please try again later.");
        }
      }
    };
    getData();
  }, [router, userID, token]);

  return (
    <main className="w-full">
      {isLoading || data ? (
        <Container>
          {data && (
            <>
              <BaseHeader
                backgroundColor={data.backgroundColor}
                username={data.username}
              />
              <BaseProfile bio={data.bio} blogs={data.blogs} />
            </>
          )}
        </Container>
      ) : (
        <h1 className="flex items-center justify-center mt-5">Loading...</h1>
      )}
    </main>
  );
};

export default Home;
