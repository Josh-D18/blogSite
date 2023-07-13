import React from "react";
import ProfileImage from "./ui/ProfileImage";
import ProfileContent from "./ui/ProfileContent";

const BaseProfile = () => {
  return (
    <div className="bg-white">
      <ProfileImage />
      <ProfileContent />
    </div>
  );
};

export default BaseProfile;
