import React from "react";
import "./Styling/main.css";
import { FaStar, FaRegBookmark } from "react-icons/fa";
import { BsBookmarks } from "react-icons/bs";
import { Link, useHistory, useParams } from "react-router-dom";
import { BiBell } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { searchSuc } from "../Redux/search/action";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { patchReq } from "../Redux/book/action";
import Searchright from "./Searchright";

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    maxHeight: 500,
    margin: "50px auto",
  },
});

function Search() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { query } = useParams();

  const data = useSelector((state) => state.search.data);
  console.log(data + "data");
  React.useEffect(() => {
    dispatch(searchSuc(query));
  }, [dispatch]);

  const history = useHistory();

  const redirectUser = (id) => {
    history.push(`/blogs/${id}`);
  };
  return (
    <div>
      <div className="nav">
        <div className="med">
          <img
            src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
            alt="medium"
          />
        </div>
        <div className="sec">
          <Link to="/book">
            <BsBookmarks className="ico" />
          </Link>
          <BiBell className="ico" />
          <button className="upgrade">Upgrade</button>
        </div>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => dispatch(searchSuc(e.target.value))}
          style={{
            width: "700px",
            height: "70px",
            margin: "50px 0px 0px 345px ",
            fontSize: "40px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div className="searchcards">
          {data.map((item) => (
            <Card
              className={classes.root}
              onClick={() => redirectUser(item.id)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="medium"
                  height="140"
                  image={item.mainimg}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.dis}
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
                <FaRegBookmark onClick={() => dispatch(patchReq(item.id))} />
              </CardActions>
            </Card>
          ))}
        </div>
        <div style={{ width: "200px", margin: "100px 100px 0px 100px" }}>
          <Searchright />
        </div>
      </div>
    </div>
  );
}

export default Search;
