import React from "react";
import { BsSearch } from "react-icons/bs";
import { BsBookmarks } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import "./Styling/main.css";
import { getProfile, getSearch, googleAuth } from "../Redux/signup/action";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { TrendingStories } from "./TrendingStories";
import styles from "./Styling/LandingPage.module.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import Bottom from "./Bottom";
import SideNavbar from "./SideNavbar";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      padding: "10px",
    },
  },
}));

function Main() {
  const data = useSelector((state) => state.signup.data);
  console.log(data);
  const [query, setQuery] = React.useState("");
  const classes = useStyles();
  const blogs = useSelector((state) => state.signup.blog);
  const dispatch = useDispatch();
  const greetingTime = require("greeting-time");
  const[open,setOpen] = React.useState(false)
  const getBlogs = () => {
    dispatch(getSearch());
  };

  React.useEffect(() => {
    getBlogs();
    dispatch(getProfile());
  }, [dispatch, data]);

  // React.useEffect(() => {
  //   dispatch(getProfile());
  // }, []);

  const history = useHistory();

  const enterPress = (query) => {
    history.push(`/search/${query}`);
  };
  return (
    <div className="main">
      <div className="nav">
        <div className="med">
          <img
            src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
            alt="medium"
          />
          <h2>{greetingTime(new Date())}</h2>
        </div>
        <div className="sec">
          <input type="text" onChange={(e) => setQuery(e.target.value)} />
          <BsSearch className="ico" onClick={() => enterPress(query)} />
          <Link to="/book">
            <BsBookmarks className="ico" />
          </Link>
          <BiBell className="ico" />
          <button className="upgrade">Upgrade</button>
        </div>
        <div onClick={()=>setOpen(prev=>!prev)}>
          <img
            src={data.imageUrl}
            alt="hi"
            style={{
              borderRadius: "50%",
              width: "50px",
              margin: "10px 0px 0px 0px",
              textAlign: "left",
            }}
          />
        </div>
        {open&&<SideNavbar/>}
      </div>
      <div className="flex" onClick={()=>setOpen(false)}>
        <div className="first">
          {blogs
            .filter((item) => item.id <= 1)
            .map((item) => (
              <div key={item.id} className="card">
                <img src={item.mainimg} alt="hi" />
                <h2>{item.title}</h2>
                <h4>{item.dis}</h4>
              </div>
            ))}
        </div>

        <div>
          {blogs
            .filter((item) => item.id <= 4)
            .map((item) => (
              <div key={item.id} className="second">
                <div>
                  <div style={{ display: "flex" }} className="avatar">
                    <img src={item.avatar} alt="avatar" />
                    <p>{item.cats}</p>
                  </div>
                  <div>
                    <h3 style={{ margin: 0 }}>{item.title}</h3>
                    <p style={{ textAlign: "left" }}>{item.readtime}</p>
                  </div>
                </div>
                <div>
                  <img
                    src={item.mainimg}
                    alt="hi"
                    style={{ width: "120px", height: "120px  " }}
                  />
                </div>
              </div>
            ))}
        </div>

        <div className="twitter">
          <img
            src="data:image/png;base64,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"
            alt="medium"
            style={{ width: "50px", height: "40px" }}
          />

          <img
            src="data:image/png;base64,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"
            alt="twitter"
            style={{ width: "50px", height: "40px" }}
          />
          <p style={{ margin: "30px 0px 30px 0px" }}>
            Discover Medium writers you already <br />
            follow on twitter
          </p>
          <button className="twitbtn">
            <img
              src="data:image/png;base64,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"
              alt="twitter"
              style={{ width: "30px", height: "25px", marginTop: "5px" }}
            />
            <p>Connect to twitter</p>
          </button>
          <div>
            <Link>Maybe Later</Link>
          </div>
          <div>
            <h3>Topics you follow</h3>
          </div>

          <div className={classes.root}>
            <div>
              <Button variant="contained">Javascript</Button>
              <Button variant="contained">Programming</Button>
            </div>
            <div>
              <Button variant="contained">React</Button>
              <Button variant="contained">Data Science</Button>
            </div>
          </div>
        </div>
      </div>

      <br />
      <hr />

      <div className={styles.trending}>
        <h5>
          <AiOutlineCheckCircle /> TRENDING ON MEDIUM
        </h5>
        <div>
          <TrendingStories />
        </div>
      </div>

      <Bottom />
    </div>
  );
}

export default Main;
