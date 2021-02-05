import React, { useEffect } from 'react'
import styles from "./Styling/BlogPage.module.css"
import { Link } from "react-router-dom"
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { BiLike, BiMessageRounded } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { TemporaryDrawer } from "./Bar"

const BlogContent = ({content, handleLike, add}) => {
    const {dis, para, readtime, likes, id, response} = content
    console.log(content)
    const [state, setState] = React.useState({
        right: false
      });

      const toggleDrawer = (event) => {
          console.log(event);
        if (
          event.type === "keydown" &&
          (event.key === "Tab" || event.key === "Shift")
        ) {
          return;
        }
        setState({ ...state, right: !state.right });
      };

    return (
        <>
        <TemporaryDrawer id = {id} state = {state} toggleDrawer = {toggleDrawer}/>
            <div className = {styles.content}>
                {/* Left content */}
                <div className = {styles.left_nav}>
                    <h2>Public Stories</h2>
                    <h2>News, Updates & Insights from the Public.com Team</h2>
                    <button>follow</button>
                    <br />
                    <br />
                    <hr />
                    <div className = {styles.like_buttons}>
                        <BiLike onClick = {handleLike} /> 
                        <span>{likes}</span>
                    </div>
                    <div className = {styles.like_buttons}>
                        <BiMessageRounded onClick = {(e) => {
                            console.log('called')
                            toggleDrawer(e)
                        }}/>
                        <span>{response.length}</span>
                    </div>
                    <div className = {styles.bookmark}>
                        <BsBookmark />
                    </div>
                </div>

                {/* Main content */}
                <div className = {styles.discription}>
                    <div className = {styles.heading}>
                        <p>{dis}</p>
                    </div>
                    <div className = {styles.content_details}>
                        <div className = {styles.read}>
                            <img src="https://miro.medium.com/fit/c/96/96/1*c5c3KVN_jKPU4IKo4_xhiQ.png" alt="ball"/>
                            <div>
                                <p>Public  <span>follow</span></p>
                                <p className = {styles.grey}>Feb . {readtime}</p> 
                            </div>
                        </div>
                        <div className = {styles.sociallinks}>
                            <Link to = "/twitter.com"><FaTwitter /></Link>
                            <Link to = "/linkedin.com"><FaLinkedin /></Link>
                            <Link to = "/facebook.com"><FaFacebook /></Link>
                            <Link to = "/twitter.com"><BsBookmark /></Link>
                        </div>
                    </div>
                    {/* Paragraph */}
                    <div className = {styles.para}>
                        <p>{para}</p>
                        <div className = {styles.flex}>
                            <div className = {styles.flex_div}>
                                <div className = {styles.like}>
                                    <BiLike onClick = {handleLike}/> 
                                    <p>{likes}</p>
                                </div>
                                <div className = {styles.like}>
                                    <BiMessageRounded onClick = {(e) => {
                                        toggleDrawer(e)
                                    }}/>
                                    <p>{response.length}</p>
                                </div>
                            </div>
                            <div className = {styles.sociallinks}>
                                <Link to = "/twitter.com"><FaTwitter /></Link>
                                <Link to = "/linkedin.com"><FaLinkedin /></Link>
                                <Link to = "/facebook.com"><FaFacebook /></Link>
                                <Link to = "/twitter.com"><BsBookmark /></Link>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </>
    )
}

export { BlogContent }
