import React, { Component } from "react";
import "./Home.css";
import RecipeSearch from "../components/RecipeSearch";
import TagList from "../components/TagList";
import RecipeBody from "../components/RecipeBody";
import getAPIKey from "../APIKEY";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      tagList: [],
      isLoading: false,
      recipes: [],
    };
  }

  handleSearchField = (e) => {
    this.setState({ searchField: e.target.value });
  };

  handleTagList = () => {
    const { tagList, searchField } = this.state;
    if (!tagList.includes(searchField)) {
      this.setState(
        {
          tagList: [...tagList, searchField],
        },
        () => this.handleRecipe()
      );
    }
  };

  handleRecipe = () => {
    const { tagList } = this.state;
    const ingredients = tagList.join(",+");
    const query = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${getAPIKey()}&number=20`;
    this.setState({ isLoading: true });
    fetch(query)
      .then((res) => res.json())
      .then((recipes) => this.setState({ recipes }))
      .then(() => this.setState({ isLoading: false }));
  };

  render() {
    const { tagList, isLoading, recipes } = this.state;
    return (
      <div className="Home">
        <section>
          <div className="searching-bar">
            <RecipeSearch
              changeSearchField={this.handleSearchField}
              addTag={this.handleTagList}
            />
            <TagList tagList={tagList} />
          </div>

          <RecipeBody isLoading={isLoading} recipes={recipes} />
        </section>
      </div>
    );
  }
}

export default Home;
