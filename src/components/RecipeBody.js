import React from 'react';
import ReactLoading from 'react-loading';
import Recipe from './Recipe';
import './RecipeBody.css';

const RecipeBody = ({ isLoading, recipes }) => {
  if (isLoading) return <ReactLoading className="center" type="spokes" />;
  if (recipes.length === 0) return <div className="tc white">Recipe empty</div>;
  return (
    <div className="recipe-body justify-center">
      {recipes.map(({ id, image, title }) => (
        <Recipe id={id} key={id} image={image} title={title} />
      ))}
    </div>
  );
};

export default RecipeBody;
