import React from "react";
import styles from "./Styling/SavedBookmark.module.css";
import { useDispatch, useSelector } from "react-redux";
import { patchFalse } from "../Redux/book/action";
import { getSearch } from "../Redux/signup/action";
import Finalbook from "./Finalbook";
const SavedBookmark = () => {
  const data = useSelector((state) => state.signup.blog);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getSearch());
  }, [dispatch]);

  const handleRm = (id) => {
    dispatch(patchFalse(id));
  };
  return (
    <>
      <Finalbook />
      <div className={styles.card}>
        <div>
          {data
            .filter((item) => item.book === true)
            .map((item) => (
              <div key={item.id}>
                <h2 className={styles.title}>{item.title}</h2>
                <div className={styles.info}>
                  <p>{item.readtime}</p>
                  <p>{item.cats}</p>
                </div>
                <button onClick={() => handleRm(item.id)}>Remove</button>
              </div>
            ))}
          <div className={styles.footer}>
            <div>
              <i class="far fa-minus-square"></i>
              <div>Remove</div>
            </div>
            <div>
              <i class="fas fa-archive"></i>
              <div>Achive</div>
            </div>
          </div>
        </div>
        <img
          src="https://miro.medium.com/fit/c/96/96/1*48-ACISD8gdQufEbmpWqSg.png"
          alt=""
        />
      </div>
    </>
  );
};
export default SavedBookmark;
