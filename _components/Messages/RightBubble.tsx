import React from "react";

const RightBubble = () => {
  return (
    <div className="flex justify-end px-2 py-4 items-center">
      <div className="flex flex-col w-fit h-fit max-w-sm py-3 items-center bg-blue-300 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl justify-center">
        <p className="px-3 max-w-sm">Hello! hope you are doing great</p>
        <p className="text-xs justify-self-start w-full max-w-sm px-3">2.04pm</p>
      </div>
    </div>
  );
};

export default RightBubble;
