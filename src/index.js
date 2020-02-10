import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import App from './App'

import configureStore from './store/configureStore'

import { startGetUser } from './action/users'
import { startGetPost } from './action/posts'
import { startGetComment } from './action/comment'

const store = configureStore()

store.subscribe(() => {
    console.log(store.getState())
})


console.log(store.getState())

store.dispatch(startGetUser())
store.dispatch(startGetPost())
store.dispatch(startGetComment())


const jsx = (
    <Provider store={store}>
        <App />
    </Provider>             
)

ReactDOM.render(jsx , document.getElementById('root'))