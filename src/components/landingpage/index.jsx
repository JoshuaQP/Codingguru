import React, { Component } from 'react'
import './landing.css';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div className='landing'>
                <img className=" landing-logo" src="/img/CodingGurus.png" alt="logo"/>
                <nav className="landingpage-nav">
                    
                    

                    <div className="Landing-links"> 
                <Link className="nav-link" to="/signup"><button className="signup-btn">Sign up</button></Link>                  
                <Link className="-link" to="/login"><span  className="login-link "> Login  </span></Link>
                    </div>

                </nav>
                <div>
                  <h1>Welcome to coding Gurus</h1>
                  <h2>Where the stundent become the teacher</h2>
                </div>
                

            </div>
        )
    }
}

export default Landing;