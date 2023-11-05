import React from "react";
import TextIconBlock from "./TextIconBlock";
import textBlocksData from "../../utils/static/textBlocksData";

const TextIconBlocks = () => {
  return (
    <div className="text-icon-blocks-container row mb-4">
      {textBlocksData.map((block, index) => (
        <TextIconBlock
          classNames = "align-items-center col-lg-6 d-flex gap-2 "
          key={index}
          icon={block.icon}
          text={index + 1 + ". " + block.text}
        />
      ))}
    </div>
  );
};

export default TextIconBlocks;
