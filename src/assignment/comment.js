import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Comment(props){
    console.log('Comment',props.comment)
    console.log('post',props.posts)
    console.log('user',props.users)
    return(
        <div>
           
            <h2>User Name :- { props.users && props.users.name} </h2>
            <h3>Title :- {props.posts && props.posts.title}</h3>
            <h4>Body :- {props.posts && props.posts.body}</h4>
            <hr />
            <h4>
                Comment :- {props.comment.map(com => {
                    return <li key={com.id}> {com.body}</li>
                })}
            </h4>
            <Link to={`/users/${props.users.id}`}>More Post of author : { props.users && props.users.name}</Link>
        </div>
    )
}

const mapStateToProps = (state,props) => {
    return {
        comment : state.comment.filter(comm => comm.postId == props.match.params.id),
        users : state.users.find(user => {
            const a = state.posts.find(post => post.id == props.match.params.id).userId
            return user.id === a
        }),

        posts : state.posts.find(post => post.id == props.match.params.id)
    }
}
export default connect(mapStateToProps)(Comment)

//            
//             <h3>COMMENTS : {props.comments.map(comment => {
//                 return <li key={comment.id}>{comment.body}</li>
//             })}</h3>
//             <Link to={`/users/${props.user.id}`}>More Post of author : {props.user.name}</Link>
//         </div>
//     )
// }

// const mapStateToProps = (state, props) => {
//     return {
//         user: state.users.find(user => {
//             const userId = state.posts.find(post => post.id == props.match.params.id).userId
//             return user.id === userId
//         }),
//         post: state.posts.find(post => post.id == props.match.params.id),
//         comments: state.comments.filter(comment => comment.postId == props.match.params.id)
//     }
// }
