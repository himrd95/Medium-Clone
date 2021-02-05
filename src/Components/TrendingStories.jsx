import React from "react";
import styles from "./Styling/LandingPage.module.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

const TrendingStories = () => {
  const details = useSelector((state) => state.trend.details);
  const { data, isLoading } = details;
  const history = useHistory();

  const redirectUser = (id) => {
    history.push(`/blogs/${id}`);
  };

  return isLoading ? (
    <div style={{ width: "fitContent", margin: "auto" }}>
      <CircularProgress />
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        width: "fitContent",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {data
        .filter((items) => items.id <= 6)
        .map((items) => (
          <div className={styles.trending_stories} key={items.id}>
            <div>
              <h1>0{items.id}</h1>
            </div>
            <div>
              <div className={styles.profile}>
                <img
                  src="https://miro.medium.com/fit/c/20/20/1*bKNfMnWF8zzHKUPo9jminQ.png"
                  alt="profile"
                />
                <p>
                  {" "}
                  {items.first_name} <span>in</span> People{" "}
                </p>
              </div>
              <div>
                <h3
                  style={{ margin: 0 }}
                  onClick={() => redirectUser(items.id)}
                >
                  {items.title}
                </h3>
              </div>
              <p>
                <span>Feb 4 · {items.readtime}</span>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export { TrendingStories };
