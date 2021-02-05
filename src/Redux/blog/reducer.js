import {
    GET_DATA_FAILURE,
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    POST_BLOG_FAILURE,
    POST_BLOG_REQUEST,
    POST_BLOG_SUCCESS} from "./actionTypes"

const initState = {
    isError: false,
    isLoading: false,
    details: []
}
export const blogReducer = (state= initState, {type, data}) => {
    switch (type) {
        
        case POST_BLOG_REQUEST:
            return {
                ...state,
                isLoading: true
            }
            
        case POST_BLOG_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        case POST_BLOG_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    isError: true
                }
        case GET_DATA_REQUEST:
            return {
                ...state,
                isLoading: true
            }
            
        case GET_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                details: data
            }
        case GET_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        
        default: return state
    }
}