import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Bottomleft from './BottomLeft'
import BottomRight from './BottomRight'
import { fetchTrending } from "../Redux/trendings/actions.js"

const Bottom = () => {
    const data = useSelector(state=>state.trend.details.data)
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchTrending())
    }, [dispatch]);
    
    return (
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
            <div>
                {data.map((item)=>(
                    <Bottomleft key ={item.id} {...item}/>
                ))}
            </div>
            
            <BottomRight/>
        </div>
    )
}

export default Bottom
