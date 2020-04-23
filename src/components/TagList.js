import React from "react";
import Tag from "./Tag";

const TagList = ({ tagList }) => {
  return (
    <div className="tc">
      {tagList.length > 0 &&
        tagList.map((item, idx) => <Tag key={idx} name={item} />)}
    </div>
  );
};

export default TagList;
