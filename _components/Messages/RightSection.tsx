import React from "react";
import RightHeader from "./RightHeader";
import RightFooter from "./RightFooter";
import RightContent from "./RightContent";

const RightSection = () => {
  return (
    <div>
      <div className="flex sticky top-0 bg-white bg-opacity-60 backdrop-blur-sm z-10">
        <RightHeader />
      </div>
      <RightContent />
      <div className="flex sticky bottom-0 bg-white">
        <RightFooter />
      </div>
    </div>
  );
};

export default RightSection;
