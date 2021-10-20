import React, { Component } from 'react'

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
            
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h1>Sign Up</h1>
                </div>
            <div>
                
                <label>Username:</label>
                <input 
                type="text" 
                value={this.state.username}
                onChange={this.HandleUsernameChange}                 
                />      
            </div>

            <br />
            <div>

            <label>Password:</label>
                <input 
                type="text" 
                value={this.state.password}
                onChange={this.HandlePasswordChange}                 
                />
            </div>
            <div>
             <br />
            <label>Confirm Password:</label>
                <input 
                type="text" 
                value={this.state.password}
                onChange={this.HandlePasswordChange}                 
                />
            </div>

            <br />

            
            <button type="submit">Sign up</button>

            </form>
        )
    }
}

export default Signup
