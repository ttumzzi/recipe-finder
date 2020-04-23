import React from "react";
import "./Tag.css";

const Tag = ({ name }) => {
  return (
    <span className="f5 grow br-pill ph3 pv2 ma2 dib white bg-orange">
      {name}
    </span>
  );
};

export default Tag;
