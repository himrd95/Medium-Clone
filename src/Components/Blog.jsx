import React, {useEffect, useState} from 'react'
import { BlogNavbar } from './BlogNavbar'
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import styles from "../Components/Styling/BlogPage.module.css"
import { BlogContent } from './BlogContent'
import { BlogStories } from './BlogStories'
import { BlogFooter } from './BlogFooter'
import { fetchTrending } from "../Redux/trendings/actions"
import { handleLikeButton } from "./Utils/BlogResponse.js"


const Blog = () => {
    const [datas, setDatas] = useState([]);
    const [add, setAdd] = useState(0)
    const [allData, setAllData] = useState([]);
    const [clicked, setClicked] = useState(false);
    const details = useSelector(state => state.trend.details)
    const params = useParams()
    const ID = Number(params.id)
    const dispatch = useDispatch()

    useEffect(() => {
        if(details !== undefined){
        const post = details.data.filter((items) => items.id === ID)
        setAllData(details.data)
        setDatas(post[0])
        if(post[0] !== undefined){
            setAdd(post[0].likes)
        }
        }
    }, [details]);

    useEffect(() => {
        dispatch(fetchTrending())
    }, [dispatch])

    const reload = () => {
        dispatch(fetchTrending())
    }

const handleLike = () => {
    clicked? setAdd(add => add + 1) : setAdd(add => add - 1)
    let count = Math.abs(datas.likes)
    count = clicked? datas.likes++ : datas.like--
    console.log(count)
    console.log(datas.likes)
    const payload = {
        ...datas,
        likes : count
    }
    handleLikeButton(payload, datas.id)
    setClicked(!clicked)
}

return datas === undefined || datas.length === 0 ? ( <div></div>
    ):(
    <>
        <BlogNavbar />
        <div className = {styles.blog}>
            <BlogContent content = {datas} handleLike = {handleLike} add = {add} reload = {reload} />
            <BlogStories allData = {allData} />
            <BlogFooter />
        </div>
    </>
)
}

export {Blog}