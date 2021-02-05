import React, {useEffect} from 'react'
import { BlogNavbar } from './BlogNavbar'
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { postBlogData, getblogData } from "../Components/Utils/blogLocalStorage"
import styles from "./Styling/BlogPage.module.css"
import { BlogContent } from './BlogContent'
import { BlogStories } from './BlogStories'
import { BlogFooter } from './BlogFooter'
import { fetchPostedData } from "../Redux/blog/action"


const BlogPreview = () => {
const details = useSelector(state => state.blog.details)
// const params = useParams()
// const ID = Number(params.id)
// const { data, isLoading } = details
const dispatch = useDispatch()
// console.log()
const {title, file, fields, time} = details[details.length-1]
useEffect(() => {
    dispatch(fetchPostedData())
}, [dispatch])

// if(!isLoading) {
//     const post = data.filter((item) => item.id === ID)
//     postBlogData(post[0])
// }
// const blog = getblogData(ID)
// console.log(blog)

return ( 
    <>
        <BlogNavbar />
        <div className = {styles.blog}>
        <div className = {styles.content}>
                <div className = {styles.left_nav}>
                    <h2>Public Stories</h2>
                    <h2>News, Updates & Insights from the Public.com Team</h2>
                    <button>follow</button>
                    <br />
                    <br />
                    <hr />
                    <div>hi</div>
                    <div className = {styles.like_buttons}>
                        <BiLike /> 
                        <span>1k</span>
                    </div>
                    <div className = {styles.like_buttons}>
                        <BiMessageRounded />
                        <span> 8</span>
                    </div>
                    <div className = {styles.bookmark}>
                        <BsBookmark />
                    </div>
                </div>
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
                    <div className = {styles.para}>
                        <p>{para}</p>
                        <div className = {styles.flex}>
                            <div className = {styles.flex_div}>
                                <div className = {styles.like}>
                                    <BiLike /> 
                                    <p>1k</p>
                                </div>
                                <div className = {styles.like}>
                                    <BiMessageRounded />
                                    <p> 8</p>
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
            <BlogContent content = {blog}/>
            <BlogStories />
            <BlogFooter />
        </div>
    </>
)
}
export {BlogPreview}