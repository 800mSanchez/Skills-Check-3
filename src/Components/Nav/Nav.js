import React from 'react';
import { Link } from 'react-router-dom';


function Nav(props) {
    if (props.location !== '/'){
        return (
            <div className='Nav'>
                <div>
                    <div></div>    
        <p>{props.username}</p>
                </div>Nav
            <div>
             <Link to='/dashboard'>Dash</Link>
             <Link to='/new'>New</Link>
             <Link to='/' onClick={props.logout}>Logout</Link>
            </div>
        </div>

) 
    }

}

export default Nav;