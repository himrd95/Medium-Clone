import React from 'react'
import styles from "./Styling/Bookmarks.module.css"
import {Link} from "react-router-dom"
// import SavedBookmark from './SavedBookmark'
const links = [
    {
        to : "/saved",
        title : "Saved"
    },
    {
        to : "/highlights",
        title : "Highlights"
    },
    {
        to : "/archived",
        title : "Archived"
    },
    {
        to : "/recentlyViewed",
        title : "Recently Viewed"
    }
]
const Finalbook = () => {
    return (
        <>
            <div className={styles.container}>
                <h2>Reading list</h2>
                <div className={styles.headers}>
                {
                    links.map((lists) => (
                        <Link
                            className={styles.links} key={lists.to} to={lists.to}
                        >
                            {lists.title}
                        </Link>
                    ))
                }
                </div>

            </div>
        </>
    )
}
export default Finalbook