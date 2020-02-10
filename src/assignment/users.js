import React from 'react' 
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Users(props){
    return(
        <div>
            <br/>
             <h3>Listing User - {props.users.length}</h3>
            <ul>
                {
                    props.users.map(user => {
                        return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                    })
                }
            </ul>
        </div>
    ) 
}

const mapStateToProps = (state) => {
    return {
        users : state.users
    }
}

export default connect(mapStateToProps)(Users)