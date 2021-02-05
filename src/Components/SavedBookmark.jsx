import React from "react";
import styles from "./Styling/SavedBookmark.module.css";
import { useDispatch, useSelector } from "react-redux";
import { patchFalse } from "../Redux/book/action";
import { getSearch } from "../Redux/signup/action";
// import Finalbook from "./Finalbook";
const SavedBookmark = () => {
  const data = useSelector((state) => state.signup.blog);
  const dispatch = useDispatch();
  // console.log(data)
  React.useEffect(() => {
    dispatch(getSearch());
  }, [dispatch]);

  const handleRm = (id) => {
    dispatch(patchFalse(id));
  };
  return (
    <>
      {data
      .filter((item) => item.book === true)
      .map((item) => (
        <div className={styles.card}>
          <div>
              <div className={styles.title}>{ item.title}</div>
              <div>{ item.des}</div>
              <div className={styles.info}>
                <div>{item.first_name} { item.last_name}</div>
                  <div>12/11/2020</div>
                <div>{item.readtime} </div>
              </div>
              <div className={styles.footer}>
                  <div onClick={()=>handleRm(item.id)}>
                      <i class="far fa-minus-square"></i>
                      <div>Remove</div>
                  </div>
                  <div>
                      <i class="fas fa-archive"></i>
                      <div>Archive</div>
                  </div>
              </div>
            </div>
            <img src={item.mainimg} alt="name"/>
      </div>
      ))}
    </>
  );
};
export default SavedBookmark;
