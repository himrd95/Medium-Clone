import React from "react";
import { Link } from "react-router-dom";
import styles from "./Styling/Navbar.module.css";

const links = [
  {
    to: "/",
    title: "",
  },
  {
    to: "",
    title: "Our Story",
  },
  {
    to: "",
    title: "Membership",
  },
  {
    to: "/write",
    title: "Write",
  },
  {
    to: "/sign-in",
    title: "Sign In",
  },
  {
    to: "/get-started",
    title: "Get Started",
  },
];

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav_logo}>
        <Link to={"/"}>
          <img src="https://cdn.svgporn.com/logos/medium.svg" alt="logo" />
        </Link>
      </div>
      <div className={styles.nav_links}>
        {links.map((lists) => (
          <Link key={lists.to} to={lists.to}>
            {lists.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export { Navbar };
