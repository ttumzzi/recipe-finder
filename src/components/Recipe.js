import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({ id, image, title }) => {
  return (
    <Link
      to={`/recipe/${id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="w-90 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 grow">
        <div className="tc">
          <img
            src={image}
            className="h4 br-100 w4 dib ba b--white pa2"
            alt={id}
          />
          <h1 className="f3 mb2">{title}</h1>
        </div>
      </div>
    </Link>
  );
};

export default Recipe;
