import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SideNavbar from "../Components/SideNavbar";
import styles from "../Components/Styling/NavbarInput.module.css";

const Navbar = ({ handlePublish }) => {
  const data = useSelector((state) => state.signup.data);
  //   console.log(data);
  const [open, setOpen] = React.useState(false);
  return (
    <div className={styles.nav} >
      <div className={styles.nav_logo}>
        <Link to={"/"}>
          <img src="https://cdn.svgporn.com/logos/medium.svg" alt="logo" />
        </Link>
      </div>
      <div className={styles.nav_links}>
        <button className={styles.publishBtn} onClick={handlePublish}>
          Publish
        </button>
        <button className={styles.options}>...</button>
        <button className={styles.bell}>
          <i class="far fa-bell"></i>
        </button>
        <button className={styles.profilePic}>
          <img
            src={data.imageUrl}
            alt="profile_pic"
            onClick={() => setOpen((prev) => !prev)}
            style={{
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              //   margin: "15px 0px 10px 0px",
              textAlign: "left",
            }}
          />
        </button>
      </div>
      {open && <SideNavbar />}
    </div>
  );
};

export { Navbar };
