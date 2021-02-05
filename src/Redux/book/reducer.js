import {
    BOOK_SUC
} from "./actionTypes"


const bookReducer = (state, {type}) => {
    switch(type){
        case BOOK_SUC : {
            return{
                ...state
            }
        }
        default:
        return state
    }
}

export {bookReducer}