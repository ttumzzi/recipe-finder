import React, { useState, useEffect } from 'react';
import './Home.css';
import RecipeSearch from '../components/RecipeSearch';
import TagList from '../components/TagList';
import RecipeBody from '../components/RecipeBody';
import getAPIKey from '../const';

const Home = () => {
  const [searchField, setSearchField] = useState('');
  const [autoCompleteList, setAutoCompleteList] = useState([]);
  const [tagList, setTagList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const handleRecipe = async () => {
    const ingredients = tagList.join(',+');
    const query = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${getAPIKey()}&number=20`;
    setLoading(true);
    const response = await fetch(query);
    const recipe = await response.json();
    setRecipes(recipe);
    setLoading(false);
  };

  const handleTagList = () => {
    if (!tagList.includes(searchField)) setTagList([...tagList, searchField]);
  };

  useEffect(() => {
    handleRecipe();
  }, [tagList]);

  useEffect(() => {
    console.log(autoCompleteList);
  }, [autoCompleteList]);

  return (
    <div className="Home">
      <section>
        <div className="searching-bar">
          <RecipeSearch
            setSearchField={setSearchField}
            setAutoCompleteList={setAutoCompleteList}
            addTag={handleTagList}
          />
          <TagList tagList={tagList} />
        </div>

        <RecipeBody isLoading={isLoading} recipes={recipes} />
      </section>
    </div>
  );
};
export default Home;
