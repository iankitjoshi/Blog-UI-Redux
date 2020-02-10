const axios = require('axios')

export const setUser = (user) => {
    return { type : 'SET_USER',payload : user}
}

export const startGetUser = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            dispatch(setUser(users))

        })
    }
} 


