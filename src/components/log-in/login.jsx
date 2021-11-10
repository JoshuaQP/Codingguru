import "./login.css"
import React, { Component } from 'react';
import {signInWithGoogle} from '../../firebase/firebase.utils'
class Login extends Component {
    constructor(props) {
        super(props);
    

    this.state = {
        email: '',
        password: ''
    }
}
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email:'', password:''})
    }

    handleChange = event => {
     const { value, name } = event.target; 
     this.setState({ [name]: value })  
    }
    

    render() {
       return(
           <div className='sign-in'>
               

            <form className="login-container"
             onSubmit={this.handleSubmit}>
            
            <span>Sign in with your Email and password</span> <br/>
            <label> Email</label> <br/>
                <input className="login-placeholder"
                name="email"
                type= "email"
                value={this.state.email }
                onChange={this.handleChange}
                label="email"
                required/> <br/>
                <label>Password</label><br/>
                <input className="login-placeholder"
                name="password"
                type="password"
                label="password"
                value={this.state.password}
                onChange={this.handleChange}

                required  /> <br/>
                

                <input className="login-btn" type="submit" value="Login" /> <br/>
                <button className="login-btn" onClick={signInWithGoogle}>
                    {''}
                    Sign in with google {''}</button>
            </form>
           </div>
       ) 
    }

}
export default Login
