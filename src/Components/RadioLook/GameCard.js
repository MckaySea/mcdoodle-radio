import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function GameCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.game.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.game.image}
        </Typography>
        <Typography variant="body2" component="p">
          {props.game.songs.join(", ")}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default GameCard;
