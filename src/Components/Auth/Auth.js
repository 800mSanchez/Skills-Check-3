import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {loginUser} from '../../ducks/reducer';
import './Auth.css';

class Auth extends React.Component {
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            newUser: false
        }

    }
    
    toggle = () => {
        this.setState({
            newUser: !this.state.newUser
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = () => {
        const {email, password} = this.state;
        axios.post('/auth/login', {email, password}).then(res => {
            this.props.loginUser(res.data);
            this.props.history.push('/front_page')
        }).catch(err => {
            console.log(err);
            alert('Login Failed')
        })
    }

    register = () => {
        const {email, password} = this.state;
        axios.post('/auth/register', {email, password}).then(res => {
            this.props.loginUser(res.data);
            this.props.history.push('/front_page');
        }).catch(err => {
            console.log(err);
            alert('Register Failed')
        })
    }
    
    render(){
        const {email, password} = this.state;
        return <div className="auth">
                <div className="auth-container">
                    <h1>Howdy</h1>
                    {!this.state.newUser ?
                    <div>
                       <input onChange={e => this.changeHandler(e)} name="email" type="text" value={email} placeholder="Email"/>
                       <input onChange={e => this.changeHandler(e)} name="password" type="password" value={password} placeholder="Password"/>  
                    <div className="button">
                        <button onClick={this.login}>Login</button>
                        <button onClick={this.toggle}>Sign Up</button>
                    </div>
                </div>
            :
            <div>
                <input onChange={e => this.changeHandler(e)} name="email" type="text" value={email} placeholder="Email"/>
                <input onChange={e => this.changeHandler(e)} name="password" type="password" value={password} placeholder="Password"/>
                <div className="btn-container">
                    <button onClick={this.register}>Register</button>
                </div>
        </div>
    }
    </div>
   </div> 
}
}

const mapStateToProps = state => state;

export default connect (mapStateToProps, {loginUser})(Auth);