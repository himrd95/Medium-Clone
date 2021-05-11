import React from "react";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import { LandingPage } from "../Components/LandingPage";
import { Blog } from "../Components/Blog";
import { BlogInput } from "../Components/BlogInput";
import Main from "../Components/Main";
import { useSelector } from "react-redux";
import Login from "../Components/Login";
import Signin from "../Components/Signin";
import Search from "../Components/Search";
import SavedBookmark from "../Components/SavedBookmark";
import styles from "../Components/Styling/SavedBookmark.module.css";
import { BlogPreview } from "../Components/BlogPreview";
import { Finalbook } from "../Components/Finalbook";
import Show from "../Components/Show";

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
        <Route exact path="/my-blog">
          <BlogPreview />
        </Route>
        <Route exact path="/my-blog/:userid">
          <BlogPreview />
        </Route>
        <Route exact path="/write">
        {isauth ? <BlogInput /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/sign-in">
        {isauth ? <Show /> : <Redirect to="/login" />}
        </Route>
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
        <Route path="/book">
          <Finalbook />
        </Route>
        <Route exact path="/search/:query">
          <Search />
        </Route>
        <Route>
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </>
  );
};

export { Routes };
