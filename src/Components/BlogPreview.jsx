import React, { useEffect } from "react";
import { BlogNavbar } from "./BlogNavbar";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  postBlogData,
  getblogData,
} from "../Components/Utils/blogLocalStorage";
import styles from "./Styling/BlogPage.module.css";
import { BlogContent } from "./BlogContent";
import { BlogStories } from "./BlogStories";
import { BlogFooter } from "./BlogFooter";
import { fetchPostedData } from "../Redux/blog/action";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareButton,
} from "react-share";

const useStyles = makeStyles({
  root: {
    maxWidth: 545,
    margin: "50px auto",
  },
});

const BlogPreview = () => {
  let details = useSelector((state) => state.blog.details);
  const data = useSelector((state) => state.signup.data);
  console.log(details);
  const { userid } = useParams();
  // const ID = Number(params.id)
  // const [imageUrl, setImageUrl] = React.useState("");
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(fetchPostedData());
  }, [dispatch]);

  const history = useHistory();

  const redirectUser = () => {
    history.push(`/my-blog`);
    // dispatch(setRecent(id));
  };
  details = details.reverse();
  // const { title, file, content } = details[details.length - 1];
  const { imageUrl, givenName } = data;
  return (
    <>
      <BlogNavbar />
      <div className={styles.blog}>
        <div className={styles.content}>
          <div className={styles.left_nav}>
            <h2>Public Stories</h2>
            <h2>News, Updates & Insights from the Public.com Team</h2>
            <button>follow</button>
            <br />
            <br />
            <hr />
            {/* <div>{details[details.length - 1]?.title}</div> */}
            {/* <div>{details[details.length - 1]?.content}</div> */}
          </div>

          <div className={styles.preview}>
            <h1>{details[details.length - 1]?.title}</h1>
            <h4>{details[details.length - 1]?.content}</h4>
            <img
              src={details[details.length - 1]?.file}
              alt="bog"
              style={{ width: "800px  " }}
            />
          </div>
        </div>
        <div className={styles.sociallinks} style={{ marginLeft: "1110px  " }}>
          <FacebookShareButton url={window.location.href}>
            <button>
              {" "}
              <i className="fab fa-facebook-f"></i> Share
            </button>
          </FacebookShareButton>
          <TwitterShareButton url={window.location.href}>
            <button>
              {" "}
              <i className="fab fa-twitter"></i> Tweet
            </button>
          </TwitterShareButton>
        </div>
        <hr />
        <BlogStories />
        <BlogFooter />
      </div>
    </>
  );
};
export { BlogPreview };
