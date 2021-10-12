import React, { Component } from 'react'
import "./contact.css";

class Contact extends Component {
    constructor(props) {
        super(props);


        this.state = {
            username:"",
            email:"",
            comments:"",
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
    HandleCommentsChange = (event) => {
        this.setState ({
            comments: event.target.value,
            
        });
    };
    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.email} ${this.state.comments}`);
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
                <label>Comments</label>
                <textarea
                value={this.state.comments}
                onChange={this.HandleCommentsChange} 
                />
            </div>
            <button type="submit">Submit</button>

            </form>
        )
    }
}

export default Contact
