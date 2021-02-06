import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styles from "./Styling/Response.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    // margin: 15,
    marginTop: 25,
    backgroundColor: "#FFFFFF",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const ResponseCard = ({ response, profile }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { name, imageUrl } = profile;

  var dateObj = new Date();
  const month = [
    "Jan",
    "Feb",
    "mar",
    "apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var m = dateObj.getUTCMonth();
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  let newdate = day + "-" + month[m] + "-" + year;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img src={imageUrl} alt="img" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={newdate}
      />
      <CardContent className={styles.card_content}>
        <Typography variant="body2" color="textSecondary" component="p">
          {response}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share"></IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        ></IconButton>
      </CardActions>
    </Card>
  );
};
