import React, { Component } from 'react';
import "./settings.css";

class Settings extends Component {
    constructor(props) {
        super(props);


        this.state = {
            username:"",
            email:"",
            password:"",
        };
    }
    HandleUsernameChange = (event) => {
        this.setState ({
            username: event.target.value,
            
        });
    };
    HandleEmailChange = (event) => {
        this.setState ({
            email: event.target.value,
            
        });
    };
    HandlePasswordChange = (event) => {
        this.setState ({
            password: event.target.value,
            
        });
    };
    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.email} ${this.state.password}`);
        event.preventDefault();
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Name</label>
                <input 
                type="text" 
                value={this.state.username}
                onChange={this.HandleUsernameChange}                 
                />      
            </div>

            <br />
            <div>

            <label>Email</label>
                <input 
                type="text" 
                value={this.state.email}
                onChange={this.HandleEmailChange}                 
                />
            </div>

            <br />

            <div>
                <label>Password</label>
                <input
                tyype="text"
                value={this.state.password}
                onChange={this.HandlePasswordChange} 
                />
            </div>
            <button type="submit">Submit</button>

            </form>
        )
    }
}
  
 
export default Settings ;