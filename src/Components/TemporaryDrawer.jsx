import React,{useState, useEffect}  from "react";
import { ResponseCard } from "./ResponseCard"
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import { getResponse, postResponse } from "./Utils/BlogResponse.js"
import styles from "./Styling/Response.module.css"
import { getUser } from "./Utils/BlogResponse.js"


const useStyles = makeStyles( (theme) => ({
  list: {
    MinWidth : 300,
    maxWidth: 320,
    backgroundColor : "#F5F5F5"
  },
  fullList: {
    width: "auto"
  },
  root: {
    backgroundColor: 'green',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const TemporaryDrawer = ({state, toggleDrawer, id}) => {
  const classes = useStyles();
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [comment, setComment] = useState("");
    const [data, setData] = useState({});
    const [response, setResponse] = useState([]);
    const [load, setLoad] = useState(true);
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        handleResponse()
        userDetails()
    }, []);

    const userDetails = () => {
        getUser()
        .then((res) => {
            setProfile(res.data.profileObj)
            setLoad(false)
        })
        .catch(err => console.log(err))
    }

    const handleResponse = () => {
        getResponse(id)
        .then((res) => {
            setData(res.data)
            setResponse(res.data.response)
            setIsLoading(false)
        })
    }

    const postData = () => {
        const payload = {
            ...data,
            response : [...response, comment]
        }
        postResponse(payload, data.id )
        .then(res => handleResponse())
    }

    const list = (anchor) => (
      <>
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === "top" || anchor === "bottom"
        })}
        role="presentation"
        onClick={() => {toggleDrawer(anchor, false)}}
        onKeyDown={() => {toggleDrawer(anchor, false)}}
        style = {{minWidth: "320px", maxWidth:"320px"}}
      />
      <div className = {styles.slidebar}>
          <h1>Response {`(${response.length})`}</h1>
          <div className = {styles.form} onClick = {() => setHidden(!hidden)}>
              <textarea type="text" style = {hidden? {height : "20px"} : {height : "40px"}}
              placeholder = "What are your thoughts?"
              onChange = {(e) => setComment(e.target.value)}

              />
              <div className = {styles.form_btn} style = {hidden? {display : "none"} : {display : "flex"}}>
              <Button onClick = {() => setHidden(!hidden)} variant="contained" color = "">Cancel</Button>
                <Button onClick = {postData} variant="contained" color = "primary">Respond</Button>
              </div>
          </div>
          {
            !load && response?.map((items) => (
              <div>
              <ResponseCard key = {items} response = {items} profile = {profile}/>

              </div>
            ))
          }
      </div>
      </>
    );


  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button>hello</Button> */}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={() => {toggleDrawer(anchor, false)}}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export { TemporaryDrawer }
