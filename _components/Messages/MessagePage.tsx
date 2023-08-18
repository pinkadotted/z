import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const MessagePage = () => {
  return (
    <div className="flex ">
      <div className="w-2/5 border-2 h-screen overflow-auto">
        <LeftSection />
      </div>
      <div className="w-3/5  h-screen overflow-auto">
        <RightSection />
      </div>
    </div>
  );
};

export default MessagePage;
