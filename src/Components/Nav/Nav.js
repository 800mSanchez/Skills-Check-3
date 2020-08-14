import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from './../../ducks/reducer';
import './Nav.css'


function Nav(props) {
    if (props.location !== '/'){
        return (
            <div className='Nav'>
                <div>    
        <p>{props.username}</p>
                </div>
            <div>
             <Link className='Dash' to='/dashboard'>Dash</Link>
             <Link className='New' to='/new'>New</Link>
             <Link className='Logout' to='/' onClick={props.logout}>Logout</Link>
            </div>
        </div>

) 
    } else {
        return null
    }
}
function mapStateToProps(state){
    return state
}

export default withRouter(connect(mapStateToProps, {logoutUser})(Nav));