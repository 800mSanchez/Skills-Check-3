import React from 'react';
import Nav from '../Nav/Nav';
import './Dashboard.css'

class Dashboard extends React.Component {

    //ONLY COMMENTED OUT BECAUSE OTHERWISE MY SITE WILL START CRASHING...THIS WAS MY ENDPOINT
    /* constructor(){
        super()
        this.state = {
            search: '',
            posts: [],
            myPosts: true,
            loading: true
        }
    }

    componentDidMount(){
        this.getPosts()
    }

    getPosts(){
        let { search, myPosts } = this.state;
    }
 */
    render(){
        return <div>
                <div>
                    <Nav/>
                    <div className='search-box'>
                        <input placeholder="Search"/>
                        <button>Reset</button>
                    </div>
                </div>
        </div>
    }

}

export default Dashboard;