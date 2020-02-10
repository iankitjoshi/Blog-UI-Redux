import {createStore , combineReducers , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import usersReducers from '../reducers/users'
import postsReducers from '../reducers/posts'
import commentReducers from '../reducers/comment'


const configureStore = () => {
    const store = createStore(combineReducers({

        users : usersReducers,
        posts : postsReducers,
        comment : commentReducers

    }), applyMiddleware(thunk))
    return store
}

export default configureStore