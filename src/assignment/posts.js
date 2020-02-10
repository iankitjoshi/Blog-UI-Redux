import React from 'react'
import { connect } from 'react-redux' 
import { Link } from 'react-router-dom'


function Posts(props){
    return(
        <div>
            <br />
            <h3>Listing Posts - {props.posts.length}</h3>
            {
                props.posts.map(post => {
                    return <li key={post.id}><Link to={`/post/${post.id}`}>{post.title}</Link></li>
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps)(Posts)