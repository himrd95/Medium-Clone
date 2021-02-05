import React, { useEffect, useState } from "react";
import styles from "./Styling/BlogPage.module.css";
import { useHistory } from "react-router-dom";

const BlogStories = ({ allData }) => {
  const [randomData, setrandomData] = useState([]);
  const history = useHistory();
  let num = Math.floor(Math.random() + 20);
  let min = Math.abs(num - 7);

  useEffect(() => {
    setrandomData(
      allData.filter((items) => items.id <= num && items.id >= min)
    );
  }, []);

  const redirectUser = (id) => {
    history.push(`/blogs/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className={styles.stories}>
        <h3>More From Medium</h3>
        <hr />
      </div>

      <div className={styles.blog_stories}>
        {randomData?.map((items) => (
          <div key={items.id} className={styles.more_blogs}>
            <div className={styles.more_blogs_links}>
              <p onClick={() => redirectUser(items.id)}>{items.title}</p>
              <span>
                {items.first_name} {items.last_name}
              </span>
            </div>
            <div>
              <img src={items.mainimg} alt="avatar" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export { BlogStories };
