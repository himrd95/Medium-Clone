import React from 'react'
import styles from "./Styling/BlogFooter.module.css"
import { Redirect} from "react-router-dom"

const redirectHomepage = () => {
    <Redirect exact to = "/" />
}

const BlogFooter = () => {
    return (
        <>
        <div className = {styles.footer_div}>
            <div>
                <h2>
                    Learn more
                </h2>
                <h4>
                    Medium is an open platform where 170 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Learn more
                </h4>
            </div>
            <div>
                <h2>
                    Make Medium yours.
                </h2>
                <h4>
                Follow the writers, publications, and topics that matter to you, and you’ll see them on your homepage and in your inbox. Explore
                </h4>
            </div>
            <div>
                <h2>
                    Share your thinking
                </h2>
                <h4>
                If you have a story to tell, knowledge to share, or a perspective to offer — welcome home. It’s easy and free to post your thinking on any topic. Write on Medium
                </h4>
            </div>
        </div>
        <div className = {styles.footer}>
            <div>
                <img onClick = {redirectHomepage} src="https://miro.medium.com/max/500/1*Ra88BZ-CSTovFS2ZSURBgg.png" alt="medium"/>
            </div>
            <div>
                <p>About</p>
                <p>Help</p>
                <p>Legal</p>
            </div>
        </div>
        </>
    )
}

export { BlogFooter }
