import {
    POST_BLOG_FAILURE,
    POST_BLOG_REQUEST,
    POST_BLOG_SUCCESS,
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE
} from "./actionTypes"
import axios from 'axios'

const postBlog_request = () => {
    return {
        type: POST_BLOG_REQUEST
    }
}
const postBlog_success = () => {
    return {
        type: POST_BLOG_SUCCESS,
    }
}
const postBlog_failure = () => {
    return {
        type: POST_BLOG_FAILURE
    }
}

const getDataRequest = () => {
    return {
        type: GET_DATA_REQUEST
    }
}

const getDataSuccess = (data) => {
    return {
        type: GET_DATA_SUCCESS,
        data
    }
}
const getDataFailure = () => {
    return {
        type: GET_DATA_FAILURE
    }
}
export { postBlog_request, postBlog_success, postBlog_failure };


export const postBlog = ( title, file, fields, time) => dispatch => {
    dispatch(postBlog_request())
    axios.post('https://protected-mesa-68876.herokuapp.com/blog', {
        title,
        file,
        fields,
        time
    })
        .then((res) => dispatch(postBlog_success()))
    .catch((err)=>dispatch(postBlog_failure(err)))
}

export const fetchPostedData = () => dispatch => {
    dispatch(getDataRequest)
    axios.get('https://protected-mesa-68876.herokuapp.com/blog')
        .then((res) => {
        dispatch(getDataSuccess(res.data))
    }).catch((err)=>getDataFailure(err))
}