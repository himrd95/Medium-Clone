import React from "react";
import styles from "./Styling/BlogNavbar.module.css";
import { Link, useHistory } from "react-router-dom";

const BlogNavbar = () => {
  const history = useHistory();

  const gotoHome = () => {
    history.push("/get-started");
  };
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <img
            src="https://cdn.svgporn.com/logos/medium-icon.svg"
            alt="medium"
            onClick={gotoHome}
          />
          <img
            src="https://miro.medium.com/max/180/1*yAc9nDWxMBvfySCmqxjd_A.png"
            alt="profile"
          />
        </div>
        <div>
          <Link to="/get-started">Get started</Link>
        </div>
      </div>
    </>
  );
};

export { BlogNavbar };
