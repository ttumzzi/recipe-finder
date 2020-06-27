import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { useParams } from 'react-router-dom';
import getAPIKey from '../const';
import './Info.css';
import Ingredient from '../components/Ingredient';

const Info = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [summary, setSummary] = useState('');

  useEffect(() => {
    const query = `https://api.spoonacular.com/recipes/${id}/information?&apiKey=${getAPIKey()}`;
    (async () => {
      const res = await fetch(query);
      const data = await res.json();
      setTitle(data.title);
      setImage(data.image);
      setIngredients(data.extendedIngredients);
      setSummary(data.instructions);
      setLoaded(true);
    })();
  }, [title]);

  if (!isLoaded) {
    return <ReactLoading className="center" type="spokes" />;
  }
  return (
    <div className="food-main mh7-l mh4-m mh2 mb3 ph5-l ph3 pb5 pt3">
      <div className="information tc title-font f2 ma3">{title}</div>
      <div className="flex">
        <img className="food-image ma3 center br3 grow" src={image} />
      </div>
      <div className="tc ma3 f4 title-font">Ingredients</div>
      <div className="food-ingredient pa4 bg-white br4">
        {ingredients.map((item) => (
          <Ingredient
            id={item.id}
            key={item.id}
            image={item.image}
            name={item.original}
          />
        ))}
      </div>
      <div className="tc ma3 f4 title-font">Recipe Summary</div>
      <div
        className="description pa4 bg-white br4"
        dangerouslySetInnerHTML={{
          __html: summary,
        }}
      />
    </div>
  );
};

export default Info;
