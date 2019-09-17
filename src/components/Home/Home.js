import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import "./Home.css";
import store, { DELETE_RECIPE } from '../../store'

class Home extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState()
    this.state = {
      recipes: reduxState.recipes
    };
  }

  componentDidMount = () => {
    store.subscribe(() => {
      const reduxState = store.getState()
      this.setState({
        recipes: reduxState.recipes
      })
    })
  }

  deleteRecipe = (id) => {
    store.dispatch({
      type: DELETE_RECIPE,
      payload: id
    })
  }
 
  render() {
    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          key={i}
          uniqId={i}
          name={recipe.recipeName}
          category={recipe.recipeCategory}
          authorFirst={recipe.authorFirstName}
          authorLast={recipe.authorLastName}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          deleteRecipe={this.deleteRecipe}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
