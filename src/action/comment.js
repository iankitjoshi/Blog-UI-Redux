const axios =  require('axios')

export const setComment = (comment) => {
    return {type : 'SET_COMMENT' , payload : comment}
} 


export const startGetComment = () => {
    return(dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
            const comment = response.data
            dispatch(setComment(comment))
        })
    }
}