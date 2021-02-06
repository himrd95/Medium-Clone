import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { fetchPostedData } from "../Redux/blog/action";
import { Navbar } from "../Routes/NavbarInput";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    margin: "100px 200px 0px 550px",
  },
});

function Show() {
  const classes = useStyles();
  let details = useSelector((state) => state.blog.details);
  console.log(details);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchPostedData());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      {details.map((item) => (
        <Card className={classes.root} key={item.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={item.title}
              height="200"
              image={item.file}
              title={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {/* {item.content} */}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default Show;
