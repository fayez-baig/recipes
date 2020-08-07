import React from "react";
import RecipeCard from "./RecipeCard/RecipeCard";
import { Grow, Grid } from "@material-ui/core";
import useStyles from "./style";

const RecipeCards = (props) => {
  const classes = useStyles();
  return (
    <Grow in>
      <Grid
        container
        className={classes.container}
        alignItems="stretch"
        spacing={3}
      >
        {props.recipes.map((recipe, i) => (
          <Grid key={i} item sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <RecipeCard recipe={recipe} key={recipe.id} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default RecipeCards;
