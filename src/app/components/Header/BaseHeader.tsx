import React from "react";
import icon from "@/app/assets/images/logo.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

type BaseHeaderProps = {
  backgroundColor: string;
  username: string;
};

const BaseHeader: React.FC<BaseHeaderProps> = (props) => {
  const { backgroundColor, username } = props;
  const router = useRouter();

  const renderBackgroundColor = () => {
    if (backgroundColor === undefined || backgroundColor === "") {
      return "#149c81";
    } else {
      return backgroundColor;
    }
  };

  const headerStyle = {
    backgroundColor: renderBackgroundColor(),
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    router.push("/");
  };

  return (
    <div
      className={`w-full h-30 flex items-center justify-between px-8`}
      style={headerStyle}
    >
      <div>
        <h1 className="mt-3 font-bold text-white">The Creative Process</h1>
        <p className="font-bold text-white">@{username}</p>
        <button
          className="px-4 py-2 my-2 text-white uppercase bg-blue-500 border-2 border-gray-300 rounded-md"
          onClick={() => handleLogout()}
        >
          Log Out
        </button>
      </div>
      <Image
        src={icon}
        alt="Profile Image"
        className="object-cover w-20 h-20 border-2 border-gray-500 rounded-full aspect-auto"
        priority={true}
        placeholder="blur"
      />
    </div>
  );
};
export default BaseHeader;
