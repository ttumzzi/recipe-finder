import React from "react";

const RecipeSearch = ({ changeSearchField, addTag }) => {
  return (
    <div className="tc ma3 v-mid">
      <input
        className="input-reset b--black-20 pa2 ma1 w-70 br3"
        placeholder="Add ingredients..."
        onChange={changeSearchField}
      ></input>
      <button
        onClick={addTag}
        className="b--black-20 pa2 ma1 br3 bg-dark-blue white"
      >
        add
      </button>
    </div>
  );
};

export default RecipeSearch;
