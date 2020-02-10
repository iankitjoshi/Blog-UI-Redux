const axios = require('axios')

export const setPost = (post) => {
    return {type : 'SET_POST' , payload : post}
    
} 


export const startGetPost = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data
            dispatch(setPost(posts))
        })
    }
}