import React from "react";
import {
  Typography,
  CardActionArea,
  CardContent,
  CardMedia,
  Card,
  IconButton,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import useStyles from "./style";

const RecipeCard = ({ recipe: { name, image, description } }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea target="_blank">
        <CardMedia className={classes.media} image={image} title={name} />
        <div className={classes.details}></div>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {name}
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RecipeCard;
