import React, { useEffect, useRef, useState } from "react";
import { postBlog } from "../Redux/blog/action";
import styles from "./Styling/BlogInput.module.css";
import { useDispatch } from "react-redux";
import ImageUploader from "react-images-upload";
import { Navbar } from "../Routes/NavbarInput";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ImageUploading from "react-images-uploading";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "800px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      //   marginTop: 100,
      //   marginLeft: 300,
      margin: "100px auto  ",
    },
  },
}));

export const BlogInput = () => {
  const [title, setTitle] = useState("");
  const [plusBtn, setPlusBtn] = useState(false);
  const [hiddenBtn, setHiddenBtn] = useState(false);
  const [hiddenInput, setHiddenInput] = useState(false);
  const [type, setType] = useState("text");
  const [time, setTime] = React.useState("");
  const [content, setContent] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const subTitleInput = useRef();
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const history = useHistory();
  const [pic, setPic] = React.useState("");
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const classes = useStyles();

  const showOptions = () => {
    setHiddenBtn(!hiddenBtn);
  };

  const fileHandler = (pic) => {
    const url = URL.createObjectURL(pic[0]);
    setImageUrl(url);
    setHiddenInput(false);
    setPic(pic[0]);
  };

  const triggerHandler = (val) => {
    setHiddenBtn(!hiddenBtn);
    setHiddenInput(!hiddenInput);
    setType(val);
  };

  const handlePublish = () => {
    dispatch(postBlog(title, imageUrl, content));
    setShowPopup(!showPopup);
  };

  const previewHandler = () => {
    history.push("/my-blog");
  };
  return (
    <>
      <div
        className={showPopup ? styles.showSuccessPopup : styles.hideSuccesPopup}
        on
      >
        <i class="fas fa-check-circle"></i>
        <h4>Your Blog Was Posted</h4>
        <button className={styles.previewBtn} onClick={previewHandler}>
          Preview Blog
        </button>
      </div>
      <Navbar handlePublish={handlePublish} />
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="filled-basic"
            label="Title"
            variant="filled"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Blog Content"
            onChange={(e) => setContent(e.target.value)}
          />
          <ImageUploader
            className={hiddenInput ? styles.showInput : styles.hideInput}
            withIcon={true}
            buttonText="Choose images"
            onChange={fileHandler}
            file={imageUrl}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />
          <img
            width="60%"
            style={{ margin: " 10px auto" }}
            src={imageUrl}
            alt=""
          />
        </form>
      </div>
    </>
  );
};
