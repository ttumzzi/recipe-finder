import React from 'react';

const ingredient = ({ image, name }) => {
  return (
    <div className="center tc">
      <div className="ingredient-image grow">
        <img
          className="pa2"
          src={`https://spoonacular.com/cdn/ingredients_100x100/${image}`}
          alt={name}
        />
      </div>
      <div className="ingredient-name tc">{name}</div>
    </div>
  );
};

export default ingredient;
