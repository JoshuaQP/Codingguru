import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Signup extends Component {
    constructor(props) {
        super(props);


        this.state = {
            username:"",
            password:"",
            
        };
    }
    HandleUsernameChange = (event) => {
        this.setState ({
            username: event.target.value,
            
        });
    };
    HandlePasswordChange = (event) => {
        this.setState ({
            password: event.target.value,
            
        });
    };
    
    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.password}`);
        event.preventDefault();
    }
    
    render() {
        return (
            
            <form className="login-container" onSubmit={this.handleSubmit}>
                <div>
                    <h1 className="login-header">Sign Up</h1>
                </div>
            <div>
                
                <label>Username:</label> <br/>
                <input className="login-placeholder"
                type="text" 
                value={this.state.username}
                onChange={this.HandleUsernameChange}                 
                />      
            </div>

            <br />
            <div>

            <label>Password:</label> <br />
                <input className="login-placeholder"
                type="password" 
                value={this.state.password}
                onChange={this.HandlePasswordChange}                 
                />
            </div>
            <div>
             <br />
            <label>Confirm Password:</label> <br/>
                <input  className="login-placeholder"
                type="password" 
                value={this.state.password}
                onChange={this.HandlePasswordChange}                 
                />
            </div>

            <br />

            
            <button className="login-btn" type="submit">Sign up</button>
            <div className="sign-up-link">
                <h6>Already have an account?</h6>
                <Link className="login-signup"  to="/login">Login</Link>

            </div>

            </form>
        )
    }
}

export default Signup
