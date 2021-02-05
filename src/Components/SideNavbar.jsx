import React from "react";
import styles from "./Styling/sidenavbar.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { googleAuth } from "../Redux/signup/action";
const SideNavbar = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.signup.data);
  return (
    <div className={styles.sidebar}>
      <div className={styles.userblock}>
        <img className={styles.userpic} src={data.imageUrl} alt="userpic"></img>
        <div>
          <p>
            {`${data.givenName}
            ${data.familyName}`}
          </p>
          <p style={{ color: "#757575", fontSize: "14px", marginTop: "-10px" }}>
            {data.email}
          </p>
        </div>
      </div>
      <div className={styles.stories}>
        <Link className={styles.storylink} to="/write">
          Write a story
        </Link>
        <Link className={styles.storylink} to="">
          Stories
        </Link>
        <Link className={styles.storylink} to="">
          Stats
        </Link>
        <Link className={styles.storylink} to="">
          Design your profile
        </Link>
        <Link className={styles.storylink} to="">
          Settings
        </Link>
      </div>
      <div className={styles.reading}>
        <Link className={styles.storylink} to="">
          Reading list
        </Link>
        <Link className={styles.storylink} to="">
          Publications
        </Link>
        <Link className={styles.storylink} to="">
          Control Your Recommendations
        </Link>
        <Link className={styles.storylink} to="">
          Medium Partner Program
        </Link>
      </div>
      <div className={styles.signout}>
        <Link className={styles.storylink} style={{ color: "green" }} to="">
          Become a member
        </Link>
        <Link className={styles.storylink} to="">
          Help
        </Link>
        <Link
          className={styles.storylink}
          to="/"
          onClick={() => dispatch(googleAuth(false))}
        >
          Sign out
        </Link>
      </div>
      <div className={styles.privacy}>
        <Link className={styles.storylink} style={{ fontSize: "12px" }} to="">
          Privacy
        </Link>
        <Link
          className={styles.storylink}
          style={{ fontSize: "12px", marginLeft: "10px" }}
          to=""
        >
          Terms
        </Link>
      </div>
    </div>
  );
};

export default SideNavbar;
