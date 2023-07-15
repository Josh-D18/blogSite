"use client";
import React from "react";
import { useRouter } from "next/navigation";

type Blog = {
  title: string;
  content: string;
};

type ProfileContentProps = {
  bio: string;
  blogs: Blog[];
};

const BaseProfile: React.FC<ProfileContentProps> = (props) => {
  const { bio, blogs } = props;
  const router = useRouter();
  const linkToPage: (location: string) => void = (location: string) => {
    router.push(location);
  };

  return (
    <div className="bg-white">
      <div className="h-full mt-[30px]">
        <div>
          <p className="pt-4 mx-10 leading-8 text-left md:max-w-lg md:m-auto lg:px-10 xl:max-w-xl lg:max-w-2xl">
            {bio}
          </p>
          <div className="pt-6 mx-10 text-left md:max-w-lg md:m-auto lg:px-10 xl:max-w-xl lg:max-w-2xl">
            <button
              onClick={() => linkToPage("/createnewblog")}
              className="px-4 py-2 mx-2 text-white uppercase bg-blue-500 border-2 border-gray-300 rounded-md"
            >
              Create A Blog
            </button>
          </div>
          <>
            {blogs ? (
              blogs.map((blog, id) => (
                <div
                  key={id}
                  className="flex items-center justify-center mx-3 mt-5"
                  onClick={() => linkToPage(`/blog/${id}`)}
                >
                  <div className="border-4 border-[#C0C0C0] shadow-lg p-3 my-8 rounded-lg w-full max-w-lg ">
                    <h3 className="font-semibold">Title to Blog</h3>
                    <p className="block font-normal truncate">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repellendus nulla tempora corporis perferendis quia
                      laborum iure, expedita suscipit id aspernatur beatae alias
                      natus est at. Eveniet, soluta accusantium? Minima,
                      incidunt.
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="mt-5 text-center">
                You have no content to show. Please create a blog post!
              </p>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default BaseProfile;
