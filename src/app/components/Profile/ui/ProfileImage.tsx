import React from "react";
import Image from "next/image";
import placeholderImage from "../../../assets/images/jk-placeholder-image.jpg";
const ProfileImage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white h-[100px] rounded-t-[100px] absolute  w-32 flex items-center justify-center">
        <div className="flex items-center justify-center relative top-2">
          <Image
            src={placeholderImage}
            alt="Profile Image"
            className="border-4 border-gray-500 rounded-full w-24 h-24 object-cover aspect-auto"
            priority={true}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
