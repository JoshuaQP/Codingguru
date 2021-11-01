import React, { Component } from 'react'
import "./login.css"
import { Link } from 'react-router-dom';
class Login extends Component {
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
                    <h1 className="login-header"> Login</h1>
                </div>
            <div>
                
                <label>USERNAME:</label> <br />
                <input className="login-placeholder"
                type="text" 
                value={this.state.username}
                onChange={this.HandleUsernameChange}                 
                />      
            </div>

            <br />
            <div>

            <label>PASSWORD:</label> <br />
                <input className="login-placeholder"
                type="text" 
                value={this.state.password}
                onChange={this.HandlePasswordChange}                 
                />
            </div>

            <br />

            
            <button className="login-btn" type="submit">Log In</button>
            <div className="sign-up-link">
                <h6> Need an Account?</h6>
                <Link className="login-signup"  to="/signup">Signup now</Link>
            </div>

            </form>
        )
    }
}

export default Login

