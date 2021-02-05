import React from "react";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import { LandingPage } from "../Components/LandingPage";
import { Blog } from "../Components/Blog";
import Main from "../Components/Main";
import { useSelector } from "react-redux";
import Login from "../Components/Login";
import Signin from "../Components/Signin";
import Search from "../Components/Search";
import SavedBookmark from "../Components/SavedBookmark";
import styles from "../Components/Styling/SavedBookmark.module.css";
import Bookmarks from "../Components/Finalbook";

const Routes = () => {
  const isauth = useSelector((state) => state.signup.isauth);
  var history = useHistory();
  React.useEffect(() => {
    if (isauth && window.location.pathname === "/login") {
      history.push("/get-started");
    }
  }, [isauth]);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/our-story"></Route>
        <Route exact path="/membership"></Route>
        <Route exact path="/write"></Route>
        <Route exact path="/sign-in"></Route>
        <Route exact path="/get-started">
          {isauth ? <Main /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/blogs/:id">
          <Blog />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/book">
          <Bookmarks />
        </Route>
        <Route exact path="/search/:query">
          <Search />
        </Route>
        <Route exact path="/blogs/:id">
          <Blog />
        </Route>
        {/* <Route exact path="/blog/saved">
          <SavedBookmark />
        </Route>
        <Route exact path="/blog/archived">
          <Bookmarks />
          <div className={styles.archived}>
            <img
              src="https://miro.medium.com/max/270/1*qPUzAXPJBSGCvwG0o8UkQA.png"
              alt=""
            />
            <div>
              <div>
                After you're finished with a saved story, tap the Archived to
                store it here.
              </div>
              <button className={styles.archived_btn}>
                Storing worth saving
              </button>
            </div>
          </div>
        </Route>
        <Route exact path="/blog/heighlights">
          <Bookmarks />
        </Route>
        <Route exact path="/blog/RecentlyViewed">
          <SavedBookmark />
        </Route> */}
        <Route>
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </>
  );
};

export { Routes };
