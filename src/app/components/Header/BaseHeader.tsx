import React from "react";
import icon from "@/app/assets/images/logo.jpg";
import Image from "next/image";
type BaseHeaderProps = {
  backgroundColor: string;
  username: string;
};

const BaseHeader: React.FC<BaseHeaderProps> = (props) => {
  const { backgroundColor, username } = props;

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

  return (
    <div
      className={`w-full h-28 flex items-center justify-between px-2`}
      style={headerStyle}
    >
      <div>
        <h1 className="font-bold text-white">The Creative Process</h1>
        <p className="font-bold text-white">@{username} Page</p>
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
