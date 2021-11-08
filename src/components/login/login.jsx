import React, { Component } from 'react'
import "./login.css"
import { Link } from 'react-router-dom';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'


class Login extends Component {
    constructor(props) {
        super(props);


        this.state = {
            email:"",
            password:"",
            
        };
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
    
    handleSubmit =  async event => { 
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email,password);

            this.setState({ email:'', password: '',});
        } catch (error){
          console.log(error)
        }

    };
    
    render() {
        return (
            

            <form className="login-container" onSubmit={this.handleSubmit}>
                <div>
                    <h1 className="login-header"> Login</h1>
                </div>
            <div>
                
                <label>EMAIL:</label> <br />
                <input className="login-placeholder"
                type="text" 
                value={this.state.email}
                onChange={this.HandleEmailChange}                 
                />      
            </div>

            <br />
            <div>

            <label>PASSWORD:</label> <br />
                <input className="login-placeholder"
                type="password" 
                value={this.state.password}
                onChange={this.HandlePasswordChange}                 
                />
            </div>

            <br />

            
            <button className="login-btn" type="submit" onChange={this.handleSubmit}>Log In</button> <br />
            <button className="login-btn" onClick={signInWithGoogle}>
                {''}
                Sign in with Google
                {''}
                </button>
            <div className="sign-up-link">
                <h6> Need an Account?</h6>
                <Link className="login-signup"  to="/signup">Signup now</Link>
            </div>

            </form>
        )
    }
}

export default Login

