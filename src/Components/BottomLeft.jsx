import React from 'react'
import { FaStar,FaRegBookmark} from "react-icons/fa";
import styles from "./Styling/Bottom.module.css"
const Bottomleft = (props) => {
    const{first_name,last_name,avatar,mainimg,dis,title,readtime}=props
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <div className={styles.profilepic}>
                    <img src={avatar} alt="profile"></img>
                    <p>{`${first_name} ${last_name}`}</p>
                </div>
                <div className={styles.title}>
                    <h2>{title}</h2>
                    <p>{dis}</p>
                    
                </div>
                <div className={styles.time}>
                    <div style={{display:"flex",alignItems:"center"}}>
                        <p>{`Feb 5 .  ${readtime}`}</p>
                        <FaStar style={{width:"10px",marginLeft:"6px",color: "#757575"}}/>
                    </div>
                    <div><FaRegBookmark/></div>
                </div>
            </div>
            <div className={styles.mainimg}>
                <img src={mainimg} alt="mainimg"></img>
            </div>
        </div>
    )
}

export default Bottomleft
