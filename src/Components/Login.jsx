import React from "react";
import Fblogin from "./Fblogin";
import "./Styling//main.css";
import { IoMdCloseCircle } from "react-icons/io";
import Google from "./Google";

function Login() {
  return (
    <div className="signin">
      <IoMdCloseCircle className="icon" />
      <h2>Join Medium</h2>
      <Google />
      <Fblogin />

      <h3>Already have an Account</h3>
    </div>
  );
}

export default Login;
