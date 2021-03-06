import React, {Component} from "react";
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'




class SignUp extends Component {
    constructor(){
        super();
        this.state ={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password != confirmPassword) {
            alert("passwords don't match");
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

         await createUserProfileDocument(user,{ displayName });
         this.setState({ 
         displayName: '',
         email: '',
         password: '',
         confirmPassword: ''
        });
        } catch (error){
        console.error(error);
        }
    };

    handleChange = event => {
        const {name, value } =event.target;
        this.setState({[name]: value });
    }
    render(){
        const {displayName, email, password, confirmPassword } = this.state;
    return (
        <div>
            <form >
            <h2>I do not have an account</h2>
            <span>signup with email and password</span><br /><br />

            <label> DisplayName</label> <br />
                <input
                type='text'
                name='displayName'
                value={displayName}
                onChange={this.handleChange}
                label= 'displayName'
                required
                />
                <br />
                <label> Email</label><br /> 
                <input
                type='emil'
                name='email'
                value={email}
                onChange={this.handleChange}
                label= 'Email'
                required
                />
                <br />
                <label> Password</label> <br />
                <input
                type='password'
                name='password'
                value={password}
                onChange={this.handleChange}
                label= 'Password'
                required
                />
                <br />
                <label> Confirm Password</label>
                <br />
                <input
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={this.handleChange}
                label= 'confirmPassword'
                required
                />
                <br />
                <button onSubmit = {this.handleSubmit} type='submit'>Sign up</button>

            </form>
            
        </div>
    )
}
}

export default SignUp
