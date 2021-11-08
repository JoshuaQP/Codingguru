import React from 'react';
import { auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import {Link} from "react-router-dom"

class Signup extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            email:"",
            password:"",
            confirmPassword: ""
            
        }
    }
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
    HandleconfirmPasswordChange = (event) => {
        this.setState ({
            confirmPassword: event.target.value,
            
        });
    };
    
    handleSubmit = async event => {
        event.preventDefault();

        const { email, password, confirmPassword } = this.state;

        if(password != confirmPassword) {
            alert("password don't match");
            return;
        } 

        try {
            const {user} = await auth.createUserWithEmailAndPassword( email, password);

         await createUserProfileDocument(user)
         this.setState({
            email:"",
            password:"",
            confirmPassword: ""
         })
        } catch(error) {
            console.log(error);

        }
    };
    
    
    render() {
        const { email, password, confirmPassword } = this.state;
        return (
            
            <form className="login-container" onSubmit={this.handleSubmit}>
                <div>
                    <h1 className="login-header">Sign Up</h1>
                </div>
            <div>
                
                <label>Email:</label> <br/>
                <input className="login-placeholder"
                type="text" 
                value={this.state.email}
                onChange={this.HandleEmailChange}                 
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
                value={this.state.confirmPassword}
                onChange={this.HandleconfirmPasswordChange}                 
                />
            </div>

            <br />

            
            <button className="login-btn" type="submit"
            onChange={this.handleSubmit}
            >Sign up</button>
            <div className="sign-up-link">
                <h6>Already have an account?</h6>
                <Link className="login-signup"  to="/login">Login</Link>

            </div>

            </form>
        )
    }
}

export default Signup
