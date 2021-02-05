import axios from "axios"

export const handleLikeButton = (data, id) => {
      return axios.put(`https://protected-mesa-68876.herokuapp.com/medium/${id}`,{
          ...data,
      })
}

export const postResponse = (payload, id) => {
    return axios.put(`https://protected-mesa-68876.herokuapp.com/medium/${id}`,{
        ...payload
    })
}

export const getResponse = (id) => {
    return axios.get(`https://protected-mesa-68876.herokuapp.com/medium/${id}`)
}

export const userAuth = () => {
    let user = localStorage.getItem("auth")
    return user
}

export const getUser = () => {
    return axios.get(`https://protected-mesa-68876.herokuapp.com/users/1`)
}

