import React, { Component } from "react";
import RecipeCards from "./Components/RecipeCards/RecipeCards";
import { getRecipes } from "./Services/getRecipes";
import { Container } from "@material-ui/core";
import Search from "./Components/Search/Search";

class App extends Component {
  state = {
    getRecipes: [],
    searched: "",
  };
  async componentDidMount() {
    const { data } = await getRecipes();
    this.setState({ getRecipes: data });
  }

  handleChange = ({ currentTarget }) => {
    const searched = currentTarget.value;

    this.setState({ searched });
  };

  render() {
    const { getRecipes, searched } = this.state;
    const filtered = getRecipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searched.toLowerCase())
    );
    return (
      <Container>
        <Search
          value={this.state.searched}
          onChange={this.handleChange}
          name="search"
          placeholder="Search your Favourite Recipe"
        />
        <RecipeCards recipes={filtered} />
      </Container>
    );
  }
}

export default App;
