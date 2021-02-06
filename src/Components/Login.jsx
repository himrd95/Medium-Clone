import React from "react";
import Fblogin from "./Fblogin";
import "./Styling//main.css";
import { IoMdCloseCircle } from "react-icons/io";
import Google from "./Google";
import { useHistory } from "react-router";

function Login() {
  const history = useHistory();
  const closeSign = () => {
    history.push("/");
  };
  return (
    // <div className="signin">
    //   <IoMdCloseCircle className="icon" onClick={closeSign} />
    //   <h2>Join Medium</h2>
    //   <Google />
    //   <Fblogin />

    //   <h3>Already have an Account</h3>
    // </div>
    <div className="signin">
      <div className="form">
        <IoMdCloseCircle className="icon" onClick={closeSign} />
        <h2>Join Medium</h2>
        <Google />
        <Fblogin />

        <h3>Already have an Account</h3>
      </div>
    </div>
  );
}

export default Login;
