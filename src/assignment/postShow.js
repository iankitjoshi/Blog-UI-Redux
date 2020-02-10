import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function PostShow(props){
    console.log('a',props.posts)
    console.log('b',props.users)
    return(
        <div>
            <h3></h3>
            <h3>Post By- {props.users && props.users.name}</h3>
            {
                props.posts.map(post => {
                return <li key={post.id}> <Link to={`/post/${post.id}`}> {post.title}</Link></li>
                })
            }
          
        </div>
    )
}

const mapStateToProps = (state , props) => {
    return {
        users : state.users.find(user => user.id == props.match.params.id),
        posts : state.posts.filter(post => post.userId == props.match.params.id)
    }
}

export default connect(mapStateToProps)(PostShow)

// user : state.users.find(user => user.id == props.match.params.id)
// posts : state.posts.find(post => post.userId == props.match.params.id)
