import React from "react";
import Link from "next/link";

const ProfileContent: React.FC = () => {
  return (
    <div className="h-full mt-[84px]">
      <div>
        <h2 className="text-lg font-semibold text-center mt-7">Josh Date</h2>
        <p className="pt-4 mx-10 text-center md:max-w-lg md:m-auto lg:px-10 xl:max-w-xl lg:max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          voluptatum nisi repellendus distinctio aliquid perspiciatis dolorem
          sed. Nisi vel quibusdam assumenda delectus minima vero! Neque
          inventore sed dignissimos at fugit!
        </p>
        <div className="flex items-center justify-center mx-3 mt-8">
          <div className="border-4 border-[#C0C0C0] shadow-lg p-3 my-8 rounded-lg w-full max-w-lg ">
            <h3 className="font-semibold">Title to Blog</h3>
            <p className="block font-normal truncate">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus nulla tempora corporis perferendis quia laborum iure,
              expedita suscipit id aspernatur beatae alias natus est at.
              Eveniet, soluta accusantium? Minima, incidunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
