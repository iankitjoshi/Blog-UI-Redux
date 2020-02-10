import React from 'react'
import { BrowserRouter , Route , Link , Switch } from 'react-router-dom'
import Home from './Home'
import Users from './assignment/users'
import Posts from './assignment/posts'
import PostShow from './assignment/postShow'
import Comment from './assignment/comment'

function App(props){
  return(
    <div>
      <BrowserRouter>
      <br/> <br/> <br/>
      <Link to="/">Home |</Link>
      <Link to="/users">Users |</Link>
      <Link to="/posts">Posts |</Link>
      
      <Route path="/" component={Home} exact={true} />
      <Route path="/users" component={Users} exact={true}/>
      <Route path="/posts" component={Posts} />
      <Route path="/users/:id" component={PostShow} />
      <Route path="/post/:id" component={Comment} />
      </BrowserRouter>
      
    </div>
  )
}

export default App