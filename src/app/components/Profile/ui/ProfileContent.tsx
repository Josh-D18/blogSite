import React from "react";
import Link from "next/link";

const ProfileContent = () => {
  return (
    <div className="h-full mt-[84px]">
      <div>
        <h2 className="font-semibold text-center mt-7 text-lg">Josh Date</h2>
        <p className="text-center pt-4 md:px-5 lg:px-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          voluptatum nisi repellendus distinctio aliquid perspiciatis dolorem
          sed. Nisi vel quibusdam assumenda delectus minima vero! Neque
          inventore sed dignissimos at fugit!
        </p>
        <div className="mt-8 flex items-center justify-center mx-3">
          <div className="border-4 border-[#C0C0C0] shadow-lg p-3 my-8 rounded-lg w-full md:max-w-lg">
            <h3 className="font-semibold">Title to Blog</h3>
            <p className="font-normal truncate block">
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
