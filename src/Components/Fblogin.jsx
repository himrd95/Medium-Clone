import React from "react";
import FacebookLogin from "react-facebook-login";
import { useDispatch } from "react-redux";
import { fbAuth, fbSuccess } from "../Redux/signup/action";

function Fblogin() {
  const dispatch = useDispatch();
  return (
    <div>
      <FacebookLogin
        appId="717873175756572"
        // autoLoad={true}
        fields="name,email,picture"
        callback={fbAuth}
        onClick={() => dispatch(fbSuccess(true))}
      />
    </div>
  );
}

export default Fblogin;
