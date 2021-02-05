import React from 'react'
import styles from "./Styling/Bottom.module.css"
import {Link} from "react-router-dom"
const bottomright = () => {
    const data=["Self","Relationships","Data Science","Programming",
    "Productivity","Java Script","Machine Learning","Politics","Health"]
    return (
        <div className={styles.topicContainer}>
            <div><h5 style={{fontSize:"12px",letterSpacing:"1px",textAlign:"left"}}>DISCOVER MORE OF WHAT MATTERS TO YOU</h5></div>
            <div className={styles.topicbox}>
                {data.map((item)=>(
                    <div className={styles.topic}>{item}</div>
                ))}
            </div>
            <div className={styles.linkbox}>
                <Link style={{textDecoration:"none",color:"green",fontSize:"14px"}}>See all topics</Link>
            </div>
            
        </div>
    )
}

export default bottomright
