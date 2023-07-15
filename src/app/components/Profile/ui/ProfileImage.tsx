import React from "react";
import Image from "next/image";
import placeholderImage from "../../../assets/images/jk-placeholder-image.jpg";
// Will be used in V2
const ProfileImage: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white h-[100px] rounded-t-[100px] absolute  w-32 flex items-center justify-center">
        <div className="relative flex items-center justify-center top-2">
          <Image
            src={placeholderImage}
            alt="Profile Image"
            className="object-cover w-24 h-24 border-4 border-gray-500 rounded-full aspect-auto"
            priority={true}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
