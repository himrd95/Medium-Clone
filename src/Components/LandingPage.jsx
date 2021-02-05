import React, { useEffect } from "react";
import styles from "./Styling/LandingPage.module.css";
import { TrendingStories } from "../Components/TrendingStories";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchTrending } from "../Redux/trendings/actions.js";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Bottom from "./Bottom";
import { Navbar } from "./Navbar";

const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrending());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className={styles.get_started}>
        <div>
          <img
            className={styles.background}
            src="https://miro.medium.com/max/770/1*qcAZgT4Sk37MPSTGBH2KUw.png"
            alt="background"
          />
          <p>Where good ideas find you</p>
          <h3>
            Read and share new perspectives on just about any topic. Everyone’s
            welcome. Learn more.
          </h3>
          <Link to={"/get-started"}>Get Started</Link>
        </div>
      </div>
      <div className={styles.trending}>
        <h5>
          <AiOutlineCheckCircle /> TRENDING ON MEDIUM
        </h5>
        <div>
          <TrendingStories />
        </div>
      </div>
      <Bottom />
    </>
  );
};

export { LandingPage };
