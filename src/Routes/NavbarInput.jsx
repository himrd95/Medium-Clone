import React, { useState } from 'react'
import { Link } from "react-router-dom"
import  styles  from "../Components/Styling/NavbarInput.module.css"


const Navbar = ({ handlePublish }) => {
    
    return (
        <div className = {styles.nav}>
            <div className = {styles.nav_logo}>
                <Link to = {"/"} ><img src = "https://cdn.svgporn.com/logos/medium.svg" alt = "logo"/></Link>
            </div>
            <div className={styles.nav_links}>
                <button className={styles.publishBtn}
                    onClick={handlePublish}>Publish</button>
                <button className={styles.options}>...</button>
                <button className={styles.bell}><i class="far fa-bell"></i></button>
                <button className={styles.profilePic}><img src="" alt="profile_pic"/></button>
            </div>
        </div>
    )
}

export { Navbar }