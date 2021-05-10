import React from "react";
import { GoogleLogin } from "react-google-login";
import { googleAuth, setUser } from "../Redux/signup/action";
import { useDispatch } from "react-redux";
import "./Styling/signin.css";
function Google() {
  const dispatch = useDispatch();
  return (
    <div>
      <GoogleLogin
        clientId="557307752378-760brtdpuod7pae3vk6kmb1lki9i2cl9.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={(res) => {
          dispatch(googleAuth(true));
          console.log(res.profileObj);
          dispatch(setUser(res.profileObj));
        }}
        cookiePolicy={"single_host_origin"}
        // isSignedIn={true}
        className="signbtn"
      />
    </div>
  );
}

export default Google;
