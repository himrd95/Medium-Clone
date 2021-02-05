import React from 'react'
import styles from "./Styling/Bookmarks.module.css"
import {Link, Route} from "react-router-dom"
import SavedBookmark from './SavedBookmark'

const links = [
    {
        to : "/book/saved",
        title : "Saved"
    },
    {
        to : "/book/highlights",
        title : "Highlights"
    },
    {
        to : "/book/archived",
        title : "Archived"
    },
    {
        to : "/book/recentlyViewed",
        title : "Recently Viewed"
    }
]
const Bookmarks = () => {

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

                <Route exact path="/book/saved">
                    <SavedBookmark/>
                </Route>
                <Route exact path="/book/archived">
                    <div className={styles.archived}>
                        <img src="https://miro.medium.com/max/270/1*qPUzAXPJBSGCvwG0o8UkQA.png" alt="" />
                        <div>
                            <div>After you’re finished with a saved story,
                            tap the  Archived to store it here.</div>
                            <button className={styles.archived_btn}>Storing worth saving</button>
                        </div>
                        
                    </div>
                </Route>
                <Route exact path="/book/heighlights">
                    
                </Route>
                <Route exact path="/book/RecentlyViewed">
                    <SavedBookmark/>
                </Route>
            </div>
        </>
    )
}
export default Bookmarks